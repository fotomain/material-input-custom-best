import React, {useEffect, useRef, useState} from 'react';

import faker from 'faker'
import { List } from "react-virtualized";

function ReactVirtualized () {

    const list_rowHeight = 120
    // const card_Height = '100px'
    const [card_Height, set_card_Height] = useState(100);
    //=== auto start end
    const [settings_scrollToAlignment, set_settings_scrollToAlignment] = useState('center');

    const data000 = new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1),
    }));

    const [data_list, set_data_list] = useState(new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1).substring(1,40),
    })));

    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const renderRow = ({ index, key, style }) => (
        // style={{paddingTop: '20px', paddingBottom: '20px'}}

            <div  key={key} style={{...style,
                // style_conteiner_row
                // border:'1px solid blue',

                }}
                  className="post">

                <div
                    // style_conteiner_card
                    style={{
                    border:'1px solid red',
                    paddingLeft:'10px',

                    marginTop: '5px',
                    borderRadius: '10px',

                    height:card_Height,

                    display:'flex',
                    flexDirection:'row',
                    gap:'10px',


                }} >
                    <h5 style={{flex:1}}>{`${data_list[index].name}-${data_list[index].id}`}</h5>
                    <p style={{flex:2}} >{data_list[index].body}</p>
                </div>

            </div>


    )

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


        {/*<section style={{ overflow: 'scroll', width:'8 0%', height:'600px', display: 'grid', gap: '2rem' }}>*/}


            <List
                // style={{marginTop: '3px'}}
                ref={tableRef}
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
