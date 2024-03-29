import React from "react";

import {FaArrowUp} from "react-icons/fa";
import {IconBasic} from "../IconBasic";

type Props = {
    props?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}


const IconArrowUp : React.FC<Props> = (props) => {

return(

        //globals.mode_icon_system_type = 'fa, mui, ios, android'
        <IconBasic {...props}>
            <FaArrowUp/>
        </IconBasic>


)}

export default IconArrowUp
