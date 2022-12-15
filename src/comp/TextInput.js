


import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";

import './TextInput.css'

const setProperty = (a,b) => {
    document.documentElement.style.setProperty(a,b)
}

function TextInput  (props) {
    // {color_main, color_text, text_label, text_helper }
    console.log("=== props")
    console.log(props)

    const ref_input = useRef(null);
    const ref_label = useRef(null);
    const ref_helper = useRef(null);


    // const [id_local, set_id_local] = useState((parseInt(Math.random()*100000000)).toString());
    const id_local = ((parseInt(Math.random()*100000000)).toString());

    // const [uniq_input1_id, set_uniq_input1_id] = useState((props.id)?props.id:"uniq_input1_" + id_local)
    const uniq_container_mui_id = ((props.id)?props.id:"uniq_container_mui_" + id_local)
    const uniq_input1_id = ((props.id)?props.id:"uniq_input1_" + id_local)


    const [input_variant, set_input_variant] = useState(
        (!props.input_variant)?'standard':props.input_variant
    )

    const [label_font_size, set_label_font_size] = useState('1rem')
    const [label_font_size_focused, set_label_font_size_focused] = useState('.8rem')
    const [label_text_color, set_label_text_color] = useState(
    (props.label_text_color)?props.label_text_color:'gray '
    )
    const [label_text_color_focused, set_label_text_color_focused] = useState(
    (props.label_text_color_focused)?props.label_text_color_focused:'teal '
    )

    const [icon_left_visible, set_icon_left_visible] = useState(false)
    const [icon_left_hovered, set_icon_left_hovered] = useState(false)

    // const [uniq_input1_settings_class_id, set_uniq_input1_settings_class_id] = useState('input_'+(props.id)?props.id:"_settings_class_" + id_local)

    const t1 = (props.id) ? props.id : "_settings_class_" + id_local
    const uniq_input1_settings_class_id = "input_"+t1
    const uniq_container_mui_filled = "container_mui_filled_"+t1
    const input1_filed_padding = "filled_"+t1



    const uniq_label1_id = "uniq_label1_" + id_local


    const uniq_helper1_id = "uniq_helper1_" + id_local

    // console.log("=== id_local ",id_local)
    // console.log("=== ref ",ref_label,ref_input)

    // const [first_load, set_first_load] = useState(true)
    const [input_refresh_focused, set_input_refresh_focused] = useState(true)
    const [input_props, set_input_props] = useState(props)
        // Object.entries(props).map(([key, val])=>{
        //     }))

    const [css_label_focused_right, set_css_label_focused_right] = useState({})

    const [input_focused, set_input_focused] = useState(false)
    const [input_is_full, set_input_is_full] = useState(props.value)
    const [input_value, set_input_value] = useState(props.value)

    const [label_text, set_label_text] = useState(props.label_text)
    const [label_text_focused, set_label_text_focused] = useState(
        (props.label_text_focused)?props.label_text_focused:props.label_text
    )
    const [label_focused_position_right, set_label_focused_position_right] = useState(
        props.label_focused_position && "right"==props.label_focused_position
    )


    const [color_main_local_exist, set_color_main_local_exist] = useState((props.color_main)?true:false);
    const [color_main_local, set_color_main_local] = useState((props.color_main)?props.color_main:'teal');
    const [color_main_local_focused, set_color_main_local_focused] = useState((props.color_main_focused)?props.color_main_focused:'teal');

    const helper_text_style = (props.helper_text_style)?props.helper_text_style:{}

    const css_padding_all = '10px';


    var css_container =
        {
            zIndex: 1,

            'display': 'flex',
            'flexDirection': 'row',
            /*padding: 0;*/
            /*margin: 0;*/
            'alignItems': 'center',
            'justifyContent':'left',

            'backgroundColor': 'transparent',

            'borderTop': '1px solid',
            'borderLeft': '1px solid',
            'borderRight': '1px solid',
            'borderBottom': '1px solid',
            'borderColor': color_main_local,
            // 'borderColor': 'red',
            'borderRadius': '5px',

            'color': 'black',

            'fontSize': '1em',

            'width': '100%',
            'height': '50px',

            'paddingTop': '1em',
            'paddingBottom': '1em',
            'paddingLeft':  (  (props.icon_left_component && icon_left_visible)
                            || (!input_is_full && !input_focused) )
                                ?'1em'
                                :'',
            // 'paddingLeft': '1em',
            'paddingRight': '1em',
            // firstChild: {
            //     'width': '50%'
            // },



        }

    var css_container_focused ={
        ...css_container,
        'outline': 'none',
        'boxShadow': '0 0 0 2px '+color_main_local_focused,
        // 'boxShadow': '0 0 0 2px '+'red',

    }

    var css_input ={
        // zIndex: 10,
        'border': 'none',
        'outline': 'none',
        'paddingLeft': '1em',
        'fontSize': '1em',
        'fontFamily': '"Roboto", sans-serif',

    }
    var css_input_focused ={
        ...css_input,
    }

    var css_label =
        {
            'outlined':'none',
            'border':'none',
            'color': label_text_color,
            'fontSize': label_font_size,
            // 'marginTop': '-2.5rem',
            // 'marginLeft': '2rem',
            // 'paddingRight': '4px',
            'position': 'absolute',
            'transition': 'all 0.1s linear',

        }

    var css_label_focused =
        {
            ...css_label,
            'color': label_text_color_focused,
            'fontSize': label_font_size_focused,
            'marginTop': '-10%',
            // 'marginTop': '-3.3rem',
            'backgroundColor': 'white',

            // 'marginLeft': '10px',
            'marginLeft':  (  (props.icon_left_component && icon_left_visible)
                || (!input_is_full && !input_focused) )
                ?'-5px'
                :'10px',

        }

    const css_icon_left =
        {
            // 'left':'10em',
            // 'top': '0.9rem',
            // 'paddingTop': '20px',
            // 'marginLeft': '30px',
            // 'paddingLeft': '10px',
        }


    if(
        "filled"==input_variant
        ||
        "standard"==input_variant
    ) {

        var css_container1={ }
        css_container1.backgroundColor='rgba(0, 0, 0, 0.06)'
        css_container1.transition='background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        css_container1.borderTopLeftRadius='4px'
        css_container1.borderTopRightRadius='4px'
        css_container1.borderBottomLeftRadius='4px'
        css_container1.borderBottomRightRadius='4px'
        css_container1.borderTop='none'
        css_container1.borderLeft='none'
        css_container1.borderRight='none'
        css_container1.borderBottom='2px solid'
        css_container1.borderColor=color_main_local



        css_container = {
            ...css_container,
            ...css_container1
        }

        if(input_is_full){
            css_container = {
                ...css_container,
                paddingTop: '25px',
                paddingBottom: '8px',
            }
        }

        css_container_focused = {
            ...css_container_focused,
            ...css_container1,
            'outline': 'none',
            boxShadow: '0 4px 2px -2px '+color_main_local,
            paddingTop: '25px',
            paddingBottom: '8px',
        }

        css_input = {
            ...css_input,
            backgroundColor :'rgba(0, 0, 0, 0 )',
        }

        css_input_focused = {
            ...css_input_focused,
            backgroundColor :'rgba(0, 0, 0, 0 )',
        }

        css_label_focused = {
            ...css_label_focused,
            backgroundColor :'transparent',
        }

        if(
            "standard"==input_variant
        ) {
            css_container.backgroundColor='transparent'
            css_container_focused.backgroundColor='transparent'
            if(input_is_full) {
                css_input.paddingLeft = '1px'
            }
            css_input_focused.paddingLeft='1px'
        }
        console.log("=== css_container",css_container)
        console.log("=== css_container_focused",css_container_focused)

    }


    useEffect(() => {


        if(
            // input_value && first_load && "right"==props.label_focused_position
            // ||
            input_refresh_focused
            ||
            input_focused && "right"==props.label_focused_position && input_refresh_focused
        ){

            //=== LABEL RIGHT
            console.log("//=== LABEL RIGHT")
            var t_css_label_focused_right ={...css_label_focused}
            var uniq_input1_div = document.getElementById(uniq_container_mui_id);
            console.log("=== uniq_input1_div",uniq_input1_div)


            const input_width = uniq_input1_div.clientWidth
            var test = document.getElementById("service_calc_text");
            test.innerText = label_text_focused;
            test.style.fontSize = label_font_size_focused; //!!!!!!!!!!!!
            var label_height = (test.clientHeight + 1) + "px";
            var label_width = (test.clientWidth + 1) + "px"
            console.log("=== label_height ",label_height)
            console.log("=== label_width  ",label_width)

            // set_label_width(width)

            t_css_label_focused_right =
                {
                    ...css_label_focused,
                    'color': label_text_color_focused,
                    'fontSize': label_font_size_focused,
                    // 'marginTop': '-4rem',
                    'backgroundColor': 'white',
                    'paddingLeft': '4px',

                    'marginLeft': 'calc( '+input_width+'px - '+((parseInt(label_width.replace('px',''))>100)?'25px':'30px')+' - ' + label_width + ')',


                }
            console.log("=== t_css_label_focused_right",t_css_label_focused_right)
                set_css_label_focused_right(t_css_label_focused_right)
                set_input_refresh_focused(false)
        }

        // set_first_load(false)

        return () => {
            // effect
        };
    });





    return(

        <div>{/*input + helper*/}
            <div

                id={uniq_container_mui_id}
                // className={"css_container_mui"}
                style={(input_focused)?css_container_focused:css_container}
                onClick={(e)=>{
                    console.log("=== label onClick ")
                    ref_input.current.focus()
                }}
            >

                {(props.icon_left_component && !icon_left_visible)?'':
                    <div id={'css_icon_left111'} style={css_icon_left}
                         onClick={(e)=>{

                             console.log('555555555'+Date.now())
                             set_input_value('')
                             set_input_is_full(false)
                         }}
                         onMouseEnter={(e)=>{
                             // alert('onMouseEnter!!!')
                             set_icon_left_hovered(true)
                         }}
                         onMouseLeave={(e)=>{
                             // alert('onMouseLeave!!!')
                             set_icon_left_hovered(false)
                         }}

                         style={{
                             color: (props.color_icon_left)?props.color_icon_left:color_main_local
                         }}
                    >
                        {props.icon_left_component}
                    </div>
                }


                        <input {...input_props}

                               style={(input_focused)?css_input_focused:css_input}

                               ref ={ref_input}
                               value={input_value}
                               id={uniq_input1_id}
                               // placeholder={input_placeholder}

                               onFocus={(e)=>{
                                   console.log("=== input onFocus ")
                                   set_input_focused(true)
                                   set_icon_left_visible(true)
                               }}
                               onBlur={(e)=>{
                                   set_input_focused(false)
                                   if (!input_value){
                                       set_icon_left_visible(false)
                                   }

                               }}
                               onChange={(e)=>{

                                   set_input_value(e.target.value)

                                   if(e.target.value) {
                                       set_input_is_full(true)
                                   }else {
                                       set_input_is_full(false)
                                   }
                               }}


                        >
                        </input>


                <div   style={
                    (
                        (input_focused || input_is_full)
                        ||
                        (!input_is_full && props.placeholder)
                    )?
                        (label_focused_position_right)?
                            css_label_focused_right
                            :
                            css_label_focused
                        :
                        css_label
                }>
                    {/*{(!input_is_full || props.placeholder)?'':*/}
                            <label

                                ref={ref_label}

                                id={uniq_label1_id}

                                // className={(input_is_full || props.placeholder)?'show':''}

                                htmlFor="input_id1"
                                   onClick={(e)=>{
                                       console.log("=== label onClick ")
                                       ref_input.current.focus()
                                   }}
                            >
                                <span

                                >
                                    {((input_focused || input_is_full) && props.label_text_focused)?props.label_text_focused:label_text}
                                    {(!props.is_required)?'':<a style={{color: (input_is_full)?color_main_local:'red'}}> *</a>}
                                    {/*{input_is_full,input_focused}*/}
                                </span>

                            </label>
                    {/*}*/}
                </div>


            </div>{/*uniq_container_mui_id*/}
            {!props.helper_text?'':
                <div className="helper-text"
                     ref={ref_helper}
                     id={uniq_helper1_id}
                     style={helper_text_style}
                >
                    {props.helper_text}
                </div>
            }

            {/*style={{ 'position': 'absolute', 'float': 'left', 'whiteSpace': 'nowrap', 'visibility': 'hidden', 'font': f }}*/}
            {/*'visibility': 'hidden'*/}
            <div id={'service_calc_text'} style={{ 'position': 'absolute', 'float': 'left', 'whiteSpace': 'nowrap', 'visibility': 'hidden' }}></div>


        </div>
    )

}

export default TextInput
