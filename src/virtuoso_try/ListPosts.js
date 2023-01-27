

import React from "react";
import ListBasic from "./ListBasic";
import PostsRow from "./PostsRow";

// interface ContainerProps {
//   id?: string;
//   name?: string;
//   data_array: [];
//   card_render?: any;
// }


const PostRowCard = (props) => {
    return(
        <>
            <div>system_name = {props.system_name}</div>
            <div>{props.children}</div>
        </>)

}
const PostRow = (props) => {

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

    const dv_0_row_padding_vert = 10;
    const c_row_main    =  {backgroundColor: 'gray',    padding: dv_0_row_padding_vert+'px', overflow:'auto',  border: '2px solid yellow'}

    return(

        <div style={c_row_main}

             // ref={provided.innerRef}
             style={{...style_local,...provided.draggableProps.style}}
             className={`item1 ${isDragging ? 'is-dragging' : ''}`}

        >
            <div>system_name = {props.system_name}</div>
            <div>{props.render_card(props)}</div>

        </div>)
}

const ListPosts = (props) => {

    console.log("=== ListPosts data_array ",props.data_array)

    const row_render = (element) => {
        return (
            <div>{element.item}</div>
        )
    }


    return (
        <div>

            {/*{style: {backgroundColor: 'orange'}*/}
            <ListBasic {...{...props,
                // {...{...params}, ...{render_card:PostRowCard} }
                LRListRow:PostsRow,
                 render_row: (params)=>{PostRow({...{...params}, ...{render_card:PostRowCard} })},
                // render_row: {PostRow},
                // render_card: (params)=>{PostRow(params)},
                on_Add:(item_data)=>{
                    console.log("=== on_Add Posts ", item_data)},
                style:{
                    backgroundColor: 'blue',
                    width:'300px', //settings_width_list_posts
                    // width:'100%',    // work as dynamic
                    height:'150px',
                    // height:'100%',   // work as dynamic

                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',

                },

            }}
            >
                <PostRow        system_name={'PostRow'}> !!!Row</PostRow>
                <PostRowCard    system_name={'PostRowCard'}> !!!Card</PostRowCard>
            </ListBasic>

        </div>
    );
};

export default ListPosts;


