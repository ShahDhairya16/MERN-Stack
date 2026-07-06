// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for home and about page and routing
// functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE)
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pb304_1.jsx';
import About from './Pb304_2.jsx';

function Pb304() {
    return (
        <>
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default Pb304;