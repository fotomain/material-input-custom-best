import React from 'react';

import './Global.css'
import './Home1AnimeTextCircle.css'
import Row1SearchPosts from "./Row1SearchPosts";
import TextInput from "./TextInput";


const Home1AnimeTextCircle = React.FC = () =>{


    return(
        <div className={'container_anime0'}>


            <div className={'text12_class'}>
                    <p className="text1">
                        <section className={'t_bold'}>BEST LINKER</section>
                    </p>
                    <p className="text2">
                        <section>soft #1</section>
                    </p>
                    {/*<p className="shift_text"></p>*/}
            </div>

            <div className={'circle1_class'} ></div>

        </div>

    )

}
export default Home1AnimeTextCircle

