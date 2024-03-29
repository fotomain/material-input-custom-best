﻿import React, {useEffect, useState} from 'react';

import './Global.css'
import './Home1AnimeTextCircle.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "../text_input/TextInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";

function Com_row1_search () {


    const [delete_text, set_delete_text] = useState(false);

    const [input_value, set_input_value] = useState('fff')

    const [input_value1, set_input_value1] = useState('aaa')

    // useEffect(() => {
    //     console.log("=== useEffect input_value " + Date.now())
    //     return () => {
    //         // effect
    //     };
    // }, [input_value]);
    //

    const [timer1, set_timer1] = useState(null);

    return(

    <div className={'main_grid'}>

    <div className={'col1_search_class'}>

        {/*<Row1SearchPosts />*/}

    </div>

    <div className={'demo_grid'}>

        <button onClick={(e)=> {
            set_input_value1(Date.now())
        }}>Change</button>

        <div>{(input_value1)?input_value1:'- - -'}</div>
        <TextInput

            id={'input_filter_posts_string'+Date.now()}
            // value={'email@email.com'}
            value={input_value1}

            // defaultValue={'ggg'}

            onChange={(e)=>{


                if(e?.target) {
                    console.log("=== upper onChange  target ")
                    set_input_value1(e.target.value)
                }
                else {
                    console.log("=== upper onChange  value ")
                    set_input_value1(e)
                }

                clearTimeout(timer1)

                const newTimer = setTimeout(()=>{

                //    api
                    console.log("=== api",e)

                },500)

                set_timer1(newTimer)

            }}

            label_text={'input email please...'}
            type="email"
            icon_left_component = {
                <FontAwesomeIcon

                    icon={faClose}
                    onClick={(e)=>{

                        console.log('=== GLOBAL icon_left_component 11111'+Date.now())
                        // set_input_value('')

                    }}

                />
            }

            icon_right_component = {
                <FontAwesomeIcon

                    icon={faSearch}
                    onClick={(e)=>{

                        console.log('=== GLOBAL icon_right_component 55555'+Date.now())

                    }}

                />
            }

        />

        <br/>

        <TextInput

            id={'input_filter_posts_string1'+Date.now()}
            // value={'email@email.com'}
            value={input_value1}

            // defaultValue={'ggg'}

            onChange={(e)=>{


                if(e?.target) {
                    console.log("=== upper onChange  target ")
                    set_input_value1(e.target.value)
                }
                else {
                    console.log("=== upper onChange  value ")
                    set_input_value1(e)
                }

                clearTimeout(timer1)

                const newTimer = setTimeout(()=>{

                    //    api
                    console.log("=== api",e)

                },500)

                set_timer1(newTimer)

            }}

            label_text={'input email please...'}
            type="email"
            icon_left_component = {
                <FontAwesomeIcon

                    icon={faClose}
                    onClick={(e)=>{

                        console.log('=== GLOBAL icon_left_component 11111'+Date.now())
                        // set_input_value('')

                    }}

                />
            }

            icon_right_component = {
                <FontAwesomeIcon

                    icon={faSearch}
                    onClick={(e)=>{

                        console.log('=== GLOBAL icon_right_component 55555'+Date.now())

                    }}

                />
            }

        />

        <br/>

        {(false)?'':
            <div>
        <TextInput

            label_text={'input email please...'}
            type="email"
            input_variant={'filled'}

            icon_left_component = {
                <FontAwesomeIcon
                    style={{cursor:'pointer'}}
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

            icon_left_component = {
                <FontAwesomeIcon
                    style={{cursor:'pointer'}}
                    icon={faClose}
                    onClick={(e)=>{

                        console.log('22222222'+Date.now())

                    }}

                />
            }
        />


        <br/>

        <TextInput

            // input_variant={'standard'}
            label_text={'input email please...'}
            type="email"
            value={'value <> 0'}

            icon_left_component = {
                <FontAwesomeIcon
                    style={{cursor:'pointer'}}
                    icon={faClose}
                    onClick={(e)=>{

                        console.log('22222222'+Date.now())

                    }}

                />
            }
        />
        <br/>

        <TextInput

            label_text={'input email please... standard'}
            type="email"

        />

        <br/>

        <TextInput

            input_variant={'outlined'}

            label_text={'input email please...outlined+icon'}
            label_font_size={'0.9rem'}
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

            input_variant={'outlined'}

            label_text={'input email please...outlined+classic'}
            label_font_size={'0.9rem'}
            type="email"

        />

        <br/>

            <TextInput
                // className={'input_left'}
                id={'id1'}

                input_variant={'outlined'}

                label_text={'input email please...'}
                label_focused_position={'right'}
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

            // value={input_value}

            label_focused_position={'right'}
            label_text_color={'brown'}
            label_text_color_focused={'rgb(216, 27, 230)'}
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

            type="email"
            helper_text={'Helper text here'}
            helper_text_style={{color: 'red', fontStyle:'italic'}}
            // type="email"
        />

        <TextInput/>


        <input></input>
        <button>Empty press</button>

        </div>
        }

    </div>

</div> // return
)

}
export default Com_row1_search
