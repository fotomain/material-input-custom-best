import React, {useState} from 'react';

import './TextInput.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";
import {logDOM} from "@testing-library/react";


function TextInput  () {
    
    const [Label1_focused, set_label1_focused] = useState(false)
    const [input_placeholder, set_input_placeholder] = useState("aaa@bbb.cc")
    
    return(

        <form action="">
            <div className="container">
               
                    

                        {(!Label1_focused)?'':
                            <div className="left-icon"
                                 onClick={(e)=>{
                                     console.log(22222222)
                                 }}
                            >
                                <FontAwesomeIcon icon={faClose}/>
                            </div>
                        }
                        <input type="text" 
                               id="input_id1" 
                               placeholder={input_placeholder} 
                               
                               onFocus={(e)=>{
                                   set_label1_focused(true)
                               }}
                               onBlur={(e)=>{
                                   // set_label1_focused(false)
                               }}
                        >
                        </input>

                        {/*{(input_placeholder)?'':'input email please...'}*/}
                        <label htmlFor="input_id1">input email please...</label>

                        {(!Label1_focused)?'':<div className="right-icon">
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                        }

                        <div className="helper-text">
                            Helper text
                        </div>
                                   
            </div>
        </form>
    )

}
            
export default TextInput