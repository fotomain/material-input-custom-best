

// === DOC https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md
// === DOC image
// https://upmostly.com/tutorials/react-background-image

// https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js

import React,  {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker'
import { WindowScroller, List as VList } from "react-virtualized";
// how to sst heigth for WindowScroller react-virtualized
//  react-virtualized behavior smooth scrollToIndex

import 'react-virtualized/styles.css';

// ============= TODO
// last - to bottom mode scrollToIndex={row_index_to_scroll}
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
import ListRow from "../virtuoso_try/ListRow";

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

    const get_data_list = (count1, count2) =>
        Array.from({ length: (count2-count1) }, (v, k) => k).map(k => ({
            id: (count1+k).toString(),
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

    const [main_ref, set_main_ref] = useState(null);
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

                    // console.log(snapshot.isDragging + ' ' + Date.now())

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
    const [row_index_to_scroll, set_row_index_to_scroll] = useState(0);

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
        set_data_list(newRows);
    }

    const reorder = (list , startIndex, endIndex) => {
        console.log("=== list ",list)
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        console.log("=== result ",result)
        return result;
    };

    const _onScrollToRowChange = (e) => {

        console.log(e.target.value)
        set_row_index_to_scroll(parseInt(e.target.value, 10),)

    }

    return(

        <div className={'main_grid'}>

            {/* === DOC https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js*/}
            <input
                label="Scroll to"
                name="onScrollToRow"
                placeholder="Index..."
                onChange={(e)=>_onScrollToRowChange(e)}
                value={row_index_to_scroll || ''}
            />


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

                set_row_index_to_scroll(nn-1)

                // const SCROLL_DEBOUNCE_DELAY=500;
                // setTimeout(
                //     () => main_ref.current.scrollToIndex(nn),
                //     SCROLL_DEBOUNCE_DELAY
                // );


                console.log("=== nn ",nn)
                console.log("=== data_list ",data_list)


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
                        <div className={"list1"}>
                            <WindowScroller
                                // width={300}
                                // height={500}

                            >
                                {({ height, width, registerChild, isScrolling, onChildScroll, scrollTop }) => (

                                    <div ref={registerChild}>
                                        <VList
                                            // autoHeight
                                            width={width}
                                            height={height}

                                            // width={300}
                                            // height={500}

                                            isScrolling={isScrolling}
                                            onScroll={onChildScroll}
                                            scrollTop={scrollTop}

                                            rowHeight={120}

                                            style={list_style.list_container}
                                            ref={(ref) => {
                                                // react-virtualized has no way to get the list's ref that I can so
                                                // So we use the `ReactDOM.findDOMNode(ref)` escape hatch to get the ref
                                                if (ref) {

                                                    // eslint-disable-next-line react/no-find-dom-node
                                                    const whatHasMyLifeComeTo = ReactDOM.findDOMNode(ref);
                                                    if (whatHasMyLifeComeTo instanceof HTMLElement) {
                                                        set_main_ref(whatHasMyLifeComeTo)
                                                        droppableProvided.innerRef(whatHasMyLifeComeTo);
                                                    }
                                                }
                                            }}


                                            // height={500}
                                            rowRenderer={getRowRender(data_list)}
                                            rowCount={data_list.length}

                                            scrollToIndex={row_index_to_scroll}

                                            // scrollToIndex={{
                                            //     index: row_index_to_scroll,
                                            //     behavior: "smooth"
                                            // }}
                                        />
                                    </div>
                                )}
                            </WindowScroller>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {/*</section>*/}

        </div> // return

    )

}
export default ReactVirtualized
