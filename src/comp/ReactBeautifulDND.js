import React, {createRef, useEffect, useRef, useState} from 'react';

// DOC https://codesandbox.io/s/slack-basic-clone-forked-tvck8b?file=/src/App.css:0-167
// DOC searc and center https://codesandbox.io/s/x483r?file=/src/App.js
// DOC save refs https://codesandbox.io/s/pagination-drag-and-drop-ck83o?file=/src/App.tsx:1252-1258
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import composeRefs from "@seznam/compose-react-refs";
// import faker from 'faker'
// import './ReactBeautifulDND.css';

// todo
// search = as focus
// stop load items after data_finished
// add item up down
// del item
//      from array
//      from node
// >show only some nodes of list

function ReactBeautifulDND () {

    const card_container_padding = 5;
    const card_container_height = 500;
    const card_container_width  = 250;


    const items_portion = 6

    const [do_add_data_list, set_do_add_data_list] = useState(false);
    const [end_number, set_end_number] = useState(items_portion);
    const [show_data, set_show_data] = useState(null);

    const get_data_list = (count1, count2) =>
        Array.from({ length: (count2-count1) }, (v, k) => k).map(k => ({
            id: `item-${count1+k}`,
            title: `item ${count1+k}`,
            body: `item ${count1+k}`
        }));

    const [data_list, set_data_list] = useState(get_data_list(0,end_number));

    console.log("=== data_list for render")
    console.log(data_list)


    const color1 = "rgba(165, 97, 42, 0.41)"
    const color2 = "rgba(165, 97, 42, 0.26)"
    const color3 = "rgba(165, 97, 42, 0.17)"
    const color4 = "white"

    const list_container_style = isDraggingOver => ({
        background: isDraggingOver ? color1:color2,
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

            var new1 = get_data_list(end_number,(end_number + items_portion))
            console.log("=== new1 ")
            console.log(new1)

            // console.log("=== nn ",nn)
            // set_items((prev)=>[...prev,...nn])
            set_data_list(prev=>{

                return [...prev, ...new1]

            })

            set_end_number(prev=> {
                return prev+items_portion
            })

            set_do_add_data_list(false)
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
             const last_element = document.getElementById('dnd_div_item-'+(end_number-1))
             // console.log("=== last_element",last_element)
                if(last_element) {
                    observer.observe(last_element);
                }

             return () => {
                 observer.disconnect();
             };

     },[end_number,show_data]);

    const input_search_onChange_event = (e) => {
         // getElementById
        // dnd_div_item-10

            const el = document.getElementById(e.target.value)
            el.style.background='pink'
            el.scrollIntoView({
                behavior: "smooth",
                block: "start" //can take start, end
            });
            window.setTimeout(() => {
                el.style.background='white'
                el.focus()
            }, 500);

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
                        {data_list.map((item, index) => (
                            <Draggable  key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div id={'dnd_div_'+item.id}
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
