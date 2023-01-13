
import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';

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
        // border: '1px solid magenta',
        // border: '1.5px solid gray',
        // border: '1.5px solid white',
        borderRadius: '15px',
        // height: (a===b)?'100px':'50px',
        height: '100px',
        padding: '4px' }

    const embedId="rokGy0huYEA"
    const style_post_binary={
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        position: 'absolute',
    }

    return (
        <div name={'dv_post_card_container'}  style={{
            // border: '1px solid blue' ,
            padding: '4px'
        }}>
            <div>

                <div name={'dv_post_card'}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                     style={{...style_local,...provided.draggableProps.style}}
                     className={`item1 ${isDragging ? 'is-dragging' : ''}`}
                >
                    {item.text}
                    <div >
                        <iframe

                            // style={style_post_binary}
                            width="73px"
                            height="40px"
                            src={`https://www.youtube.com/embed/${embedId}`}
                            frameBorder="0"
                            // mute='1'
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>

                {/*<input type="text" name="sss" id="fff" value={size} onChange={(e)=>{*/}
                {/*    console.log(e.target.value)*/}
                {/*    setSize(parseInt(e.target.value))*/}
                {/*}}/>*/}

            </div>
        </div>

    )

}


export default LRListRow
