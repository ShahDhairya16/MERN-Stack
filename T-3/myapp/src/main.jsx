import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './MyProfile.css'
// import App from './App.jsx'
// import Dms1 from './Dms1.jsx'
// import StudentCard from './StudentCard.jsx'
import MyProfile from './MyProfile.jsx'
// import Map2 from './Map1.jsx'
import Product from './Product.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <StrictMode>
  //   <Dms1 />
  // </StrictMode>,
  // <StrictMode>
  //   <StudentCard />
  // </StrictMode>,
  // <StrictMode>
  //   <MyProfile />
  // </StrictMode>
  //   <StrictMode>
  //   <Map2 />
  // </StrictMode>
  <StrictMode>
    <Product />
  </StrictMode>


)
