import React, {useEffect, useState} from 'react';

// import './TextInput.css'

import './TextInputOutlineStandart.css'

const setProperty = (a,b) => {
    document.documentElement.style.setProperty(a,b)
}

function TextInputOutlineStandart  (props) {
    // {color_main, color_text, text_label, text_helper }
    console.log(props)

    const [input_props, set_input_props] = useState(props)
        // Object.entries(props).map(([key, val])=>{
        //     }))

    const [input_focused, set_input_focused] = useState(false)
    const [input_is_full, set_input_is_full] = useState(props.value)
    const [input_value, set_input_value] = useState(props.value)

    const [input_placeholder, set_input_placeholder] = useState(props.placeholder)

    const [label_text, set_label_text] = useState(props.label_text)
    const [label_width, set_label_width] = useState(0)


    const color_main_local = props.color_main
    setProperty("--color_main",color_main_local)
    setProperty("--color_main_focused",color_main_local)
    // setProperty("--label_focused_left_space",'calc(100% - 225px)')

    useEffect(()=>{


        const label_font_size = '.8rem'
        var this_label1 = document.getElementById("this_label1");
        var test = document.getElementById("test_text");
        test.innerText = this_label1.textContent;
        test.style.fontSize = label_font_size;
        var height = (test.clientHeight + 1) + "px";
        var width = (test.clientWidth + 1) + "px"
        console.log("=== test",test)

        console.log("=== test.getBoundingClientRect",test.getBoundingClientRect())
        console.log("=== test.clientWidth",test.clientWidth)
        console.log("=== width",width)

            set_label_width(width)

            console.log("=== label_width",label_width)

            setProperty("--label_focused_left_space",'calc(100% - 30px - '+label_width+')')
            setProperty("--label_focused_font_size",label_font_size)

    })

    return(

        <form action="">
            <div className="container">

                        <input {...input_props}

                               value={input_value}
                               id="input_id1"
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

                            <label id={'this_label1'}
                                className={(input_is_full || props.placeholder)?'show':''} htmlFor="input_id1"
                            ><span>{label_text}
                                {(!props.is_required)?'':<a style={{color: 'red'}}> *</a>}
                            </span>

                            </label>

                        <div className="helper-text">
                            Helper text
                        </div>

            </div>

            {/*style={{ 'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f }}*/}
            {/*'visibility': 'hidden'*/}
            <div id={'test_text'} style={{ 'position': 'absolute', 'float': 'left', 'white-space': 'nowrap' }}></div>


        </form>
    )

}

export default TextInputOutlineStandart
