import React, {createRef, useEffect, useRef, useState} from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import faker from 'faker'

// DOC https://codesandbox.io/s/slack-basic-clone-forked-tvck8b?file=/src/App.css:0-167

function ReactBeautifulDND () {

    const grid = 16;

    const [end_number, set_end_number] = useState(10);
    const [show_data, set_show_data] = useState(null);

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        height: 500,
        width: 250,
        overflow:'auto',
    });


    const getItems = count =>
        Array.from({ length: count }, (v, k) => k).map(k => ({
            id: `item-${k}`,
            content: `item ${k}`
        }));

    const [items, set_items] = useState(getItems(end_number));

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items1 = reorder(
             items,
            result.source.index,
            result.destination.index
        );

        set_items(items1)
    }

     useEffect(() => {

            const options = {
                rootMargin: '0px',
                threshold: 1.0
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    console.log(entry.intersectionRatio > 0 ? '=== YES visible  '+Date.now() : '=== NOT visible '+Date.now());
                });
            }, options);
    //
    //         // end_number
             const first_element = document.querySelector('#item-'+(0))
             const last_element = document.getElementById('div_item-'+(end_number-1))
             // console.log("=== last_element",last_element)
                if(last_element) {
                    observer.observe(last_element);
                }

     },[end_number,show_data]);


    return(

        <div className={'main_grid'}>

            <button onClick={(e)=>{
                console.log(111)

                // const t_id = Date.now()
                // data_list.unshift(
                //     {
                //         id: t_id,
                //         name: faker.name.firstName(5),
                //         body: faker.lorem.paragraph(1).substring(1,40),            })
                // set_data_list(data_list)
                // set_selected_id(t_id)
                // set_row_index_to_scroll(1)
                //
            }}>Add____Up</button>

        <DragDropContext onDragEnd={onDragEnd}>
            <div className="stack__container" >
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        onScroll={(e)=>{
                            // console.log(e)}
                            set_show_data(e)
                        }}
                    >
                        {items.map((item, index) => (
                            <Draggable  key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div id={'div_'+item.id}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </div>
        </DragDropContext>
        </div>

)

}
export default ReactBeautifulDND
