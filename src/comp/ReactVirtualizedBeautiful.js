﻿
import React,  {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker'
import { WindowScroller, List } from "react-virtualized";


// ============= TODO
//
// TONY pallete
// flex 2 columns
// background_image_base64
//      from asset
// auto add
// click item - show del button
//     set_card_is_last_toched_index

// select many csrds mode
//     set_card_is_in select many csrds mode

//
// ============= DONE
// search = as focus
// stop load items after data_finished
// add item up down


//=== DOC CSS https://github.com/bvaughn/react-virtualized/blob/master/source/styles.css
//=== DOC https://codesandbox.io/s/vertical-list-forked-ifl58?file=/index.js
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

    const row_data_heigth = 100;

    const list_style={
        list_container: {
            background: 'white',
            border: '1px solid white',
            borderRadius: '10px',

            marginTop: '10px',
            marginBottom: '10px',

            paddingLeft:'8px',
            paddingRight:'8px',

        },
        row_container: {

            marginTop: '5px',
            // marginLeft: '15px',
            // marginRight: '15px',

            backgroundColor: 'teal',
            opacity: '0.8',

            border:'1px solid red',

            borderRadius: '10px',

            height:row_data_heigth,

            display:'flex',
            flexDirection:'row',
            gap:'10px',


        }
    }

    const get_data_list = (count1, count2) => Array(1000).fill().map((value, index) => ({
        id: index.toString(),
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1).substring(1,40),
        style_normal: {
            background_image_base64:'/images_public/bkg3.jpg"',
            backgroundColor:'teal',
        },
        style_when_drug: {

            backgroundColor:'yellow',
        },
    }));

    const items_portion_to_add = 10

    const [end_number, set_end_number] = useState(items_portion_to_add);


    const [data_list, set_data_list] = useState(get_data_list(0,end_number));


    const getRowRender  = ( row_data_array ) => ({ index, style }) => {

        const row_data_object = row_data_array[index];
        // console.log("=== style111 ",style)

        return (
            <Draggable
                draggableId={row_data_object.id.toString()}
                index={index}
                key={row_data_object.id}>

                {(provided, snapshot) => {

                    console.log(snapshot.isDragging + ' ' + Date.now())

                    const style1 = {
                        ...provided.draggableProps.style,
                        ...list_style.row_container,
                    };

                    const style2 = {
                        ...provided.draggableProps.style,
                        ...list_style.row_container_when_drug,
                    };

                    return (
                        <ListRow
                            provided={provided}
                            // snapshot={snapshot}
                            row_array={data_list}
                            isDragging={snapshot.isDragging}
                            style={snapshot.isDragging?style1:style2}
                            index={index}
                        />)
                }}
            </Draggable>

        );
    }

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

        const newRows = reorder(
            data_list,
            result.source.index,
            result.destination.index,
        );
        // set_data_list(newRows);
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

                const t_id = Date.now().toString()
                data_list.unshift(
                    {
                        id: t_id,
                        name: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),
                        style_normal: {
                            background_image_base64:'/images_public/bkg3.jpg"',
                            backgroundColor:'teal',
                        },
                        style_when_drug: {

                            backgroundColor:'yellow',
                        },

                    })
                set_data_list(data_list)
                set_selected_id(t_id)
                set_row_index_to_scroll(0)

            }}>Add____Up</button>

            <button onClick={(e)=>{
                console.log(111)


            }}>Add__Random</button>


            <button onClick={(e)=>{

                console.log(222)

                const t_id = Date.now().toString()
                const nn = data_list.length-1
                console.log("=== nn ",nn)
                data_list.push(
                    {
                        id: t_id,
                        name: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),
                        style_normal: {
                            background_image_base64:'/images_public/bkg3.jpg"',
                            backgroundColor:'teal',
                        },
                        style_when_drug: {

                            backgroundColor:'yellow',
                        },

                    })
                set_data_list(data_list)
                set_selected_id(t_id)

                set_row_index_to_scroll(nn+1)
                console.log("=== nn ",nn)

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
                            row_array={data_list}
                            style={{ margin: 0 }}
                            index={rubric.source.index}
                        />
                    )}
                >
                    {(droppableProvided) => (
                        <WindowScroller>
                            {({ height, isScrolling, onChildScroll, scrollTop }) => (


                                <List
                                    style={list_style.list_container}
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