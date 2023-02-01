import React from "react";
import styled, {css} from "styled-components";
import {FaTrash} from "react-icons/fa";
//=== DOC https://catchts.com/react-props


type StylerProps = {
    color?:any;
    small?:any;
    med?:any;
    large?:any;
}

type IconBasicType = {
    icon?:any,
    color?:any;
    small?:any;
    med?:any;
    large?:any;


    props?:any;
    title?:string;
    children?:React.ReactNode;
}

const IconStyler1 = styled.span<StylerProps>`
      color: ${(props) => props.color};
      & svg {
        ${(props) =>
    props.small &&
    css`
                    width: 14px !important;
                    height: 14px !important;
      `}
        ${(props) =>
    props.med &&
    css`
                    width: 20px !important;
                    height: 20px !important;
      `}
        ${(props) =>
    props.large &&
    css`
                    width: 28px !important;
                    height: 28px !important;
      `}
      }

    `;

const IconBasic : React.FC<IconBasicType> = (props) => {

    // console.log("=== === IconBasic props ",props)

return(
    <div title={props.title}>

        {/*...{*/}
        {/*color: 'teal',*/}
        {/*// small   :(props.small?true:false),*/}
        {/*med: true,*/}
        {/*// large   :(props.large?true:false),}*/}
       {/*    <FaTrash/>*/}
        <IconStyler1 {...{
            color: 'teal',
            small   :(props.small?true:false),
            med     :(props.med?true:false),
            large   :(props.large?true:false),
        }} >
            {props.children}
        </IconStyler1>

    </div>
)}

export {IconBasic}
