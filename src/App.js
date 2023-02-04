import logo from './logo.svg';
import './App.css';
// import Row1Search from "./comp/Row1Search";
// import Home1AnimeTextCircle from "./comp/Home1AnimeTextCircle";
// import InfiniteScrollModel from "./all_versions/InfiniteScrollModel";
// import ReactVirtualized from "./all_versions/ReactBeautifulDND";
// import ReactBeautifulDND from "./all_versions/ReactBeautifulDND";

import bkg1 from "./comp/images_main/bkg1.jpg";
import ReactVirtuso from "./virtuoso_try/ReactVirtuso";
import bkg_app from "./comp/images_main/bkg3.jpg";
import {Mui3Test1} from "./comp_mui/Mui3Test1";
import IconSystem from "./virtuoso_try/Icons/IconSystem";
import React from "react";
import IconSVG1 from "./virtuoso_try/Icons/IconSVG1";

// npm start

// ==== NEW PLACE !!!!!!
// --- npm config set registry http://registry.npmjs.org/
// npm config set registry https://registry.npmjs.org/
// npm config set proxy http://172.30.1.224:8080
// npm config set https-proxy http://172.30.1.224:8080
// npm ON ERROR config set timeout 6000000
// !!! get from fresh ionic LIST project 2 files
//      package.json
//      package-lock.json


// npm install
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// npx tsc --init


// npm install @capacitor/device
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install react-virtualized --save
//  --save-dev faker@5.5.3
// npm i styled-components @types/styled-components

// ============== ICONS FA
// npm cache clean --force
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'
// npm install react-svg

// ============== ICONS

// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

// npm install --save react-icon-tint
// npm i react-icons



function App() {


    // {/*<img src={require('./logo.jpeg')} />*/}
    // const dd = require('../public/images_public/bkg3.jpg')
    // const dd = `url(${"../public/images_public/bkg3.jpg"})`


//     import { createGlobalStyle } from 'styled-components'
//
//     const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.whiteColor ? 'white' : 'black')};
//   }
// `
//
//         <React.Fragment>
//         <GlobalStyle whiteColor />
//     <Navigation /> {/* example of other top-level stuff */}
// </React.Fragment>


  return (
    <div className="App"

         style={{
             backgroundRepeat: "no-repeat",
             // backgroundImage: 'url(' + bkg_app + ')'
             backgroundSize:'100% 100%',
             backgroundImage: 'url(' + require('./comp/images_main/bkg3.jpg') + ')',

             display:'flex',
             flexDirection:'column',
             justifyContent:'space-between',
             alignItems:'top',
         }}
    >


        <IconSVG1/>

        <div title={'55555555555'} style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'fa'} />
            <IconSystem id={'mui777'} mode={'mui777'} name={'search'} mode_icon_system={'fa'} />
        </div>
        <div title={'55555555555'} style={{ flex:1}}>
            <p>Font Awesome</p>
        </div>

        <div style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'ios'} />
        </div>
        <div style={{ flex:1}}>
            <p>IOS from PNG</p>
        </div>

        <div style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'mui'} />
        </div>
        <div style={{ flex:1}}>
            <p>Google Classic</p>
        </div>

        <div style={{ flex:1}}>
            {/*=== new icon STEP1 - name*/}
            <IconSystem SEARCH stl size={50} />
        </div>
         <div style={{ flex:1}}>
            <p>Google Material Styled</p>
        </div>


        {/*<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" >*/}
        {/*    <defs>*/}
        {/*        <linearGradient id="lgrad" x1="0%" y1="12%" x2="100%" y2="88%" >*/}
        {/*            <stop offset="0%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />*/}
        {/*            <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />*/}
        {/*        </linearGradient>*/}
        {/*    </defs>*/}
        {/*    <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>*/}
        {/*</svg>*/}


        <Mui3Test1/>

        <ReactVirtuso />
        {/*<ReactVirtualizedBeautiful />*/}
        {/*<ReactBeautifulDND />*/}
        {/*<InfiniteScrollModel />*/}
        {/*<Row1Search />*/}
        {/*<Home1AnimeTextCircle />*/}

    </div>
  );
}

export default App;
