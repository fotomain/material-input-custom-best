import React, {useRef, useState} from 'react';
import Draggable from "react-draggable";


function Card1  (props) {

    // const local_ref = useRef(null);
    props.data_refs.push(props.local_ref)
    console.log("=== props",props)
    const [drag_start_index, set_drag_start_index] = useState(-1);

    // const onDrag_event = (e, data) => {
    //     console.log('onDrag_event', e.type);
    //     console.log({e, data});
    // }
    // const onStart_event = (e, data) => {
    //     console.log('onStart_event', e.type);
    //     console.log({e, data});
    //
    //     console.log("=== e.target", e.target.name)
    //     // set_drag_start_index(e.target.id)
    //
    // }
    // const onStop_event = (e, data) => {
    //     console.log('onStop', e.type);
    //     console.log(e);
    //     console.log(data);
    //     console.log(data.node.firstChild.id);
    // }

    // TODO onTouchStart

    return(


            <div className="comp">

                <div
                    ref={props.local_ref}
                    name={'list_item_'+ props.index.toString}
                    style={{...props.style,
                        // style_conteiner_row
                        // border:'1px solid blue',

                    }}
                    className="post">

                    <div
                        // style_conteiner_card
                        style={{
                            border:'1px solid red',
                            paddingLeft:'10px',

                            marginTop: '5px',
                            borderRadius: '10px',

                            height:props.card_height,

                            display:'flex',
                            flexDirection:'row',
                            gap:'10px',


                        }} >
                        <h5 style={{flex:1}}>{`${props.data_list[props.index].name}-${props.data_list[props.index].id}`}</h5>
                        <p style={{flex:2}} >{props.data_list[props.index].body}</p>
                    </div>

                </div>

            </div>


    )

}

export default Card1
