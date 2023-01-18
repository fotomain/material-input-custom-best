import logo from './logo.svg';
import './App.css';
import Row1Search from "./comp/Row1Search";
import Home1AnimeTextCircle from "./comp/Home1AnimeTextCircle";
import InfiniteScrollModel from "./all_versions/InfiniteScrollModel";
import ReactVirtualized from "./all_versions/ReactBeautifulDND";
import ReactBeautifulDND from "./all_versions/ReactBeautifulDND";

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

// ============== ICONS
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'
//  npm install react-svg


function App() {
  return (
    <div className="App"
         style={{
             backgroundRepeat: "no-repeat",
             backgroundSize:'100% 100%',
             backgroundImage: 'url(' + bkg_app + ')'
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
