import React, {createRef, useEffect, useRef, useState} from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import faker from 'faker'
import { List } from "react-virtualized";

function ReactVirtualized () {

    const [dragStartIndex, setdragStartIndex] = useState(null);

    const list_rowHeight = 120
    // const card_Height = '100px'
    const [card_Height, set_card_Height] = useState(100);
    //=== auto start end
    const [settings_scrollToAlignment, set_settings_scrollToAlignment] = useState('center');

    const data000 = new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1).substring(1,40),
    }));


    // const [data_refs, set_data_refs] = useState(new Array(1000).fill().map((value, index) => ({  ref: useRef(null)  })));

    const [over_id, set_over_id] = useState('-');
    const [data_length, set_eata_length] = useState(data000.length);
    const data_refs = useRef([]);
    useEffect(() => {
        data_refs.current = data_refs.current.slice(0, data_length);
        console.log(data_refs)
    }, [data_length]);

    // const [data_refs, set_data_refs] = useState([]);

    const arrLength = data_length;

    const [data_list, set_data_list] = useState(
        data000
    );

    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);


    const onDrag_event = (e) => {

        console.log('=== onDrag_event', e.target.id);

    }

    const onDragStart_event = (e) => {
        console.log('=========== onStart_event', e.target.id);

    }

    const onDragEnd_event = (e) => {
        console.log('=========== onDragEnd_event', e.target.id);

    }

    const onDrop_event = (e) => {
        console.log('=========== onDrop_event', e.target.id);
    }

    const onTouchStart_event = (e) => {
        console.log('=========== onTouchStart_event', e.target.id);
    }
    const onTouchMove_event = (e) => {
        console.log('=========== onTouchMove_event', e.target.id);
        console.log('=========== e', e);
    }




    // TODO onTouchStart

    let divRefs = useRef({});




    const render1 = ( index, key, style ) => {

        const  ref1 = createRef()

        return (

            // style={{paddingTop: '20px', paddingBottom: '20px'}}


            // <Draggable nodeRef={ref => divRefs.current[index] = ref}
            //            key={key}
            //            onDrag={onDrag_event}
            //            onStart={onStart_event}
            //            onStop={onStop_event}
            //            onDrop={(index) => {
            //                console.log(5555555) }}
            // >
            //                 <div
            //                         ref={ref => divRefs.current[index] = ref}
            //                         name={'list_item_'+index.toString}
            //                         style={{...style,
            //                     // style_conteiner_row
            //                     // border:'1px solid blue',
            //
            //                     }}
            //                       className="post">
            //
            //                     <div
            //                         // style_conteiner_card
            //                         style={{
            //                         border:'1px solid red',
            //                         paddingLeft:'10px',
            //
            //                         marginTop: '5px',
            //                         borderRadius: '10px',
            //
            //                         height:card_Height,
            //
            //                         display:'flex',
            //                         flexDirection:'row',
            //                         gap:'10px',
            //
            //
            //                     }} >
            //                         <h5 style={{flex:1}}>{`${data_list[index].name}-${data_list[index].id}`}</h5>
            //                         <p style={{flex:2}} >{data_list[index].body}</p>
            //                     </div>
            //
            //                 </div>
            //     </Draggable>

                    <div
                        style={{touchAction: true}}
                        key={key}
                        id={'id_'+index}
                        ref = {ref1}
                        onDrag={onDrag_event}
                        onDragStart={onDragStart_event}
                        onDragEnd={onDragEnd_event}
                        onDragOver={(e)=>{
                            // console.log(e.target.id)
                            set_over_id(e.target.id)
                            e.preventDefault()
                        }
                        }
                        onDrop={onDrop_event}
                        draggable={true}


                        onTouchStart={onTouchStart_event}
                        onTouchMove={onTouchMove_event}

                    >
                        ddddd {index}

                    </div>

        )
    }
    const renderRow = ({ index, key, style }) => render1(index, key, style)

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

    function handleOnDragEnd(result) {
        console.log("=== result ",result)
        // if (!result.destination) return;
        //
        // const items = Array.from(characters);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);
        //
        // updateCharacters(items);
    }


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

        <p>over_id = {over_id}</p>


        {/*<section style={{ overflow: 'scroll', width:'8 0%', height:'600px', display: 'grid', gap: '2rem' }}>*/}


                        <List
                            // style={{marginTop: '3px'}}
                            width={300}
                            height={500}
                            rowRenderer={renderRow}
                            rowCount={data_list.length}
                            rowHeight={list_rowHeight}
                            scrollToIndex={row_index_to_scroll}
                            scrollToAlignment={settings_scrollToAlignment}
                            useDragHandle
                        />



        {/*</section>*/}

    </div> // return

)

}
export default ReactVirtualized
