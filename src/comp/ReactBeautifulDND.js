import React, {createRef, useEffect, useRef, useState} from 'react';

// DOC https://codesandbox.io/s/slack-basic-clone-forked-tvck8b?file=/src/App.css:0-167
// DOC searc and center https://codesandbox.io/s/x483r?file=/src/App.js
// DOC save refs https://codesandbox.io/s/pagination-drag-and-drop-ck83o?file=/src/App.tsx:1252-1258
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import composeRefs from "@seznam/compose-react-refs";
import faker from 'faker'

import bkg1 from "./images_main/bkg1.jpg";

// import './ReactBeautifulDND.css';

// ============= TODO
// pallete http://localhost:3000/

// TONY
// click item - show del button
//     set_card_is_last_toched_index

// select many csrds mode
//     set_card_is_in select many csrds mode

// del item
//      from array
//      from node
// DELETE NOT VISIBLE nodes of list
//
// ============= DONE
// search = as focus
// stop load items after data_finished
// add item up down

function ReactBeautifulDND () {

    const items_portion_to_add = 10

    const card_container_padding = 5;
    const card_container_height = 500;
    const card_container_width  = 250;

    const [do_add_data_list, set_do_add_data_list] = useState(false);
    const [end_number, set_end_number] = useState(items_portion_to_add);
    const [show_data, set_show_data] = useState(null);

    const get_data_list = (count1, count2) =>
        Array.from({ length: (count2-count1) }, (v, k) => k).map(k => ({
            id: `item-${count1+k}`,
            div_id: `div_${count1+k}`,
            title: `item ${count1+k}`,
            body: `item ${count1+k}`
        }));

    const [data_list, set_data_list] = useState(get_data_list(0,end_number));
    const [id_to_focus, set_id_to_focus] = useState(null);

    console.log("=== data_list for render")
    console.log(data_list)


    const color1 = "rgba(165, 97, 42, 0.41)"
    const color2 = "rgba(165, 97, 42, 0.26)"
    const color3 = "rgba(165, 97, 42, 0.17)"
    const color4 = "white"

    const list_container_style = isDraggingOver => ({
        // background: isDraggingOver ? color1:color2,
        backgroundImage: 'url(' + bkg1 + ')',
        padding: card_container_padding,
        height: card_container_height,
        width: card_container_width,
        overflow:'auto',
    });

    const card_container_style = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'start',

        userSelect: "none",
        padding: card_container_padding * 2,
        margin: `0 0 ${card_container_padding}px 0`,
        height:'80px',

        // change background colour if dragging
        background: isDragging ? color3:color4,
        border: isDragging ? '2px solid green':'',

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const reorder_data_list = (list, i10, i5) => {
        var result = Array.from(list);
        //del on old place
        const [el_removed] = result.splice(i10, 1);
        // console.log("=== result del on old place ",result)
        // for (let i = 0; i <result.length ; i++) {
        //     console.log(result[i])
        // }
        //ins into new place
        result.splice(i5, 0, el_removed);
        // console.log("=== result ins into new place ",result)

        return result;
    };
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const new1 = reorder_data_list(
            data_list,
            result.source.index,
            result.destination.index
        );

        set_data_list(new1)
    }

    useEffect(() => {

        if(do_add_data_list){

            const do_add = (data_list.length<20)

            if(do_add) {

                var new1 = get_data_list(end_number, (end_number + items_portion_to_add))
                console.log("=== new1 ")
                console.log(new1)

                // console.log("=== nn ",nn)
                // set_items((prev)=>[...prev,...nn])
                set_data_list(prev => {

                    return [...prev, ...new1]

                })

                set_end_number(prev => {
                    return prev + items_portion_to_add
                })

                set_do_add_data_list(false)
            }
        }

        return () => {

        };
    }, [do_add_data_list]);

     useEffect(() => {

            const options = {
                rootMargin: '0px',
                threshold: 1.0
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0){
                        console.log('=== YES visible item '+end_number+"   "+Date.now());
                        set_do_add_data_list(true)
                    }else{
                        console.log('=== NOT visible item '+end_number+"   "+Date.now());
                    }

                });
            }, options);
    //
    //         // end_number
             const first_element = document.querySelector('#item-'+(0))
             const last_element = document.getElementById('div_'+(end_number-1))
             // console.log("=== last_element",last_element)
                if(last_element) {
                    observer.observe(last_element);
                }

             return () => {
                 observer.disconnect();
             };

     },[end_number,show_data]);

    useEffect(() => {

        if(id_to_focus) {
            console.log("=== id_to_focus ",id_to_focus)
            const el = document.getElementById(id_to_focus)
            if(el) {
                el.style.background = 'pink'
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start" //can take start, end
                });
                window.setTimeout(() => {
                    el.style.background = 'white'
                    el.focus()
                }, 500);
            }
        }
        return () => {

        };
    }, [id_to_focus]);


    const input_search_onChange_event = (e) => {
         // getElementById
        // dnd_div_item-10
            set_id_to_focus(e.target.value)

    }


    // const ref_store = useRef(new Array());
    const ref_store = useRef<HTMLDivElement>(null)

    const scroll1 = useRef<HTMLDivElement>(null);


    const [refs, set_refs] = useState([]);
    const f_save_ref_id = (item_ref,item_id ) =>{
        const ref1 = item_ref
        ref_store.current[item_id]=ref1
        console.log(ref1,item_id)
        console.log(ref_store)
        return ref1
    }

    return(

        <div className={'main_grid'}>

            {/*search = as focus*/}
            <input type="text" name="" id=""
                   onChange={(e)=>input_search_onChange_event(e)}
            />

            <button onClick={(e)=>{


                console.log(111)

                const t_id = Date.now()
                data_list.unshift(
                    {
                        id: t_id.toString(),
                        div_id: "div_"+t_id.toString(),
                        title: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),            })
                set_data_list(data_list)
                set_id_to_focus("div_"+t_id.toString())

            }}>Add____Up</button>

            <button onClick={(e)=>{

                console.log(222)

                const t_id = Date.now()
                data_list.push(
                    {
                        id: t_id.toString(),
                        div_id: "div_"+t_id.toString(),
                        title: faker.name.firstName(5),
                        body: faker.lorem.paragraph(1).substring(1,40),            })
                set_data_list(data_list)
                set_id_to_focus("div_"+t_id.toString())


            }}>Add____Dn</button>


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
                        {data_list.map((item, index) => (
                            <Draggable  key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div id={item.div_id}
                                        ref={

                                            composeRefs(provided.innerRef, scroll1)

                                            // f_save_ref_id(provided.innerRef,'dnd_div_'+item.id)

                                            }
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={card_container_style(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        <h3 style={{flex:1, textAlignVertical:'bottom'}}>{item.title}</h3>
                                        <p  style={{flex:2  }}>{item.body}</p>
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
