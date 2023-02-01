


import React, {useCallback, useEffect, useRef, useState} from 'react'

import { Virtuoso as VList } from 'react-virtuoso'
import faker from 'faker'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


//=============== TODO
// endless_scrolling - endReached

// stop load items after data_finished
// add item up down

// long touch
// useLongPress.js
// https://stackoverflow.com/questions/48048957/react-long-press-event


// pallete http://localhost:3000/

// TONY
// click item - show del button
//     set_card_is_last_toched_index

// select many csrds mode
//     set_card_is_in select many csrds mode

// ============= DONE
// search = as focus




//=== DOC
// load more
// https://codesandbox.io/s/erdsog

//=== DOC
// HeightPreservingItem
// empty line space when drag
// https://codesandbox.io/s/fj4sf0?file=/App.js:1537-1689



const footer_load_more_button = ({ context: { loadMore, loading } }) => {
    return (
        <div
            style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <button disabled={loading} onClick={loadMore}>
                {loading ? 'Loading...' : 'Press to load more'}
            </button>
        </div>
    )
}

function reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}


const HeightPreservingItem = ({ children, ...props }) => {
    const [size, setSize] = useState(64)
    const knownSize = props['data-known-size']
    useEffect(() => {
        setSize((prevSize) => {
            return knownSize == 0 ? prevSize : knownSize
        })
    }, [knownSize])
    return (
        <div
            {...props}
            className="height-preserving-container"
            // check styling in the style tag below
            style={{ '--child-height': `${size}px`, }}
        >
            {children}
        </div>
    )
}

const ListBasic = (props) => {

    console.log("=== === ListBasic props ",props)

    const local_list_width     = props.style.width;
    const local_list_height    = props.style.height;

    const Render_ListRow_local = props.render_ListRow
    const render_RowCard_local = props.render_RowCard

    // console.log("=== render_RowCard", render_RowCard_local)
    // console.log("=== props.children", props.children[0])
    // console.log("=== props.children", props.children[0]._source)

    const {data_array, set_data_array, data_on_reorder} = props
    console.log("=== data_array",data_array)
    const { data_fetch, data_new_lines_from_fetch, data_read_portion,
            main_list_ref,
            mode_load_more,
    } = props

    // const [data_fetch, set_data_fetch] = useState(props.data_fetch)

    const [loading, setLoading] = useState(false)

    const onDragEnd = React.useCallback(
        (result) => {
            if (!result.destination) {
                return
            }
            if (result.source.index === result.destination.index) {
                return
            }

            // void setItems
            set_data_array((items) => reorder(items, result.source.index, result.destination.index))

            data_on_reorder({
                source: {index:result.source.index, data_element:data_array[result.source.index]},
                destination: {index:result.destination.index, data_element:data_array[result.destination.index]}
            })

        },
        [set_data_array]
    )

// Virtuoso's resize observer can this error,
// which is caught by DnD and aborts dragging.
    window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.' || e.message === 'ResizeObserver loop limit exceeded') {
            e.stopImmediatePropagation()
        }
    })


    const loadMore = useCallback(() => {
        setLoading(true)

        data_fetch(
            {
                fetch_count:data_read_portion,
                fetch_skip:data_array.length
            }
        ).then(res => res.json()).then(data1 => {
                console.log("=================")
                console.log("================= data1", data1)
                console.log("=================")

                const params= {data_new:data1, index_from:data_array.length}
                const new2_ = data_new_lines_from_fetch(params)
                console.log("================= new2_", new2_)

                console.log("=== data_array", data_array)
                const x2_ = [...data_array, ...new2_]
                console.log("=== x2_", x2_)
                set_data_array(x2_)

                // console.log("=== data_array", data_array)
                // const new_ = data_read_more_function(data_read_portion, data_array.length)
                // console.log("=== new_", new_)
                // const x_ = [...data_array, ...new_]
                // console.log("=== x_", x_)
                // set_data_array(x_)

                setLoading(() => false)

            }
        );

    }, [data_array, setLoading])

    return (
    <div>
        {(props.mode_list_nav_panel!='auto')?'':
              <div>
                  <button
                      onClick={() => {

                          const behavior = 'auto'
                          const align = 'start'
                          // const align = 'end'
                          // const align = 'center'

                          main_list_ref.current.scrollToIndex({
                              index: 0,
                              align,
                              behavior
                          });
                          return false;
                      }}
                  >
                      Scroll To 0
                  </button>
              </div>
        }

        <div style={{ padding: '1rem' }}>
                        <style>
                            {`
                                  .height-preserving-container:empty {
                                    min-height: calc(var(--child-height));
                                    box-sizing: border-box;
                                  }
                            `}
                        </style>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId="droppable"
                    mode="virtual"
                    renderClone={(provided, snapshot, rubric) =>

                        <Render_ListRow_local
                            {...{
                                ...props,
                                provided : provided,
                                isDragging : snapshot.isDragging,
                                item : data_array[rubric.source.index],
                                render_RowCard : render_RowCard_local
                            }}
                        />
                    }
                >
                    {(provided) => {
                        return (
                            <VList

                                data={data_array}
                                ref={main_list_ref}
                                context={{ loadMore, loading }}
                                // mode_load_more
                                endReached={(mode_load_more=='atuo')?loadMore:()=>{}}
                                components={{
                                    Item: HeightPreservingItem,
                                    Footer:(mode_load_more=='press_button')?footer_load_more_button:()=>{},

                                }}
                                scrollerRef={provided.innerRef}
                                style={{ width: local_list_width, height: local_list_height, borderRadius:'15px'}}
                                itemContent={(index, item) => {

                                    return (
                                        <Draggable draggableId={item.post_guid} index={index} key={item.post_id}>

                                                {(provided) => <Render_ListRow_local

                                                    {...{
                                                        ...props,
                                                        provided: provided,
                                                        item: item,
                                                        isDragging: false,
                                                        render_RowCard: render_RowCard_local
                                                    }}
                                                    />
                                                }

                                        </Draggable>
                                    )
                                }}
                            />
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    </div>
    )
}

export default ListBasic




