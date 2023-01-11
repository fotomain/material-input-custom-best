
import React,  {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker'

// DOC CSS https://github.com/bvaughn/react-virtualized/blob/master/source/styles.css
import { WindowScroller, List } from "react-virtualized";


import {
    Droppable,
    Draggable,
    DragDropContext,
         // DroppableProvided,
         // DraggableProvided,
         // DraggableStateSnapshot,
         // DraggableRubric,
         // DropResult,
} from 'react-beautiful-dnd';
// react-virtualized-beautiful-dnd
import ListRow from "./ListRow";

function ReactVirtualized () {

    const data000 = new Array(1000).fill().map((value, index) => ({
        id: index.toString(),
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1),
    }));

    // react-virtualized STYLES owerride
    var list_style={
        background:'white',
        border:'1px solid white',
        borderRadius:'10px',
        marginTop:'10px',
        marginBottom:'10px',
    }

    const [data_list, set_data_list] = useState(new Array(1000).fill().map((value, index) => ({
        id: index.toString(),
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1).substring(1,40),
    })));
    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const getRowRender  = ( row_data_array ) => ({ index, style }) => {

        const row_data = row_data_array[index];

        return (
            <Draggable
                draggableId={row_data.id}
                index={index}
                key={row_data.id}>
                {(provided, snapshot) => (
                    <ListRow
                        provided={provided}
                        row_data={row_data}
                        isDragging={snapshot.isDragging}
                        style={{ margin: 0, ...style }}
                        index={index}
                    />
                )}
            </Draggable>

        );
    }
    // (
    //     // style={{paddingTop: '20px', paddingBottom: '20px'}}
    //
    //     <div  key={key} style={{...style,paddingTop: '20px'}} className="post">
    //         <h5>{`${data_list[index].name}-${data_list[index].id}`}</h5>
    //
    //         <p>{data_list[index].body}</p>
    //
    //     </div>
    //
    //
    // )

    const tableRef = useRef();
    const [selected_id, set_selected_id] = useState(-1);
    const [row_index_to_scroll, set_row_index_to_scroll] = useState(-1);

    useEffect(
        () => {
            if(tableRef) {
                // tableRef.current.recomputeRowHeights();

            }
        },
        [selected_id]
    );


    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        if (result.source.index === result.destination.index) {
            return;
        }

        const newQuotes = reorder(
            data_list,
            result.source.index,
            result.destination.index,
        );
        set_data_list(newQuotes);
    }

    const reorder = (list , startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    return(

        <div className={'main_grid'}>
            <button onClick={(e)=>{
                console.log(111)

                const t_id = Date.now()
                data_list.unshift(
                    {
                        id: t_id,
                        name: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),            })
                set_data_list(data_list)
                set_selected_id(t_id)
                set_row_index_to_scroll(1)
            }}>Add____Up</button>

            <button onClick={(e)=>{
                console.log(111)

                const t_id = Date.now()
                // const t_random = 0
                const t_random = Math.round((Math.random()*999))
                console.log(t_random)

                data_list.splice(t_random,0,
                    {
                        id: t_id,
                        name: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),            })
                set_data_list(data_list)
                set_selected_id(t_id)
                set_row_index_to_scroll(t_random)
            }}>Add__Random</button>


            <button onClick={(e)=>{
                console.log(111)

                const t_id = Date.now()
                data_list.push(
                    {
                        id: t_id,
                        name: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),            })
                set_data_list(data_list)
                set_selected_id(t_id)
                set_row_index_to_scroll(data_list.length-1)
            }}>Add__Down</button>


            {/*<section style={{ overflow: 'scroll', width:'80%', height:'600px', display: 'grid', gap: '2rem' }}>*/}

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId="droppable"
                    mode="virtual"
                    renderClone={(
                        provided  ,
                        snapshot  ,
                        rubric  ,
                    ) => (
                        <ListRow
                            provided={provided}
                            isDragging={snapshot.isDragging}
                            quote={data_list[rubric.source.index]}
                            style={{ margin: 0 }}
                            index={rubric.source.index}
                        />
                    )}
                >
                {(droppableProvided) => (
                            <WindowScroller>
                                {({ height, isScrolling, onChildScroll, scrollTop }) => (


                                <List
                                    style={list_style}
                                    ref={(ref) => {
                                        // react-virtualized has no way to get the list's ref that I can so
                                        // So we use the `ReactDOM.findDOMNode(ref)` escape hatch to get the ref
                                        if (ref) {
                                            // eslint-disable-next-line react/no-find-dom-node
                                            const whatHasMyLifeComeTo = ReactDOM.findDOMNode(ref);
                                            if (whatHasMyLifeComeTo instanceof HTMLElement) {
                                                droppableProvided.innerRef(whatHasMyLifeComeTo);
                                            }
                                        }
                                    }}

                                    width={300}
                                    height={500}
                                    rowRenderer={getRowRender(data_list)}
                                    rowCount={data_list.length}
                                    rowHeight={120}
                                    scrollToIndex={row_index_to_scroll}

                                />
                            )}
                                </WindowScroller>
                        )}
                </Droppable>
                </DragDropContext>
            {/*</section>*/}

        </div> // return

    )

}
export default ReactVirtualized
