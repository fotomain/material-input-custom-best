import React, {createRef, useEffect, useRef, useState} from 'react';

// DOC https://codesandbox.io/s/slack-basic-clone-forked-tvck8b?file=/src/App.css:0-167
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import faker from 'faker'
// import './ReactBeautifulDND.css';



function ReactBeautifulDND () {

    const card_container_heigth = 16;

    const items_portion =6

    const [do_add_items, set_do_add_items] = useState(false);
    const [end_number, set_end_number] = useState(items_portion);
    const [show_data, set_show_data] = useState(null);



    const getItems = (count1, count2) =>
        Array.from({ length: (count2-count1) }, (v, k) => k).map(k => ({
            id: `item-${count1+k}`,
            content: `item ${count1+k}`
        }));

    const [items, set_items] = useState(getItems(0,end_number));

    console.log("=== items ")
    console.log(items)


    const color1 = "rgba(165, 97, 42, 0.41)"
    const color2 = "rgba(165, 97, 42, 0.26)"

    const list_container_style = isDraggingOver => ({
        background: isDraggingOver ? color1:color2,
        padding: card_container_heigth,
        height: 500,
        width: 250,
        overflow:'auto',
    });

    const card_container_style = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: card_container_heigth * 2,
        margin: `0 0 ${card_container_heigth}px 0`,

        // change background colour if dragging
        background: isDragging ? "rgba(165, 97, 42, 0.17)" : "white",

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

        if(do_add_items){

            var items2 = getItems(end_number,(end_number + items_portion))
            console.log("=== items2 ")
            console.log(items2)
            var nn = [...items]
            nn = [...items2]
            // console.log("=== nn ",nn)
            // set_items((prev)=>[...prev,...nn])
            set_items(prev=>{

                return [...prev, ...items2]

            })

            set_end_number(prev=> {
                return prev+items_portion
            })

            set_do_add_items(false)
        }

        return () => {

        };
    }, [do_add_items]);

     useEffect(() => {

            const options = {
                rootMargin: '0px',
                threshold: 1.0
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0){
                        console.log('=== YES visible item '+end_number+"   "+Date.now());
                        set_do_add_items(true)
                    }else{
                        console.log('=== NOT visible item '+end_number+"   "+Date.now());
                    }

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

             return () => {
                 observer.disconnect();
             };

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
                        style={list_container_style(snapshot.isDraggingOver)}
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
                                        style={card_container_style(
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
