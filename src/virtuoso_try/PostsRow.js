
import React, {useEffect} from 'react';

import './ListRow.css';


//=== DOC COOL https://stackblitz.com/edit/react-dpfmdi?file=src%2Fstyle.css


function PostsRow  (props) {

    // console.log("=== === PostsRow ",props)

    const Render_RowCard_local = props.render_RowCard
    // console.log("=== Render_RowCard_local ",Render_RowCard_local)

    const { provided, item, isDragging, row_heigth } = props


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
        height: row_heigth+'px',
        padding: '4px' }

    const embedId="rokGy0huYEA"
    const style_post_binary={
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        position: 'absolute',
    }

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

    const c_row_main    =  {backgroundColor: 'gray',    padding: dv_0_row_padding_vert+'px', overflow:'auto',  border: '2px solid yellow'}

    return (
    <>
        {/*{props.row_render({...props, ...{item : {item}}})}*/}

        <div style={c_row_main}

             {...provided.draggableProps}
             {...provided.dragHandleProps}
             ref={provided.innerRef}
             style={{...style_local,...provided.draggableProps.style}}
             className={`item1 ${isDragging ? 'is-dragging' : ''}`}

        >

            <Render_RowCard_local
                {...{...props, item:item }}

            />


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


export default PostsRow
