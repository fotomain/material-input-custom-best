import React from "react";

import {FaArrowUp, FaPlus} from "react-icons/fa";
import {IconBasic} from "../IconBasic";

type Props = {
    props?:any;
    children:React.ReactNode;
}


function FaIconPlus() {
    return null;
}

const IconPlus : React.FC<Props> = (props) => {

return(

        <IconBasic {...props}>
            <FaPlus/>
        </IconBasic>


)}

export default IconPlus
