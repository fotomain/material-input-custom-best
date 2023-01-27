

import ListBasic from "./ListBasic";
import React, {useRef, useState} from "react";
import ListPosts from "./ListPosts";
import styled from "styled-components";

const content_posts_data = Array.from({ length: 20 }, (_, k) => ({
    post_guid:      `line_:${k.toString()}`,
    post_title:     `item ${k}`,
    post_content:   `item ${k}`,
}))


// posts_data_read_more_function



const ReactVirtuso = () => {

    const Div1 = styled.div`
          text-align: center;
          background-color: greenyellow;
          //border: none; //settings_icon_button_border
    `;

    const list_ref1 = useRef(null);
    const [data_array_posts, set_data_array_posts] = useState(content_posts_data)

    return (
        <div>
            <ListPosts
                main_list_ref={list_ref1}
                data_array={data_array_posts}
                set_data_array={set_data_array_posts}

                data_read_portion={10}
                data_fetch={(params)=>{
                    if(params) {
                        return fetch('https://dummyjson.com/users?limit='
                            + params?.fetch_count
                            + '&skip=' + params?.fetch_skip
                            + '&select=firstName,lastName,age')
                    }
                }}

                data_new_lines_from_fetch={(params)=>{
                    if(params) {
                        const res_arr=[]
                        const data_temp_arr = params.data_new.users
                        for (let i = 0; i <data_temp_arr.length ; i++) {
                            const el =data_temp_arr[i]
                            // const guid_=el.firstName+el.lastName+el.age
                            const text_=el.firstName+' '+el.lastName
                            const guid_=params.index_from+i
                            res_arr.push(
                                {
                                    // id: `id:${guid_.toString()}`,
                                    // post_guid: `id:${(guid_).toString()}`,
                                    post_guid: `line_:${(guid_).toString()}`,
                                    post_content: `${guid_} from fetch ${text_} `,
                                }
                            )
                        }
                        return res_arr
                    }

                }} //data_new_lines_from_fetch

                row_heigth = {180}
                card_render={(element)=>{
                    return (
                        <Div1 key={element.post_guid}>
                            {element.post_title}
                        </Div1>
                    )
                }}

                />
            </div>
    );
};

export default ReactVirtuso;
