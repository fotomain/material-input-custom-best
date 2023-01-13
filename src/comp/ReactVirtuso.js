
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



// Generate our initial big data set
const initial = Array.from({ length: 1000 }, (_, k) => ({
    id: `id:${k.toString()}`,
    text: `item ${k}`,
}))

const user = (index = 0) => {
    let firstName = faker.name.firstName(3)
    let lastName = faker.name.lastName(3)

    return {
        id: `id:${(index + 1).toString()}`,
        text: `${firstName} ${lastName}`,
    }
}



const generated = []

const getUser = (index) => {
    if (!generated[index]) {
        generated[index] = user(index)
    }

    return generated[index]

}

const generateUsers = (length, startIndex = 0) => {

    const generateUsers_ = Array.from({ length }).map((_, i) => getUser(i + startIndex))
    console.log("=== generateUsers_",generateUsers_)
    return generateUsers_
}



const footer_load_more = ({ context: { loadMore, loading } }) => {
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

function LRListRow({ provided, item, isDragging }) {
    console.log(item.id)
    const a = parseFloat(item.id.substring(3,5))/2
    const b = parseInt(parseInt(item.id.substring(3,5))/2)
    console.log(item.id)
    console.log(a)
    console.log(b)

    const style_local={
            // palette_card_background
            backgroundColor: `rgb(${'115, 138, 138, 0.1'})` ,
            // backgroundColor: `rgb(${box.color})` ,
            // backgroundColor: 'gray',
            // backgroundColor: 'white',

            //=== DOC https://cssgenerator.org/box-shadow-css-generator.html
            boxShadow: '5px 5px 15px 0px rgb(135,115,115)',
            // border: '1px solid magenta',
            // border: '1.5px solid gray',
            // border: '1.5px solid white',
            borderRadius: '15px',
            // height: (a===b)?'100px':'50px',
            height: '100px',
            padding: '4px' }

    const embedId="rokGy0huYEA"
    const style_post_binary={
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        position: 'absolute',
    }

    return (
        <div name={'dv_post_card_container'}  style={{
            // border: '1px solid blue' ,
            padding: '4px'
        }}>
            <div>
                <div name={'dv_post_card'}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{...style_local,...provided.draggableProps.style}}
                    className={`item1 ${isDragging ? 'is-dragging' : ''}`}
                >
                    {item.text}
                    <div >
                        <iframe
                            // style={style_post_binary}
                            width="73px"
                            height="40px"
                            src={`https://www.youtube.com/embed/${embedId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>

                {/*<input type="text" name="sss" id="fff" value={size} onChange={(e)=>{*/}
                {/*    console.log(e.target.value)*/}
                {/*    setSize(parseInt(e.target.value))*/}
                {/*}}/>*/}

            </div>
        </div>
    )
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

export default function App() {

    const [items, setItems] = useState(initial)
    const [loading, setLoading] = useState(false)

    const loadMore = useCallback(() => {
        setLoading(true)
        return setTimeout(() => {
            setItems((prev) => [...prev, ...generateUsers(100, items.length)])
            setLoading(() => false)
        }, 500)
    }, [setItems, setLoading])

    //=== 111

    const onDragEnd = React.useCallback(
        (result) => {
            if (!result.destination) {
                return
            }
            if (result.source.index === result.destination.index) {
                return
            }

            // void setItems
            setItems((items) => reorder(items, result.source.index, result.destination.index))
        },
        [setItems]
    )


// Virtuoso's resize observer can this error,
// which is caught by DnD and aborts dragging.
    window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.' || e.message === 'ResizeObserver loop limit exceeded') {
            e.stopImmediatePropagation()
        }
    })



    const main_list_ref = useRef(null);

    return (
    <div>
              <div>
                  <button
                      onClick={() => {

                          const behavior = 'auto'
                          const align = 'start'
                          // const align = 'end'
                          // const align = 'center'

                          main_list_ref.current.scrollToIndex({
                              index: 10,
                              align,
                              behavior
                          });
                          return false;
                      }}
                  >
                      Scroll To 1
                  </button>
              </div>

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
                    renderClone={(provided, snapshot, rubric) => (
                        <LRListRow provided={provided} isDragging={snapshot.isDragging} item={items[rubric.source.index]} />
                    )}
                >
                    {(provided) => {
                        return (
                            <VList
                                ref={main_list_ref}
                                context={{ loadMore, loading }}
                                endReached={loadMore}
                                components={{
                                    Item: HeightPreservingItem,
                                    Footer:footer_load_more,

                                }}
                                scrollerRef={provided.innerRef}
                                data={items}
                                style={{ width: 300, height: 500, borderRadius:'15px'}}
                                itemContent={(index, item) => {
                                    return (
                                        <Draggable draggableId={item.id} index={index} key={item.id}>
                                            {(provided) => <LRListRow provided={provided} item={item} isDragging={false} />}
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
