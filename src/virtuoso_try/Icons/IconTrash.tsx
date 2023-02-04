import React from "react";

import {FaTrash} from "react-icons/fa";
import {IconBasic} from "../IconBasic";
import {globals_} from "../globals";
import IconTint from 'react-icon-tint'


type Props = {
    props?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}




const IconTrash : React.FC<Props> = (props) => {

    console.log("=== globals_",globals_.system.mode_icons)


    var ret1

        ret1 = ('ios'==globals_.system.mode_icons)?
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.654 10.346 48 12 48 L 38 48 C 39.654 48 41 46.654 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 19 14 C 19.552 14 20 14.448 20 15 L 20 40 C 20 40.553 19.552 41 19 41 C 18.448 41 18 40.553 18 40 L 18 15 C 18 14.448 18.448 14 19 14 z M 25 14 C 25.552 14 26 14.448 26 15 L 26 40 C 26 40.553 25.552 41 25 41 C 24.448 41 24 40.553 24 40 L 24 15 C 24 14.448 24.448 14 25 14 z M 31 14 C 31.553 14 32 14.448 32 15 L 32 40 C 32 40.553 31.553 41 31 41 C 30.447 41 30 40.553 30 40 L 30 15 C 30 14.448 30.447 14 31 14 z"/></svg>
            :ret1

        ret1 = ('and'==globals_.system.mode_icons)?
            <FaTrash/>
            :ret1

        //=== !!! ios ionic
        ret1 = ('ios'==globals_.system.mode_icons)?
            // <IconTint src="/bellIcon.png" color="#cecece" />

            // <img style={{color:'teal'}}  alt='im1' src={require("./i_up.png")} width="50" height="50" />
            <IconTint src={require("./i_up.png")} color="blue" {...{maxWidth: 50, maxHeight: 50}} />
            :ret1
            //=== DOC
            //  https://www.npmjs.com/package/react-icon-tint
            //  https://www.youtube.com/watch?v=Ni49a8gZQxY


    // IOS
    // https://developer.apple.com/fonts/
    // https://www.npmjs.com/package/react-native-san-francisco-icons
    // https://www.figma.com/community/file/886999666531731323
    // SF Pro Fonts.pkg
    // REACT USE ICONS APPLE SAN FRANCISCO

    // https://codesandbox.io/examples/package/ionicons


return(

        //=== !!! (!ret1)?<div></div>:ret1

        // <IonIcon></IonIcon>

        <IconBasic {...{...props, ...{icon: FaTrash}}}>
            {ret1}
        </IconBasic>




)}

export default IconTrash