import './App.css';
import DrawingHighlights from './DrawingHighlights';
import DrawingSearch from './DrawingSearch';
import OilHighlights from './OilHighlights';
import OilSearch from './OilSearch';
import WatercolorHighlights from './WatercolorHighlights';
import WatercolorSearch from './WatercolorSearch';
import { Link, Route, Routes } from 'react-router-dom';


const Home = () => (
    <div>
        <h1>Be inspired by the MET collections!</h1>
        <div className='page-container' >
            <h3>Select artwork medium :</h3>
            <ul>
                <li>
                    <Link to="/oils">Oil paintings</Link>
                </li>
                <li>
                    <Link to="/watercolors">Watercolors</Link>
                </li>
                <li>
                    <Link to="/drawings">Drawings</Link>
                </li >
            </ul >
        </div>
    </div >
);


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drawings" element={<DrawingHighlights />} />
                <Route path="/drawings/search/:params" element={<DrawingSearch />} />
                <Route path="/oils" element={<OilHighlights />} />
                <Route path="/oils/search/:params" element={<OilSearch />} />
                <Route path="/watercolors" element={<WatercolorHighlights />} />
                <Route path="/watercolors/search/:params" element={<WatercolorSearch />} />
            </Routes>

        </div>
    );
}


export default App;
