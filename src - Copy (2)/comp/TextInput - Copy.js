import React, {useState} from 'react';

import './TextInput.css'




function TextInput  () {
    
    const [Label1_focused, set_Label1_focused] = useState(false)
    
    return(
        
        // mdc-floating-label--float-above
        <div className="inline-text-field-container">

                <div className="mdc-text-field mdc-text-field--outlined">

                    <input className="mdc-text-field__input" autoCorrect="off" autoComplete="off" spellCheck="false"
                           id="demo-mdc-text-field" maxLength="524288"
                           onFocus={(e)=>{
                               console.log(e)
                               set_Label1_focused(true)
                               console.log(Label1_focused)
                           }}
                          
                           onBlur={(e) =>{
                               set_Label1_focused(false)
                           } }
                           
                    ></input>

                    <div className="mdc-notched-outline mdc-notched-outline--upgraded">
                        <div className="mdc-notched-outline__leading"></div>
                        <div className="mdc-notched-outline__notch" >
                    
                            <label htmlFor="demo-mdc-text-field" 
                                   className={((!Label1_focused)?'mdc-floating-label':'') + (Label1_focused?'mdc-floating-label--float-above':'')}  >
                                Label 
                            </label>
                    
                        </div>
                        <div className="mdc-notched-outline__trailing"></div>
                    </div>

                </div>

        </div>            
    

    )

}
            
export default TextInput