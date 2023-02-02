

import ListBasic from "./ListBasic";
import React, {useEffect, useRef, useState} from "react";
import ListPosts from "./ListPosts";
import styled from "styled-components";
import { Device } from '@capacitor/device';
import {globals_} from "./globals";




const content_posts_data = Array.from({ length: 20 }, (_, k) => ({
    post_guid:      `line_:${k.toString()}`,
    post_title:     `item ${k}`,
    post_content:   `item ${k}`,
}))


// posts_data_read_more_function

const on_press_icon_trash = (params) => {
    console.log("=== on_press_icon_trash ",params)
}
const on_press_icon_up = (params) => {
    console.log("=== on_press_icon_up ",params)
}



const ReactVirtuso = () => {

    const Div1 = styled.div`
          text-align: center;
          background-color: greenyellow;
          //border: none; //globals_.icon_button.border       
    `;

    //=== SSSSSSS
    const list_ref1 = useRef(null);
    const [data_array_posts, set_data_array_posts] = useState(content_posts_data)
    const [thisDeviceInfo,set_thisDeviceInfo] = useState(0);

    useEffect(() => {



        const timer1 = setTimeout(()=>{
            console.log("=== set_input_value_timeouter")
            Device.getInfo().then((info) => {
                console.log("=== thisDeviceInfo");
                console.log(info);
                // console.log(info.operatingSystem);
                // globals_.system.os='and'
                // globals_.system.os='ios'
                globals_.system.mode_icons='ios'
                set_thisDeviceInfo(info)
                if ("windows" == info.operatingSystem && "web" == info.platform){

                }


            });
        },500)


        return () => {
            clearTimeout(timer1)
        };
    }, []);


    return (

        (!thisDeviceInfo)?'Loading System':
        <div>
            <ListPosts

                // mode_load_more //auto on_button endReached={loadMore}

                //
                // on_Add:(item_data)=>{
                // on_Add1St
                // on_AddLast
                // on_AddSelected

                // console.log("=== on_Add Posts ", item_data)},
                // !!! see WBS react-custom-scrollbars custom Scroll Bar GO !!!!!! === https://docs.google.com/document/d/1bgQNJJjpFPwEapxrC8rXZK2E6YYUaoUOgfj-iX_rTVU/edit#heading=h.e06myjfe1xin

                row_heigth = {180}
                // mode_load_more={'auto'}
                mode_load_more={'press_button'}
                mode_list_nav_panel={'auto'}
                // on_press_go_top
                globals_={globals_}
                on_press={{
                    icon_trash:on_press_icon_trash,
                    icon_up:on_press_icon_up
                }}

                main_list_ref={list_ref1}
                data_array={data_array_posts}
                set_data_array={set_data_array_posts}

                data_read_portion={10}
                data_fetch={(params)=>{
                    if(params) {
                        return fetch('https://dummyjson.com/users?'
                            + 'limit=' + params?.fetch_count
                            + '&skip=' + params?.fetch_skip
                            + '&select=firstName,lastName,age')
                    }
                }}

                data_on_reorder={(params)=>{
                    console.log("=== data_on_reorder",params)
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




                />
        </div>

    );
};

export default ReactVirtuso;
