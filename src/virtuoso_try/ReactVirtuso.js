
import React, {useCallback, useEffect, useRef, useState} from 'react'

import { Virtuoso as VList } from 'react-virtuoso'
import faker from 'faker'
import LRListRow from './ListRow'
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


const settings_list_posts_width     = 450;
const settings_list_posts_height    = 500;

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

const generateUsers = (length, end_data_array_index = 0) => {

    const generateUsers_ = Array.from({ length }).map((_, i) => getUser(i + end_data_array_index))
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
                                style={{ width: settings_list_posts_width, height: settings_list_posts_height, borderRadius:'15px'}}
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
