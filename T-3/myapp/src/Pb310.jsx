// Create a React app to perform tasks as asked using functional component:
// 1)Create a React Router that includes three routes: Home, Food Items, and Contact and
// implement navigation between these routes. 2)Create a route that displays a Home
// page, Food Items details page and Contact details page. 3) When a user clicks on
// Home page it should navigate to the home page and display “Welcome to LJU” in bold
// in the h1 heading. When a user clicks on a Food Items page, it should navigate to the
// Food Items Detail page and display three products&#39; information with name, price and
// description using props. And when the user clicks on Contact page it should navigate to
// contact details page and display contact information with blue color font.

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pb310_1.jsx';
import FoodItems from './Pb310_2.jsx';
import Contact from './Pb310_3.jsx';

function App(){
    const foodItemsData = [
        { name: 'Pizza', price: '$10', description: 'Delicious cheese pizza' },
        { name: 'Burger', price: '$8', description: 'Juicy beef burger' },
        { name: 'Pasta', price: '$12', description: 'Creamy Alfredo pasta' }
    ];
    return (
        <>
        <Router>
            <nav>
                <Link to='/'>Home</Link><br/>
                <Link to='/food-Items'>Food-Items</Link><br />
                <Link to='/contact'>Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/food-Items' element={<FoodItems/>}/>
                <Route path='/contact' element={<Contact/>}/> 
            </Routes>
        </Router>
        <FoodItems data={foodItemsData} />
        </>
    )
}

export default App;
