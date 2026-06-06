// Implement the following componants in your react application. Myreact.jsx to setup the router and define the routes. Home.jsx for the home page and produxt.jsx for the product page. Create a react router which includes two routes and navigation between them. When the user clicks on the home link, display "Welcome to LJU" also include link for product page. Product page displays information of 3 products (name,price and image) using props. When the user clicks on the product page it should navigate to product page and display the items.

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx'
import Product from './Product.jsx'
import Nopage from './Nopage.jsx'
import img1 from '../assets/hero.png'
import img2 from '../assets/react.svg'
import img3 from '../assets/vite.svg'

function My() {

    const prds = [
        { name: 'Product 1', price: 40000, image: img1 },
        { name: 'Product 2', price: 20000, image: img2 },
        { name: 'Product 3', price: 30000, image: img3 }
    ]
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element = <Product products={prds} /> />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default My;