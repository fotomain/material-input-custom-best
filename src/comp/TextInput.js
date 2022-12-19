


import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";

import './TextInput.css'

const setProperty = (a,b) => {
    document.documentElement.style.setProperty(a,b)
}

function TextInput  (props) {

    // console.log("=== props")
    // console.log(props)

    const ref_input = useRef(null);
    const ref_label = useRef(null);
    const ref_helper = useRef(null);

    const id_local = ((parseInt(Math.random()*100000000)).toString());

    const uniq_container_mui_id = ((props.id)?props.id:"uniq_container_mui_" + id_local)
    const uniq_input1_id = ((props.id)?props.id:"uniq_input1_" + id_local)

    const [input_variant, set_input_variant] = useState(
        (!props.input_variant)?'standard':props.input_variant
    )

    const [label_font_size, set_label_font_size] = useState(
        (props.label_font_size)?props.label_font_size:'1rem'
    )
    const [label_font_size_focused, set_label_font_size_focused] = useState('.8rem')
    const [label_text_color, set_label_text_color] = useState(
    (props.label_text_color)?props.label_text_color:'gray '
    )
    const [label_text_color_focused, set_label_text_color_focused] = useState(
    (props.label_text_color_focused)?props.label_text_color_focused:'teal '
    )

    const [icon_left_visible, set_icon_left_visible] = useState(
        props.icon_left_component && props.value
    )

    const [icon_right_pressed, set_icon_right_pressed] = useState(false)

    const [icon_right_visible, set_icon_right_visible] = useState(
        props.icon_right_component && props.value
    )

    const [icon_left_component, set_icon_left_component] = useState(
        props.icon_left_component
    )

    const [icon_hovered, set_icon_hovered] = useState(false)

    const uniq_label1_id = "uniq_label1_" + id_local

    const uniq_helper1_id = "uniq_helper1_" + id_local

    // console.log("=== id_local ",id_local)
    // console.log("=== ref ",ref_label,ref_input)

    const [input_refresh_focused, set_input_refresh_focused] = useState(true)
    const [input_props, set_input_props] = useState(props)

    const [css_label_focused_right, set_css_label_focused_right] = useState({})

    const [input_focused, set_input_focused] = useState(false)
    const [input_is_full, set_input_is_full] = useState(props.value)
    const [input_value, set_input_value] = useState(
        (props.value)?(props.value):''
    )

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

    var css_container =
        {
            'display': 'flex',
            'flexDirection': 'row',
            /*padding: 0;*/
            /*margin: 0;*/
            'alignItems': 'center',
            'justifyContent':'left',
            'gap': (
                (input_variant=='standard' && !icon_left_visible )?'0':'4px'
            ),


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
            'paddingRight': '1em',

        }

    var css_container_focused ={
        ...css_container,
        'outline': 'none',
        'boxShadow': '0 0 0 2px '+color_main_local_focused,

    }

    var css_input ={

        ...props, //!!!!! color ,
        'border': 'none',
        'outline': 'none',
        // 'paddingLeft': (!input_is_full)?'0':'1em',
        'fontSize': '1em',
        'fontFamily': '"Roboto", sans-serif',
        width:'100%',

        whiteSpace: 'nowrap',
        'overflow': 'hidden',
        textOverflow: 'ellipsis',


    }

    //===== VALIDATE STYLE email
    if(
        (props.type=="email")
        &&
        input_value
    ) {

        const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailPattern.test(input_value) ) {

            css_input = {
                ...css_input,
                // textDecoration:'underline overline'
                textDecorationStyle: 'wavy',
                textDecorationColor: 'green',
                textDecorationLine: 'underline'

            }
        }
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

            'position': 'absolute',
            'transition': 'all 0.1s linear',
            'marginLeft': '7px', // !!! like css_label_focused.marginLeft ='7px'

            whiteSpace: 'nowrap',
            'overflow': 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '180px',

        }

    var css_label_focused =
        {
            ...css_label,
            'color': label_text_color_focused,
            'fontSize': label_font_size_focused,

            'marginTop': ("outlined"!==input_variant)?'-50px':'-55px',

            'marginLeft': '4px',
            'paddingLeft': '3px',
            'paddingRight': '3px',

            'backgroundColor': 'white',

        }

    const css_icon =
        {
            cursor:'pointer',
            color: (props.color_icon_left)?props.color_icon_left:color_main_local
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

        css_label_focused.backgroundColor ='rgba(0, 0, 0, 0 )'


        if(
            "filled"==input_variant
        ) {
            css_label_focused.marginLeft ='7px'
        }

        if(
            "standard"==input_variant
        ) {
            css_label_focused.marginLeft ='0'
            css_container.backgroundColor='transparent'
            css_container_focused.backgroundColor='transparent'
            if(input_is_full) {
                // css_input.paddingLeft = '1px'
            }

            // css_input.paddingLeft = '.0rem'
            // css_input_focused.paddingLeft = '.0rem'

             if(icon_left_visible) {
                // css_input.paddingLeft = '.5rem'
                // css_input_focused.paddingLeft = '.5rem'
                // css_label_focused.marginLeft ='-10px'
              }

        }


        // console.log("=== css_container",css_container)
        // console.log("=== css_container_focused",css_container_focused)

    }


    useEffect(() => {


        if(
            input_refresh_focused
        ){

            //=== LABEL RIGHT
            console.log("//=== LABEL RIGHT")
            var t_css_label_focused_right = css_label_focused
            var div_of_input = document.getElementById(uniq_container_mui_id);

            const input_width = div_of_input.clientWidth
            var test = document.getElementById("service_calc_text");
            test.innerText = label_text_focused;
            test.style.fontSize = label_font_size_focused; //!!!!!!!!!!!!
            var label_height = (test.clientHeight + 1) + "px";
            var label_width = (test.clientWidth + 1) + "px"
            // console.log("=== label_height ",label_height)
            // console.log("=== label_width  ",label_width)

            var label_shift = ' - 20px - ' + label_width

            t_css_label_focused_right =
                {
                    ...css_label_focused,
                    'color': label_text_color_focused,
                    'fontSize': label_font_size_focused,

                    'backgroundColor': 'white',

                    'marginLeft': 'calc( '+input_width+'px ' + label_shift + ')',

                }
                // console.log("=== t_css_label_focused_right",t_css_label_focused_right)
                set_css_label_focused_right(t_css_label_focused_right)
                set_input_refresh_focused(false)
        }



        return () => {
            // effect
        };
    });


    const [div_clicked, set_div_clicked] = useState(false);
    useEffect(() => {

        console.log("=== useEffect icon_right_pressed ",icon_right_pressed)

        if(!icon_right_pressed) {
            console.log("=== useEffect div_clicked ")
            ref_input.current.focus()
        }else {
            console.log("=== useEffect NOT focused ")
            set_icon_right_pressed(false)
        }


        return () => {
            // console.log("=== set_click_input_focused(false) ")
            // set_click_input_focused(false)
        };
    }, [div_clicked]);




    return(

        <div>{/*input + helper*/}
            <div

                id={uniq_container_mui_id}
                // className={"css_container_mui"}
                style={(input_focused)?css_container_focused:css_container}
                onClick={(e)=>{
                    // console.log("=== label onClick ")
                    console.log("=== DIV LOCAL pressed -> icon_right_pressed", icon_right_pressed)
                    set_div_clicked(!div_clicked)
                }}
            >

                {(icon_left_visible)?
                    <div     style={{marginRight:'5px'}}></div>
                    : ("standard"==props.input_variant)?
                        ''
                        :
                        <div     style={{marginRight:'1px'}}></div>
                }



                {(!icon_left_visible)?'':
                    <div id={'icon_left111'}
                         style={css_icon}

                         onClick={(e)=>{

                             console.log('=== icon_left_component onClick 555555555'+Date.now())
                             set_input_value('')
                             set_input_is_full(false)
                             set_input_focused()
                         }}
                         onMouseEnter={(e)=>{
                             // alert('onMouseEnter!!!')
                             set_icon_hovered(true)
                         }}
                         onMouseLeave={(e)=>{
                             // alert('onMouseLeave!!!')
                             set_icon_hovered(false)
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

                               onFocus={(e)=>{
                                   console.log("=== input onFocus ")
                                   set_input_focused(true)
                                   if(icon_left_component) {
                                       set_icon_left_visible(true)
                                       set_icon_right_visible(true)
                                   }
                               }}
                               onBlur={(e)=>{
                                   set_input_focused(false)
                                   if (!input_value){
                                       if(icon_left_component) {
                                           set_icon_left_visible(false)
                                           set_icon_right_visible(false)
                                       }
                                   }

                               }}
                               onChange={(e)=>{

                                   // console.log("=== local onChange ",e)

                                   set_input_value(e.target.value)

                                   if(e.target.value) {
                                       set_input_is_full(true)
                                   }else {
                                       set_input_is_full(false)
                                   }

                                   if(props.onChange){
                                       props.onChange(e)
                                   }

                               }}


                        >
                        </input>


                {(!icon_right_visible)?'':
                    <div id={'icon_right111'}
                         style={css_icon}
                         onClick={(e)=>{

                             console.log('=== LOCAL icon_right_component 66666'+Date.now())
                             set_icon_right_pressed(true)

                         }}
                         onMouseEnter={(e)=>{
                             set_icon_hovered(true)
                         }}
                         onMouseLeave={(e)=>{
                             set_icon_hovered(false)
                         }}

                    >
                        {props.icon_right_component}
                    </div>
                }


                <div   style={

                    (!input_focused && !input_is_full && !props.placeholder )?css_label:
                        (label_focused_position_right)?
                            css_label_focused_right
                            :
                            css_label_focused

                    // (
                    //     (input_focused || input_is_full)
                    //     ||
                    //     (!input_is_full && props.placeholder)
                    // )?
                    //     (label_focused_position_right)?
                    //         css_label_focused_right
                    //         :
                    //         css_label_focused
                    //     :
                    //     css_label
                }>
                            <label

                                ref={ref_label}

                                id={uniq_label1_id}

                                htmlFor="input_id1"
                                   onClick={(e)=>{
                                       console.log("=== label onClick ")
                                       ref_input.current.focus()
                                   }}
                            >
                                <span

                                >
                                    {((input_focused || input_is_full)
                                        &&
                                        props.label_text_focused)
                                        ?
                                        props.label_text_focused
                                        :
                                        label_text}
                                    {(!props.is_required)?'':<a style={{color: (input_is_full)?color_main_local:'red'}}> *</a>}
                                    {/*{input_is_full,input_focused}*/}
                                </span>

                            </label>
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

            <div id={'service_calc_text'} style={{ 'position': 'absolute', 'float': 'left', 'whiteSpace': 'nowrap', 'visibility': 'hidden' }}></div>


        </div>
    )

}

export default TextInput
