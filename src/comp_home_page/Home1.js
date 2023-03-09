
import mysvg from './assets/hero-wave1.svg';

function Home1  (props) {

    return (
        <div>
            <div>Home1</div>
            <div style={{
                zIndex:0,
                width:'100%',
                backgroundSize:'1440px',
                backgroundImage: `url(${mysvg})`
            }}>

            </div>
            {/*========== Home1 https://designcode.io/ */}

        {/*    =========== LEFT */}
        {/*    Hero1Div - gradient as background */}
        {/*                    background: linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%);*/}
        {/*      div - wave image */}
        {/*                div - wave1 HeroWaves__Wave1 - image */}
        {/*                div - divider BackgroundBlur = backdrop-filter: blur(60px); */}
        {/*                div - wave2 HeroWaves__Wave2 - image */}
        {/*                div - wave3 HeroWaves__Wave3 - !!!clipPath*/}
        {/*      div - content */}
        {/*         HeroDiv1 - big       text */}
        {/*         HeroDiv2 - mediub    text*/}
        {/*         HeroDiv3 - GoToAction button */}
        {/*         HeroDiv4 - small text */}
        {/*    =========== RIGHT */}
        {/*    svg mockup */}
        {/*    svg mockup rotation 20deg on hover */}

            {/*========== Tutoria1 https://designcode.io/tutorials */}

        </div>
    )

}

export default Home1
