import React from 'react';

import './Global.css'
import './Home1Anime.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";
import TextInputDemo from "./TextInputDemo";


const Home1Anime = React.FC = () =>{


    return(
        <div className={'container_anime0'}>

            <br/>
            <br/>
            <div className="circle1_wrapper">
                <span className={'circle1_class'}></span>
            </div>

            <br/>
            <br/>
            <br/>
            <div className="shift_text_wrapper">
                <p className="shift_text">
                    <section className={'t_bold'}>Best Linker</section>
                    <section>soft #1</section>
                </p>
                {/*<p className="shift_text"></p>*/}
            </div>


        </div>


    )

}
export default Home1Anime

