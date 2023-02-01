import React from "react";

import IconTrash from "./IconTrash";
import styled from "styled-components";
import {ButtonIconSlyler} from "../ButtonIconSlyler";

type Props = {
    on_press:any;
    props?:any;
    children:React.ReactNode;
}


const ButtonIconTrash : React.FC<Props> = (props) => {

    console.log("=== ButtonIconTrash "+props)

    return(

    <ButtonIconSlyler
        onClick={(e:any) => {
            console.log("=== call 888  "+Date.now())
            props.on_press.icon_trash(e)
        }}
    >

        <IconTrash {...props}
                   onClick={(e:any) => {
                       console.log("=== call222 "+Date.now())
                       // props.on_press_icon_trash(e)
                   }}
        />

    </ButtonIconSlyler>


)}

export default ButtonIconTrash
