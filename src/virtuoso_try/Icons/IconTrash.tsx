import React from "react";

import {FaTrash} from "react-icons/fa";
import {IconBasic} from "../IconBasic";

type Props = {
    props?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}


const IconTrash : React.FC<Props> = (props) => {

return(

        <IconBasic {...{...props, ...{icon: FaTrash}}}>
            <FaTrash/>
        </IconBasic>


)}

export default IconTrash
