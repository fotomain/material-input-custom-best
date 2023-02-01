import React from "react";

import {FaTrash} from "react-icons/fa";
import {IconBasic} from "./IconBasic";

type Props = {
    props?:any;
    children:React.ReactNode;
}


const IconTrash : React.FC<Props> = (props) => {

return(

        <IconBasic {...props}>
            <FaTrash/>
        </IconBasic>


)}

export {IconTrash}
