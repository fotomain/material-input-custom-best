

import ListBasic from "./ListBasic";
import {useRef, useState} from "react";
import ListPosts from "./ListPosts";

const content_posts_data = Array.from({ length: 20 }, (_, k) => ({
    id: `id:${k.toString()}`,
    text: `item ${k}`,
}))

const content_posts_data_read_more_function = (length, end_data_array_index = 0) => {


}


// posts_data_read_more_function

const ReactVirtuso = () => {

    const list_ref1 = useRef(null);
    const [data_array_posts, set_data_array_posts] = useState(content_posts_data)

    return (
        <div>
            <ListPosts
                main_list_ref={list_ref1}
                data_array={data_array_posts}
                set_data_array={set_data_array_posts}
                data_read_more_function={content_posts_data_read_more_function}
                data_read_portion={10}

            />
        </div>
    );
};

export default ReactVirtuso;
