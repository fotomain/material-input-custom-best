import React, {useState} from 'react';

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
    const [input_placeholder, set_input_placeholder] = useState("")
    const [input_is_full, set_input_is_full] = useState(props.value)
    const [input_value, set_input_value] = useState(props.value)
    
    const [label_text, set_label_text] = useState(props.label_text)

 

    setProperty("--color_main",'red')
    setProperty("--color_main_focused",'red')
    setProperty("--label_focused_left_space",'calc(100% - '+label_text.length*8+'px)')
    // setProperty("--label_focused_left_space",'calc(100% - 225px)')
     
    
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
                
                            <label 
                                className={(input_is_full)?'show':''} htmlFor="input_id1"
                            >
                                {label_text}
                            </label>
                 
                        <div className="helper-text">
                            Helper text
                        </div>
                                   
            </div>
        </form>
    )

}
            
export default TextInputOutlineStandart