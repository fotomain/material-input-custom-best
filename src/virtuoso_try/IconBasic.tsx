import React from "react";
import styled, {css} from "styled-components";
//=== DOC https://catchts.com/react-props


type IconBasicType = {
    props?:any;
    title?:string;
    small?:boolean;
    med?:boolean;
    large?:boolean;
    children:React.ReactNode;
}

const IconStyler1 = styled.span<IconBasicType>`
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

return(
    <div title={props.title}>

        <IconStyler1 {...{...props,...{
                color:'teal',
                small   :(props.small),
                med     :(props.med),
                large   :(props.large),
            }
        }}>{props.children}</IconStyler1>;

    </div>
)}

export {IconBasic}
