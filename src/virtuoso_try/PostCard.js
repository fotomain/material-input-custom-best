
// import './Comp3.css';

import {FaArrowUp, FaPlus, FaTrash} from "react-icons/fa";
import React from "react";
import styled, {css} from "styled-components";

import IconTrash from "./Icons/IconTrash";
import IconArrowUp from "./Icons/IconArrowUp";
import IconPlus from "./Icons/IconPlus";
import ButtonIconTrash from "./Icons/ButtonIconTrash";
import ButtonIconArrowUp from "./Icons/ButtonIconArrowUp";

//=== DOC https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
const flex_props_row = {position:'relative', display:'flex', flexDirection:'row'}
const flex_props_col = {position:'relative', display:'flex', flexDirection:'column'}


const C_card = styled.div`

      ${flex_props_row};

        background: peachpuff;
        padding: 5px;

        //height: 200px;

    `;

// {backgroundColor: 'cyan',justifyContent:'start',alignItems:'start',    ...flex_props_col,...{flex:80},}

const C_col1 = styled.div`

        flex:80;

        ${flex_props_col};

        background: cyan;
        padding: 4px;

        justify-content: start;

    `;

const C_row_data = styled.div`

        ${flex_props_col};
        flex:80;

        background: lightcoral;
        padding: 4px;

        justify-content: start;

    `;

const C_card_title = styled.div`
        background: lightblue;
        color:red;
        padding-left: 5px;
        padding-right: 5px;
    `;

const C_card_content = styled.div`
        background: lightblue;
        color:red;
        margin-top: 4px;
        padding-left: 5px;
        padding-right: 5px;

        height: 90px;
        width: 300px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        //overflow: hidden;
        overflow: scroll;

    `;


const C_row_hor_buttons = styled.div`

          ${flex_props_row};
          //flex:20;

          background: #A5ECD2;
          padding: 1px;

          justify-content: start;
          align-items: center;

          height: 30px;

        `;


//================
//================ BUTTONS
//================

const Button1 = styled.button`
          text-align: center;
          background-color: transparent;
          //border: none; //globals_.icon_button.border
    `;



//================
//================ COL2
//================

const dv_2_col_style    =  {color:'yellow',backgroundColor: 'green',   ...flex_props_col,...{flex:20},}


const PostCard = (props) => {

    const {
        item,
    }=props

    console.log("=== PostCard props ",props)

    return (
        <div>
            <p>PostCard</p>
            {/*{props.card_render(item)}*/}

            {(false)?'':<C_card>
                <C_col1>

                    <C_row_data>


                        <C_card_title>Tilte {item.post_content}</C_card_title>

                        <C_card_content>
                            <div> Content1</div>
                            <div> {item.post_content} </div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                            <div> Content1</div>
                        </C_card_content>

                    </C_row_data>


                    <C_row_hor_buttons id={'C_row_hor_buttons'}>

                        {/*{...{...props, ...{id: 'icon111', med: true}}}*/}
                        {/*{...{...props, ...{xx: 1}}}*/}
                        {/*{...props}*/}
                        {/*id={'icon111'} med*/}

                        <ButtonIconTrash
                            {...{...props, ...{id: 'icon111', med: true}}}
                        />

                        <ButtonIconArrowUp
                            {...{...props, ...{id: 'icon111', med: true}}}
                        />

                        {/*<Button1*/}
                        {/*    onClick={(e) => {*/}
                        {/*        console.log("=== call111 "+Date.now())*/}
                        {/*        props.on_press_icon_trash(e)*/}
                        {/*    }}*/}
                        {/*>*/}

                        {/*    <IconTrash id={'icon111'} med/>*/}

                        {/*</Button1>*/}

                        {/*<Button1*/}
                        {/*    onClick={(e) => {*/}
                        {/*        console.log(Date.now())*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <IconArrowUp id={'icon111'} med/>*/}
                        {/*</Button1>*/}

                        <Button1
                            onClick={(e) => {
                                console.log(Date.now())
                            }}
                        >
                            <IconPlus id={'icon111'} med/>
                            {/*<Icon1 id={'icon111'} med><FaPlus/></Icon1>*/}
                        </Button1>

                    </C_row_hor_buttons>

                    {/*<div className={'c_row_data'}*/}
                    {/*>*/}
                    {/*    <div className={'c_card_title'}>*/}
                    {/*               <p  >Tilte</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={'c_card_content'}>*/}
                    {/*               <p  >Content 1 - </p>*/}
                    {/*               <p  >Content 2 - </p>*/}

                    {/*        </div>*/}
                    {/*</div>*/}

                    {/*/!*??? style={{...dv_1_1_row_horiz_buttons_style,...{aligtSelf:'end'}}}>*!/*/}
                    {/* <div name={'horiz_buttons_row'}*/}
                    {/*      className={'c_row_hor_buttons'}*/}
                    {/* >*/}
                    {/*        Buttons*/}
                    {/*</div>*/}

                </C_col1>


                <div name={'vert_buttons_col'}
                     style={dv_2_col_style}
                >
                    BUTTON 1
                    BUTTON 2
                </div>

            </C_card>
            }
        </div>
    );
};

export default PostCard;
