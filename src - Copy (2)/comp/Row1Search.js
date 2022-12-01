import React from 'react';

import './Global.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";
import TextInputOutlineStandart from "./TextInputOutlineStandart";


const Com_row1_search = React.FC = () =>{


return(
    <div>
    <div className={'col1_search_class'}>
        <Row1SearchPosts />
        
    </div>
        <TextInputOutlineStandart
            label_text={'input email please...'}
            value={'xxxxxxxxxxxx'}
            
            type="text"
            // type="date"
        />
    </div>
        
    
)

}
export default Com_row1_search