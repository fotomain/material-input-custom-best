

import ListBasic from "./ListBasic";
import {useRef} from "react";
import ListPosts from "./ListPosts";

const posts_initial = Array.from({ length: 20 }, (_, k) => ({
    id: `id:${k.toString()}`,
    text: `item ${k}`,
}))

const ReactVirtuso = () => {

    const list_ref = useRef(null);

    return (
        <div>
            <ListPosts
                main_list_ref={list_ref}
                data_array={posts_initial}
            />
        </div>
    );
};

export default ReactVirtuso;
