import React from "react";

import {FaTrash} from "react-icons/fa";
import {IconBasic} from "../IconBasic";
import {globals_} from "../globals";
import IconTint from 'react-icon-tint'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Search} from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    props?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}




const IconTrash : React.FC<Props> = (props) => {

    console.log("=== globals_",globals_.system.mode_icons)


    var ret1

        ret1 =
            <div>

                <p>Font Awesome</p>
                <FaTrash/>


                {/*======== https://icons8.com/icons/ios*/}
                <p>IOS from PNG</p>
                <IconTint src={require("./search.png")} color="blue" {...{maxWidth: 50, maxHeight: 50}} />

                <p>MUI 2 form Google</p>

                <SearchIcon sx={{ fontSize: 45 }} />

                <p>MUI Material You form Google</p>
                <Search
                    // className={classes.root}
                    style={{textAlign:'center', width:'50px', height:'50px', color:"teal"}}
                />

            </div>

            //=== DOC
            //  https://www.npmjs.com/package/react-icon-tint
            //  https://www.youtube.com/watch?v=Ni49a8gZQxY


    // https://codesandbox.io/examples/package/ionicons


return(

        //=== !!! (!ret1)?<div></div>:ret1

        // <IonIcon></IonIcon>

        <IconBasic {...{...props, ...{icon: FaTrash}}}>
            {ret1}
        </IconBasic>




)}

export default IconTrash
