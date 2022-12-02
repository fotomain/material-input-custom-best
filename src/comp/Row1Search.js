import React from 'react';

import './Global.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";
import TextInputOutlineStandart from "./TextInputOutlineStandart";


const Com_row1_search = React.FC = () =>{


return(
    <div className={'grid'}>
    <div className={'col1_search_class'}>
        <Row1SearchPosts />

    </div>
        {/*<div className={'col1_search_class'}>*/}
            <TextInputOutlineStandart
                // id={'id1'}
                label_text={'input email please...'}
                color_main = 'teal'
                is_required='true'
                // label_text={'input email please...'}
                value={'xxxx@yyyyy.zz'}
                placeholder={'like aa@bb.cc'}
                type="email"
                // type="date"
            />
        {/*</div>*/}


        <TextInputOutlineStandart
            // id={'id2'}
            label_text={'input email please...'}
            color_main = 'teal'
            is_required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="email"
            // type="date"
        />

        <TextInputOutlineStandart
            // id={'id2'}
            label_text={'input email please...'}
            color_main = 'teal'
            // is_required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="email"
            // type="email"
        />


    </div>


)

}
export default Com_row1_search
