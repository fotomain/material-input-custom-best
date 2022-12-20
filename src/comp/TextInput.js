


import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";

import './TextInput.css'
import {clear} from "@testing-library/user-event/dist/clear";


function TextInput  (props) {

    // console.log("=== props")
    // console.log(props)
    console.log("=== props.value ", props.value)
    var props_variant=null;
    switch (true) {
        case (!!props.value && !!props.onChange) : props_variant='v_c'; break
        case ( !props.value &&  !props.onChange) : props_variant='n_n'; break
        case ( !props.value && !!props.onChange) : props_variant='n_c'; break
        case (!!props.value &&  !props.onChange) : props_variant='v_n'; break
    }

    console.log("=== props_variant",props_variant)

    // (null!=props.value)?(props.value):
    const  defaultValue = (props.value)?props.value:props.defaultValue;
    console.log("=== defaultValue ", defaultValue)

    const [input_value, set_input_value] = useState(
        (props.value)?props.value:props.defaultValue
    )
    const [input_is_full, set_input_is_full] = useState(
        (!!props.value || !!input_value)
    )
    console.log('=== input_is_full',input_is_full)

    const [input_focused, set_input_focused] = useState(!!props.value)

    const [input_changed , set_input_changed ] = useState(props.value)

    console.log("=== input_focused",input_focused)
    console.log("=== input_is_full",input_is_full)

    const ref_input     = useRef(null);
    const ref_label     = useRef(null);
    const ref_helper    = useRef(null);

    const id_local = ((parseInt(Math.random()*100000000)).toString());

    const uniq_container_mui_id = ((props.id)?props.id:"uniq_container_mui_" + id_local)
    const uniq_input1_id = ((props.id)?props.id:"uniq_input1_" + id_local)

    const input_variant = (!props.input_variant)?'standard':props.input_variant


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
        (!!props.icon_left_component && (!!props.value || !!input_value))
    )

    console.log("=== icon_left_visible",icon_left_visible)
    console.log("=== icon_left_visible === ",!!props.icon_left_component && (!!props.value || !!input_value))
    console.log("=== icon_left_visible === 1 ", !!props.icon_left_component )
    console.log("=== icon_left_visible === 2 ", !!props.value)
    console.log("=== icon_left_visible === 3 ", !!input_value)

    var ret = "not defined!!!"
    if(!!props.icon_left_component){

            if((!!props.value || !!input_value)){
                ret=true
            }
            else {

                if(input_focused){
                    ret=true
                }
                else {
                    ret=false
                }
            }

    }
    else {
        ret = false
    }

    const icon_left_must_show =ret;

    console.log("=== icon_left_must_show === ", icon_left_must_show)

    const [icon_right_pressed, set_icon_right_pressed] = useState(false)

    const [icon_right_visible, set_icon_right_visible] = useState(
        props.icon_right_component && (!!props.value || !!input_value)
    )

    const [icon_left_component, set_icon_left_component] = useState(
        !!props.icon_left_component
    )
    const [icon_right_component, set_icon_right_component] = useState(
        !!props.icon_left_component
    )

    const [icon_hovered, set_icon_hovered] = useState(false)

    const uniq_label1_id = "uniq_label1_" + id_local

    const uniq_helper1_id = "uniq_helper1_" + id_local

    // console.log("=== id_local ",id_local)
    // console.log("=== ref ",ref_label,ref_input)

    const [input_refresh_focused, set_input_refresh_focused] = useState(true)

    // const [input_props, set_input_props] = useState(props)

    const [css_label_focused_right, set_css_label_focused_right] = useState({})




    const [label_text, set_label_text] = useState(props.label_text)
    const [label_text_focused, set_label_text_focused] = useState(
        (props.label_text_focused)?props.label_text_focused:props.label_text
    )
    const [label_focused_position_right, set_label_focused_position_right] = useState(
        props.label_focused_position && "right"==props.label_focused_position
    )

    const [color_main_local, set_color_main_local] = useState((props.color_main)?props.color_main:'teal');
    const [color_main_local_focused, set_color_main_local_focused] = useState((props.color_main_focused)?props.color_main_focused:'teal');

    const helper_text_style = (props.helper_text_style)?props.helper_text_style:{}

    var t_gap = '0px'
    switch (true) {
        case ((input_variant=='standard') && !icon_left_must_show) : t_gap = '0px'; break
        default: t_gap = '4px'
    }

    var css_container =
        {
            'display': 'flex',
            'flexDirection': 'row',
            /*padding: 0;*/
            /*margin: 0;*/
            'alignItems': 'center',
            'justifyContent':'left',
            'gap': (
                t_gap
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

        const show_padded = (!!props.value || !!input_value)
        console.log("=== show_padded",show_padded)
        if( show_padded ){
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

        }


        // console.log("=== css_container",css_container)
        // console.log("=== css_container_focused",css_container_focused)

    }


    useEffect(() => {

        // console.log("=== LOCAL useEffect 000 ")


        if(
            label_focused_position_right
            &&
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

        // ref_input.current.focus()

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


    useEffect(() => {

        console.log("=== input_changed",input_changed)
        if(!input_changed) { return }


        var new_value =''
        if(input_changed?.target){
            new_value = input_changed.target?.value
        }
        else {
            new_value = input_changed
        }

        console.log("=== new_value",new_value)

        if (new_value) {
            set_input_is_full(true)
        } else {
            set_input_is_full(false)
        }

        if (props.onChange) {
            props.onChange(new_value)
        }


        return () => {
            // effect

        };
    }, [input_changed]);


    const [timer1, set_timer1] = useState(null);
    const set_input_value_timeouter = (e) =>{

        set_input_value((e.target)?e.target.value:e)

        clearTimeout(timer1)

        const newTimer = setTimeout(()=>{
            console.log("=== set_input_value_timeouter")
            set_input_changed(e)
        },500)

        set_timer1(newTimer)
    }

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

                {/*{(icon_left_visible || (!!props.icon_left_component && (!!props.value || !!input_value)) )?*/}
                {/*    <div     style={{marginRight:'5px'}}></div>*/}
                {/*    : ("standard"==props.input_variant)?*/}
                {/*        ''*/}
                {/*        :*/}
                {/*        <div     style={{marginRight:'1px'}}></div>*/}
                {/*}*/}

                {(!(icon_left_must_show || ("standard"!=input_variant) ))?'':
                    <div     style={{marginRight:'5px'}}></div>
                }


                {( !icon_left_must_show )?'':
                    <div id={'icon_left111'}
                         style={css_icon}

                         onClick={(e)=>{

                             console.log('=== icon_left_component onClick 555555555'+Date.now())
                             if(props.onChange) {
                                 props.onChange('')
                             }
                             set_input_value('')
                             set_input_is_full(false)
                             set_input_focused(true)
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

                {/*{...props}*/}

                {/*{...input_props}*/}

                {/*{...props}*/}

                    <input

                        {...props}

                        style={(input_focused)?css_input_focused:css_input}

                        ref ={ref_input}
                        value={(
                            "v_n"==props_variant || "v_c"==props_variant
                        )?props.value:input_value}
                        id={uniq_input1_id}

                        onFocus={(e)=>{
                            console.log("=== input onFocus ")
                            set_input_focused(true)
                            // if(icon_left_component) {
                            //     set_icon_left_visible(true)
                            // }
                            // if(icon_right_component) {
                            //     set_icon_right_visible(true)
                            // }
                        }}
                        onBlur={(e)=>{
                            set_input_focused(false)
                            set_input_changed(null)

                                // if(!(!!props.icon_left_component &&  (!!props.value || !!input_value))) {
                                //     set_icon_left_visible(false)
                                // }
                                // if(!(!!props.icon_left_component &&  (!!props.value || !!input_value))) {
                                //     set_icon_right_visible(false)
                                // }


                        }}
                        onChange={(e)=>{

                            console.log("=== LOCAL onChange ", props_variant)

                            if( "n_c"==props_variant || "v_c"==props_variant){
                                props.onChange(e)
                            } else {
                                if("v_n"==props_variant){
                                    alert('=== Warning! props.onChange no defined for input  '
                                        +((props.id)?' with id: '+props.id:'')
                                    )
                                }
                            }
                            set_input_value_timeouter(e)

                            // props.setValue(e.target.value)

                        }}


                    >
                    </input>


                {( !icon_left_must_show )?'':
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

                    (( input_focused || props.value || input_value || props.placeholder) )
                        ?
                            (label_focused_position_right)?
                                css_label_focused_right
                                :
                                css_label_focused
                        :css_label

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
