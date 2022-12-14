import React, {useState} from 'react';

import './Global.css'
import './Home1AnimeTextCircle.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";


function Com_row1_search () {


    const [delete_text, set_delete_text] = useState(false);

    const [input_value, set_input_value] = useState('')


    return(
<div className={'main_grid'}>

    <div className={'col1_search_class'}>

        {/*<Row1SearchPosts />*/}

    </div>

    <div className={'demo_grid'}>

        <TextInput

            label_text={'input email please...'}
            type="email"
            icon_left_component = {
                <FontAwesomeIcon
                    icon={faClose}
                    onClick={(e)=>{

                        console.log('22222222'+Date.now())

                    }}

                />
            }


        />

        <br/>

        <TextInput

            label_text={'input email please...'}
            type="email"
            input_variant={'filled'}

        />

        <br/>

        <TextInput

            input_variant={'standard'}
            label_text={'input email please...'}
            type="email"

        />

        <br/>

        <TextInput

            label_text={'input email please...'}
            type="email"

        />

        <br/>

        <TextInput

            input_variant={'outlined'}

            label_text={'input email please...'}
            type="email"

            icon_left_component = {
                <FontAwesomeIcon
                    icon={faClose}
                    onClick={(e)=>{

                        console.log('22222222'+Date.now())

                    }}

                />
            }


        />

        <br/>

            <TextInput
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

        <TextInput
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

        <TextInput
            // id={'id2'}
            // className={'input_left'}
            input_variant={'outlined'}

            value={input_value}

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
            color_icon_left = 'brown'
            icon_left_component = {
                <FontAwesomeIcon
                    icon={faClose}
                    onClick={(e)=>{

                        console.log('22222222'+Date.now())

                    }}

                />
            }

            // icon_left_component1 = {{
            // 'onclick_icon_left' : {()=>{
            //     console.log("=== onclick_icon_left set_delete_text ");
            //     set_delete_text(true)
            //     }}
            // }}
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

</div> // return
)

}
export default Com_row1_search
