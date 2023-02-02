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
import {Mui3Test1} from "./mui3/Mui3Test1";

// npm start

// ==== NEW PLACE !!!!!!
// --- npm config set registry http://registry.npmjs.org/
// npm config set registry https://registry.npmjs.org/
// npm config set proxy http://172.30.1.224:8080
// npm config set https-proxy http://172.30.1.224:8080
// npm config set timeout 6000000
// !!! yarn install

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

// npm install --save @mui/icons-material
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

// npm install @material-ui/CORE
// npm install @material-ui/styles
// npm install --save @material-ui/icons

// npm install --save react-icon-tint




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
             justifyContent:'center',
             alignItems:'top',
         }}
    >

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
