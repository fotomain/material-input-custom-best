import React from "react";

import IconTrash from "./IconTrash";
import styled from "styled-components";
import {ButtonIconSlyler} from "../ButtonIconSlyler";
import IconArrowUp from "./IconArrowUp";

type Props = {
    on_press:any;
    globals_:any;
    props?:any;
    children:React.ReactNode;
}


const ButtonIconArrowUp : React.FC<Props> = (props) => {

    // console.log("=== ButtonIconArrowUp "+props)

    return(

    <ButtonIconSlyler
        onClick={(e:any) => {
            console.log("=== call ButtonIconArrowUp 999  "+Date.now())
            props.on_press.icon_up(e)
        }}
    >

        <IconArrowUp {...props}/>

    </ButtonIconSlyler>


)}

export default ButtonIconArrowUp
