import logo from './logo.svg';
import './App.css';
import Row1Search from "./comp/Row1Search";
import Home1AnimeTextCircle from "./comp/Home1AnimeTextCircle";
import InfiniteScrollModel from "./comp/InfiniteScrollModel";
import ReactVirtualized from "./comp/ReactBeautifulDND";
import ReactBeautifulDND from "./comp/ReactBeautifulDND";

// npm start

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install react-virtualized --save
// npm install --save-dev faker@5.5.3

function App() {
  return (
    <div className="App">

        <ReactBeautifulDND />
        {/*<InfiniteScrollModel />*/}
        {/*<Row1Search />*/}
        {/*<Home1AnimeTextCircle />*/}

    </div>
  );
}

export default App;
