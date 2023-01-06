import React, {useEffect, useState} from 'react';

import faker from 'faker'
import InfiniteScroll from "react-infinite-scroller";

function InfiniteScrollModel () {

    const data000 = new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1),
    }));

    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const showItems = (posts) => {
        var items = [];
        for (var i = 0; i < records; i++) {
            items.push(
                <div className="post" key={posts[i].id}>
                    <h3>{`${posts[i].name} - ${posts[i].id}`}</h3>
                    <p>{posts[i].body}</p>
                </div>
            );
        }
        return items;
    };

    const loadMore = () => {
        if (records > 10 || records === data_list.length ) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setrecords(records + itemsPerPage);
            }, 2000);
        }
    };

    const [data_list, set_data_list] = useState(new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(1),
    })));

    return(

    <div className={'main_grid'}>
        <button onClick={(e)=>{
            console.log(111)

            data_list.unshift(
            {
                id: Date.now(),
                name: faker.name.firstName(5),
                body: faker.lorem.paragraph(3),
            })
            set_data_list(data_list)
        }}>Add____Up</button>
        <button>Add__Down</button>
        <section style={{ overflow: 'scroll', width:'80%', height:'600px', display: 'grid', gap: '2rem' }}>
        <InfiniteScroll
            pageStart={0}
            // datalength={5}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={(records>10)?'':<h4 className="loader">Loading...</h4>}
            useWindow={false}


        >
            {showItems(data_list)}
        </InfiniteScroll>
        </section>

    </div> // return

)

}
export default InfiniteScrollModel
