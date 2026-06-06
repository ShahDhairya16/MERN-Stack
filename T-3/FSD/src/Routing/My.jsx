// Create a react APP using fucntional componant and react router dom. 1) create routes for Home, Shop, Contact, 404 no page. Impliment navigation using link. Display home page on home route, shop page on shop route, contact details on contact route and page not found for invalid url. 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Contact from './Contact.jsx'
import Nopage from './Nopage.jsx'

function My() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default My;