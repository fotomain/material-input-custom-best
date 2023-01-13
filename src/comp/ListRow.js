
import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';

import './ListRow.css';

//=== DOC COOL https://stackblitz.com/edit/react-dpfmdi?file=src%2Fstyle.css
// import bkg_app from "./images_main/bkg3.jpg";



function LRListRow  ({ provided, item, isDragging }) {

    console.log(item.id)
    const a = parseFloat(item.id.substring(3,5))/2
    const b = parseInt(parseInt(item.id.substring(3,5))/2)
    console.log(item.id)
    console.log(a)
    console.log(b)


    const style_local={
        // palette_card_background
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
        height: '150px',
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

    const dv_0_row_padding_vert = 5;
    const dv_0_card_padding_vert = 5;

    //=== DOC https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    const flex_props_row = {position:'relative', display:'flex', flexDirection:'row'}
    const flex_props_col = {position:'relative', display:'flex', flexDirection:'column'}

    const dv_0_row_style    =  {backgroundColor: 'gray',    padding: dv_0_row_padding_vert+'px', overflow:'auto',  border: '2px solid yellow'}
    const dv_0_card_style   =  {backgroundColor: 'white',   padding: dv_0_card_padding_vert+'px',...flex_props_row,...{gap:'2px'}}
    const dv_1_col_style    =  {backgroundColor: 'cyan',    ...flex_props_col,...{flex:80},}
    const dv_2_col_style    =  {backgroundColor: 'green',   ...flex_props_col,...{flex:20},}
    const dv_1_1_col_data_style =  {...flex_props_col,backgroundColor: 'red'}
    const tilte_style           =  {backgroundColor: 'lightblue'}
    const content_style         =  {backgroundColor: 'orange'}

     // const card_mode             =  'mini'
      const card_mode             =  'normal'
      // const card_mode             =  'large'

    const card_clasName = (p) =>{
        switch (p) {
            case 'mini': { return 'h100'; break}
            case 'normal': { return 'h150'; break}
            case 'large': { return 'h200'; break}
        }
    }

    return (


        <div name={'dv_0_row'}  style={dv_0_row_style}>
                {/*<p>1</p>*/}
            <div name={'dv_0_card'}  style={dv_0_card_style}>
                <div name={'dv_1_col'}  style={dv_1_col_style}>
                    <div className={card_clasName(card_mode)} style={{background:'red', heigth:'100px'}}></div>

                    {/*<div name={'dv_1_1_col_data'}  style={dv_1_1_col_data_style}>*/}

                    {/*    <p style={tilte_style} >Tilte</p>*/}
                    {/*    <p style={content_style} >Content</p>*/}

                    {/*</div>*/}
                </div>
                <div name={'dv_2_col'}  style={dv_2_col_style}>
                    dv_2_col
                </div>
            </div>
        </div>
      //
      //
      //       <div name={'dv_0_card'}
      //           <div name={'dv_0_card'}
      //                {...provided.draggableProps}
      //                {...provided.dragHandleProps}
      //                ref={provided.innerRef}
      //                style={{...style_local,...provided.draggableProps.style}}
      //                className={`item1 ${isDragging ? 'is-dragging' : ''}`}
      //           >
      //               {item.text}
      //               <div >
      //                   <iframe
      //
      //                       // style={style_post_binary}
      //                       width="73px"
      //                       height="40px"
      //                       src={`https://www.youtube.com/embed/${embedId}`}
      //                       frameBorder="0"
      //                       // mute='1'
      //                       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                       allowFullScreen
      //                       title="Embedded youtube"
      //                   />
      //               </div>
      //           </div>
      //
      //           {/*<input type="text" name="sss" id="fff" value={size} onChange={(e)=>{*/}
      //           {/*    console.log(e.target.value)*/}
      //           {/*    setSize(parseInt(e.target.value))*/}
      //           {/*}}/>*/}
      //
      //       </div>
      //   </div>
      // </div>

    )

}


export default LRListRow
