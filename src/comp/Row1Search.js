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
        {/*<div>*/}
        {/*<TextInputOutlineStandart*/}
        {/*    label_text={'input email please...'}*/}
        {/*    color_main = 'teal'*/}
        {/*    required='true'*/}
        {/*    // label_text={'input email please...'}*/}
        {/*    value={'xxxx@yyyyy.zz'}*/}
        {/*    placeholder={'like aa@bb.cc'}*/}
        {/*    type="text"*/}
        {/*    // type="date"*/}
        {/*/>*/}
        {/*</div>  */}

        <div>
        <TextInputOutlineStandart
            label_text={'input email please...'}
            color_main = 'teal'
            required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="text"
            // type="date"
        />
        </div>


    </div>
        
    
)

}
export default Com_row1_search