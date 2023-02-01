
import React from "react";
import styled from "styled-components";

type StylerProps = {
    props?:any;
    children?:React.ReactNode;
}


const ButtonIconSlyler = styled.button<StylerProps>`
          text-align: center;
          background-color: transparent;
          //border: none; //globals_.icon_button.border
    `;

export {ButtonIconSlyler}
