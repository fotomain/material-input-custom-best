import React from "react";

import IconTrash from "./IconTrash";
import styled from "styled-components";
import {ButtonIconSlyler} from "../ButtonIconSlyler";
import IconArrowUp from "./IconArrowUp";

type Props = {
    on_press:any;
    props?:any;
    children:React.ReactNode;
}


const ButtonIconArrowUp : React.FC<Props> = (props) => {

    console.log("=== ButtonIconTrash "+props)

    return(

    <ButtonIconSlyler
        onClick={(e:any) => {
            console.log("=== call ButtonIconArrowUp  "+Date.now())
            props.on_press.icon_trash(e)
        }}
    >

        <IconArrowUp {...props}
                   onClick={(e:any) => {
                       console.log("=== call222 "+Date.now())
                       // props.on_press_icon_trash(e)
                   }}
        />

    </ButtonIconSlyler>


)}

export default ButtonIconArrowUp
