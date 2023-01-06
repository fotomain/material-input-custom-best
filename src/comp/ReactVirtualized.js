import React, {useEffect, useRef, useState} from 'react';

import faker from 'faker'
import { List } from "react-virtualized";

function ReactVirtualized () {

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

            <div  key={key} style={{...style,paddingTop: '20px'}} className="post">
                <h5>{`${data_list[index].name}-${data_list[index].id}`}</h5>

                <p>{data_list[index].body}</p>

            </div>


    )

    const tableRef = useRef();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(
        () => {
            if(tableRef) {
                tableRef.current.recomputeRowHeights();
            }
        },
        [selectedIndex]
    );

    return(

    <div className={'main_grid'}>
        <button onClick={(e)=>{
            console.log(111)

            const t_index = Date.now()
            data_list.unshift(
            {
                id: t_index,
                name: faker.name.firstName(5),
                body: faker.lorem.paragraph(1).substring(1,40),            })
            set_data_list(data_list)
            setSelectedIndex(t_index)
        }}>Add____Up</button>
        <button>Add__Down</button>
        {/*<section style={{ overflow: 'scroll', width:'80%', height:'600px', display: 'grid', gap: '2rem' }}>*/}


            <List
                ref={tableRef}
                width={300}
                height={500}
                rowRenderer={renderRow}
                rowCount={data_list.length}
                rowHeight={120}
            />
        {/*</section>*/}

    </div> // return

)

}
export default ReactVirtualized
