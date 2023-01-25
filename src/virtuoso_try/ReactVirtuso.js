

import ListBasic from "./ListBasic";
import {useRef} from "react";
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

    return (
        <div>
            <ListPosts
                main_list_ref={list_ref1}
                data_array={content_posts_data}
                data_read_more_function={content_posts_data_read_more_function}
                data_read_portion={10}
            />
        </div>
    );
};

export default ReactVirtuso;
