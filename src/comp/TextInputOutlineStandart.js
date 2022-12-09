﻿


import React, {useEffect, useRef, useState} from 'react';

// import './TextInput.css'

import './TextInputOutlineStandart.css'

const setProperty = (a,b) => {
    document.documentElement.style.setProperty(a,b)
}

function TextInputOutlineStandart  (props) {
    // {color_main, color_text, text_label, text_helper }
    console.log(props)

    const ref_input = useRef(null);
    const ref_label = useRef(null);
    const ref_helper = useRef(null);


    // const [id_local, set_id_local] = useState((parseInt(Math.random()*100000000)).toString());
    const id_local = ((parseInt(Math.random()*100000000)).toString());

    // const [uniq_input1_id, set_uniq_input1_id] = useState((props.id)?props.id:"uniq_input1_" + id_local)
    const uniq_input1_id = ((props.id)?props.id:"uniq_input1_" + id_local)
    const [label_font_size, set_label_font_size] = useState('.8rem')

    // const [uniq_input1_settings_class_id, set_uniq_input1_settings_class_id] = useState('input_'+(props.id)?props.id:"_settings_class_" + id_local)

    const t1 = (props.id) ? props.id : "_settings_class_" + id_local
    const uniq_input1_settings_class_id = "input_"+t1

    const [uniq_input1_class_right_id, set_uniq_input1_class_right_id] = useState((props.id)?props.id:"class_right_" + id_local)

    // console.log("=== uniq_input1_class_right_id",uniq_input1_class_right_id)

    const uniq_label1_id = "uniq_label1_" + id_local


    const uniq_helper1_id = "uniq_helper1_" + id_local

    console.log("=== id_local ",id_local)
    console.log("=== ref ",ref_label,ref_input)

    const [input_props, set_input_props] = useState(props)
        // Object.entries(props).map(([key, val])=>{
        //     }))

    const [input_focused, set_input_focused] = useState(false)
    const [input_is_full, set_input_is_full] = useState(props.value)
    const [input_value, set_input_value] = useState(props.value)

    const [input_placeholder, set_input_placeholder] = useState(props.placeholder)

    const [label_text, set_label_text] = useState(props.label_text)
    const [label_width, set_label_width] = useState(0)

    const [color_main_local_exist, set_color_main_local_exist] = useState((props.color_main)?true:false);
    const [color_main_local, set_color_main_local] = useState((props.color_main)?props.color_main:'teal');
    const [color_main_focused, set_color_main_focused] = useState((props.color_main_focused)?props.color_main_focused:'teal');

    // setProperty("--color_main",color_main_local)
    // setProperty("--color_main_focused",color_main_local)

    const setClass = (params) => {
        console.log('=== params ',params)

        var style_ = document.createElement('style');
        style_.type = 'text/css';

        console.log('=== element_id',params.element_id)
        console.log('=== class_id',params.class_id)
        console.log('=== class_title',params.class_title)
        console.log('=== class_body',params.class_body)

        style_.innerHTML = '.'+params.class_title+' { '
            + params.class_body +
            '}';
        document.getElementsByTagName('head')[0].appendChild(style_);
        document.getElementById(params.element_id).classList.add(params.class_id);

    }

    useEffect(()=> {

        // #FFA500

        //=== INPUT START
        setClass(
            {
                element_id: uniq_input1_id,
                class_id: uniq_input1_settings_class_id,
                class_title: uniq_input1_settings_class_id+' ',
                class_body:
                    // ((props.label_text_color)?'color:'+ props.label_text_color:'color: var(--color_main_focused)')+' !important ; ' +
                     // 'box-shadow: 0 0 0 1px red '+' !important ; ' +
                    'color: '+props.color+' !important ; ' +
                    'border-color: '+color_main_local+' !important ; ' +
                    'border-radius: 5px '+' !important ; '
            }
        )

        console.log("=== color_main_local_exist",color_main_local_exist)
        //=== INPUT FOCUS
        setClass(
            {
                element_id: uniq_input1_id,
                class_id: uniq_input1_settings_class_id,
                class_title: uniq_input1_settings_class_id+':focus ',
                class_body:

                     'outline: none !important ; '
                    +'border: 1px solid transparent !important ; '
                    +'box-shadow: 0 0 0 2px '+color_main_focused+' !important ; '
                    // 'border-radius: 5px '+' !important ; '
            }
        )

         console.log("=== props.color_main_focused",props.color_main_focused)
        // console.log("=== props.label_box_shadow_style",props.label_box_shadow_style)
        //=== LABEL FOCUS
        setClass(
        {
            element_id: uniq_input1_id,
            class_id: uniq_input1_settings_class_id,
            class_title: uniq_input1_settings_class_id+':focus + label, .'
                        +uniq_input1_settings_class_id+' + label.show ',
            class_body:
                 ((props.label_text_color)?'color:'+ props.label_text_color:'color: var(--color_main_focused)')+' !important ; ' +
                 ((!props.label_box_shadow_style)?'':props.label_box_shadow_style +' !important ; ' )+

                    'border-radius: 5px '+' !important ; '
            }
        )


        //=== LABEL RIGHT
        if("right"==props.label_position){

            var uniq_label1 = document.getElementById(uniq_label1_id);
            var test = document.getElementById("service_calc_text");
                test.innerText = uniq_label1.textContent;
                test.style.fontSize = label_font_size;
                var height = (test.clientHeight + 1) + "px";
                var width = (test.clientWidth + 1) + "px"

                set_label_width(width)


            console.log("=== right111")
            // setProperty("--label_focused_left_space", 'calc(100% - 30px - ' + label_width + ')')

            var style = document.createElement('style');
            style.type = 'text/css';

            style.innerHTML = '.'+uniq_input1_class_right_id+':focus + label, .'+uniq_input1_class_right_id+' + label.show { ' +
                ((props.label_text_color)?'color:'+ props.label_text_color:'color: var(--color_main_focused)')+' !important ; ' +
                'left: '+'calc(100% - 30px - ' + label_width + ')'+' !important ; ' +
                '}';
            document.getElementsByTagName('head')[0].appendChild(style);
            document.getElementById(uniq_input1_id).classList.add(uniq_input1_class_right_id);
        }
        else{

        }

        return function cleanup() {
            document.getElementById(uniq_input1_id)?.classList.remove(uniq_input1_class_right_id);
        }
    })

    const helper_text_style = (props.helper_text_style)?props.helper_text_style:{}

    return(

        <div className={'container_mui_form'} >
            <div className="container_mui">

                        <input {...input_props}

                               // className={'input_right'}

                               ref ={ref_input}
                               value={input_value}
                               id={uniq_input1_id}
                               placeholder={input_placeholder}

                               onFocus={(e)=>{
                                   set_input_focused(true)
                               }}
                               onBlur={(e)=>{
                                   set_input_focused(false)
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

                            {/*{( (!input_focused) )?'':<label htmlFor="input_id1">input email please...</label>}*/}

                            <label

                                id={uniq_label1_id}

                                className={(input_is_full || props.placeholder)?'show':''} htmlFor="input_id1"
                                   onClick={(e)=>{
                                       console.log("=== label onClick ")
                                       ref_input.current.focus()
                                   }}
                            ><span>
                                {(input_focused && props.label_text_focused)?props.label_text_focused:label_text}
                                {(!props.is_required)?'':<a style={{color: 'red'}}> *</a>}
                            </span>

                            </label>

                        <div className="helper-text"
                             ref={ref_helper}
                             id={uniq_helper1_id}
                             style={helper_text_style}
                        >
                            Helper text
                        </div>

            </div>

            {/*style={{ 'position': 'absolute', 'float': 'left', 'whiteSpace': 'nowrap', 'visibility': 'hidden', 'font': f }}*/}
            {/*'visibility': 'hidden'*/}
            <div id={'service_calc_text'} style={{ 'position': 'absolute', 'float': 'left', 'whiteSpace': 'nowrap', 'visibility': 'hidden' }}></div>


        </div>
    )

}

export default TextInputOutlineStandart
