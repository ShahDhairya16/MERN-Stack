// Create react app to perform tasks as asked.
//  First create files as asked below in routing folder
// 1. Home.js - for the home page content
// 2. Shop.js - for the shop page content
// 3. Contact.js - for the contact page content
// 4. Nopage.js - for the page other than mentioned links
// Create Main.js file which contains Links for Home, Shop and Product page. Also, add
// functionality of page routing.
// Finally call Main.js in App.js

import react from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
// import Contact from './Contact.jsx';
import Nopage from './Nopage.jsx';

function Main(){
    const Product= [{
        id:1,
        name:'Laptop',
    }
    ,{
        id:2,
        name:'Mobile',
    }
    ,{
        id:3,
        name:'Tablet',
    }
    ]

    return(
        <>
        <Router>
            <nav>
                <Link to='/'>Home</Link><br><br></br></br>
                <Link to='/shop'>Shop</Link><br><br></br></br>
                <Link to='/contact'>Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                {/* <Route path='/contact' element={<Contact/>}/> */}
                <Route path='*' element={<Nopage/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default Main;
