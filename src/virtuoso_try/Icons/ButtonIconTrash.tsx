import React from "react";

import IconTrash from "./IconTrash";
import styled from "styled-components";
import {ButtonIconSlyler} from "../ButtonIconSlyler";

type Props = {
    item:any;
    on_press:any;
    globals_:any;
    props?:any;
    children:React.ReactNode;
}


const ButtonIconTrash : React.FC<Props> = (props) => {

    // console.log("=== ButtonIconTrash props "+(JSON.stringify(props)))

    return(

    <ButtonIconSlyler
        onClick={(e:any) => {
            console.log("=== ButtonIconTrash 888  "+Date.now())
            // console.log("=== item  "+JSON.stringify(props.item))

            console.log("=== ButtonIconTrash_post_guid  "+props.item.post_guid + '   ' + JSON.stringify(props.item) )

            // props.on_press.icon_trash(e)
        }}
    >

        <IconTrash {...props}/>

    </ButtonIconSlyler>


)}

export default ButtonIconTrash
