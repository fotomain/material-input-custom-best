
import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';

import './ListRow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaUserTie, FaTrash, FaArrowUp} from 'react-icons/fa'

//=== DOC COOL https://stackblitz.com/edit/react-dpfmdi?file=src%2Fstyle.css
// import bkg_app from "./images_main/bkg3.jpg";

import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";


function LRListRow  ({ provided, item, isDragging }) {

    console.log(item.id)
    const a = parseFloat(item.id.substring(3,5))/2
    const b = parseInt(parseInt(item.id.substring(3,5))/2)
    console.log(item.id)
    console.log(a)
    console.log(b)


    const settings_row_list_item_heigth = 180;

    const style_local={
        // palette_card_background
        marginBottom: '20px' ,
        backgroundColor: 'transparent' ,
        // opacity: '0.4',
        // backgroundColor: `rgb(${'115, 138, 138, 0.1'})` ,
        // backgroundColor: `rgb(${box.color})` ,
        // backgroundColor: 'gray',
        // backgroundColor: 'white',

        //=== DOC https://cssgenerator.org/box-shadow-css-generator.html
        boxShadow: '5px 5px 15px 0px rgb(135,115,115)',
        border: 'none',
        // border: '1px solid magenta',
        // border: '1.5px solid gray',
        // border: '1.5px solid white',
        borderRadius: '15px',
        // height: (a===b)?'100px':'50px',
        height: settings_row_list_item_heigth+'px',
        padding: '4px' }

    const embedId="rokGy0huYEA"
    const style_post_binary={
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        position: 'absolute',
    }

    // const dv_0_card_heigth = dv_0_row_heigth - 10 - dv_0_row_padding_vert*2;

    // const dv_0_row_heigth = 100;

    // const card_mode             =  'mini'
    const card_mode             =  'normal'
    // const card_mode             =  'large'

    const card_clasName = (p) =>{
        switch (p) {
            case 'mini': { return 'h150'; break}
            case 'normal': { return 'h200'; break}
            case 'large': { return 'h300'; break}
        }
    }


    const dv_0_row_padding_vert = 10;
    const dv_0_card_padding_vert = 5;

    //=== DOC https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    const flex_props_row = {position:'relative', display:'flex', flexDirection:'row'}
    const flex_props_col = {position:'relative', display:'flex', flexDirection:'column'}

    const c_row_main    =  {backgroundColor: 'gray',    padding: dv_0_row_padding_vert+'px', overflow:'auto',  border: '2px solid yellow'}
    const dv_2_col_style    =  {color:'yellow',backgroundColor: 'green',   ...flex_props_col,...{flex:20},}


    const Button1 = styled.button`
          text-align: center;
          background-color: transparent;
          //border: none; //settings_icon_button_border
    `;

    const IconStyler = styled.span`
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

    const Icon1 = ({ children, ...props }) => {

        return <IconStyler {...{...props,...{
                color:'teal',
                small   :(props.small)?'1':null,
                med     :(props.med)?'1':null,
                large   :(props.large)?'1':null,
        }
        }}>{children}</IconStyler>;
        // return <IconStyler {...props}>{children}</IconStyler>;

    };


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


    return (
    <>

        <div style={c_row_main}

             {...provided.draggableProps}
             {...provided.dragHandleProps}
             ref={provided.innerRef}
             style={{...style_local,...provided.draggableProps.style}}
             className={`item1 ${isDragging ? 'is-dragging' : ''}`}

        >

            {/*<div style={c_card}*/}
            {/*     className={ card_clasName(card_mode) }*/}
            {/*>*/}

            <C_card>
                <C_col1>

                    <C_row_data>

                        <C_card_title  >Tilte {item.text}</C_card_title>
                        <C_card_content  >
                            <div> Content1 </div> <div> {item.text} </div><div> Content1 </div><div> Content1 </div> <div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div><div> Content1 </div>
                        </C_card_content>

                    </C_row_data>



                    <C_row_hor_buttons id={'C_row_hor_buttons'} >


                        <Button1
                            onClick={(e)=>{
                                console.log(Date.now())}}
                        >

                            <Icon1 id={'icon111'} med
                            >
                                <FaTrash />
                            </Icon1>
                        </Button1>
                        <Button1
                            onClick={(e)=>{
                                console.log(Date.now())}}
                        >

                            <Icon1 id={'icon111'} med
                            >
                                <FaArrowUp />
                            </Icon1>
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
            {/*</div>*/}
        </div>
        {/*  gray  */}
        {/*    <div name={'dv_0_card'}*/}
        {/*       // white*/}
        {/*         className={ card_clasName(card_mode) }*/}
        {/*         style={c_card}*/}
        {/*         {...provided.draggableProps}*/}
        {/*         {...provided.dragHandleProps}*/}
        {/*         ref={provided.innerRef}*/}
        {/*    >*/}
        {/*        <div name={'dv_1_col'}  style={c_col1}>*/}

        {/*style={{background:'red', heigth:'100px'}}*/}
        {/*style={{...style_local,...provided.draggableProps.style}}*/}

        {/*                <div name={'dv_1_1_col_data'}  style={c_row_data}>*/}

        {/*                /!*    <p style={content_style} >Content {item.text}</p>*!/*/}
        {/*                       <p style={tilte_style} >Tilte</p>*/}


        {/*                </div>*/}


        {/*        </div>*/}
        {/*        <div name={'dv_2_col'}  style={dv_2_col_style}>*/}
        {/*            dv_2_col*/}
        {/*        </div>*/}
        {/*    </div>*/}








        {/*<div name={'dv_0_card'}>*/}
        {/*    <div name={'dv_0_card'}*/}
        {/*             {...provided.draggableProps}*/}
        {/*             {...provided.dragHandleProps}*/}
        {/*             ref={provided.innerRef}*/}
        {/*             style={{...style_local,...provided.draggableProps.style}}*/}
        {/*             className={`item1 ${isDragging ? 'is-dragging' : ''}`}*/}
        {/*        >*/}
        {/*            {item.text}*/}
        {/*        <div >*/}
        {/*                <iframe*/}

        {/*                    // style={style_post_binary}*/}
        {/*                    width="73px"*/}
        {/*                    height="40px"*/}
        {/*                    src={`https://www.youtube.com/embed/${embedId}`}*/}
        {/*                    frameBorder="0"*/}
        {/*                    // mute='1'*/}
        {/*                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*                    allowFullScreen*/}
        {/*                    title="Embedded youtube"*/}
        {/*                />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </>
    )

}


export default LRListRow
