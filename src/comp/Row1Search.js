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

        <TextInputOutlineStandart

            label_text={'input email please...'}
            type="email"
            input_variant={'filled'}

        />

        <br/>

        <TextInputOutlineStandart

            input_variant={'standard'}
            label_text={'input email please...'}
            type="email"

        />

        <br/>

        <TextInputOutlineStandart

            label_text={'input email please...'}
            type="email"

        />

        <br/>

        <TextInputOutlineStandart

            input_variant={'outlined'}

            label_text={'input email please...'}
            type="email"

        />

        <br/>

            <TextInputOutlineStandart
                // className={'input_left'}
                // id={'id1'}

                input_variant={'outlined'}

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


        <br/>

        <TextInputOutlineStandart
            // className={'input_right'}
            // id={'id2'}

            input_variant={'filled'}

            label_text={'input email please...'}

            color_main = 'teal'
            is_required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="email"
            // type="date"
            helper_text={'Very required'}
            helper_text_style={{color: 'red', fontStyle:'italic'}}

        />

        <br/>

        <TextInputOutlineStandart
            // id={'id2'}
            // className={'input_left'}
            input_variant={'outlined'}

            label_position={'right'}
            label_text_color={'brown'}
            label_text_color_focused={'#D81BE6FF'}
            label_box_shadow_style={' box-shadow: 0 0 0 1px gray '}
            label_box_shadow_style_focused={' box-shadow: 0 0 0 3px green '}

            label_text={'input email please...'}
            label_text_focused={'email'}

            color = 'red'
            color_main = 'darkmagenta'
            color_main_focused = 'darkmagenta'
            // is_required='true'
            // label_text={'input email please...'}
            // value={'xxxx@yyyyy.zz'}
            // placeholder={'like aa@bb.cc'}
            type="email"
            helper_text={'Helper text here'}
            helper_text_style={{color: 'red', fontStyle:'italic'}}
            // type="email"
        />


    </div>


)

}
export default Com_row1_search
