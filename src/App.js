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

// npm start

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install react-virtualized --save
//  --save-dev faker@5.5.3
// npm i styled-components @types/styled-components

// ============== ICONS FA
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'
// npm install react-svg

// ============== ICONS REACT
// npm install react-icons


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
             backgroundImage: 'url(' + require('./comp/images_main/bkg3.jpg') + ')'
         }}
    >

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
