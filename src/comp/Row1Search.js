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
                // className={'input_left'}
                // id={'id1'}
                label_text={'input email please...'}
                label_position={'right'}
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
            // className={'input_right'}
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
            // className={'input_left'}
            label_position={'right'}
            label_text_color={'brown'}

            label_text={'input email please...'}
            color_main = 'teal'
            // is_required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="email"
            helper_text_style={{color: 'red'}}
            // type="email"
        />


    </div>


)

}
export default Com_row1_search
