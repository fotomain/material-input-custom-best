import React from 'react';

import './Global.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";
import TextInputOutlineStandart from "./TextInputOutlineStandart";


const Com_row1_search = React.FC = () =>{

    const setProperty = (a,b) => {
        document.documentElement.style.setProperty(a,b)
    }

    setProperty("--color_main",'red')
    setProperty("--color_main_focused",'red')
    setProperty("--label_focused_left_space",'calc(100% - 225px)')
 
return(
    <div>
    <div className={'col1_search_class'}>
        <Row1SearchPosts />
        
    </div>
        <TextInputOutlineStandart 
            text_label={'input email please...'}
            value={'xxxxxxxxxxxx'}
            // style={{
            //     color:'red', 
            //     '--color_main':'teal',
            //     '--color_main_focused':'teal'
            // }}
            type="text"
            // type="date"
        />
    </div>
        
    
)

}
export default Com_row1_search