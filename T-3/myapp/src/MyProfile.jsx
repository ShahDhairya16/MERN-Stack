{/*
    the component should display single profile ui containing heading para list of skills one image from assests folder and one button use inline css and external css as per need
*/}

import './MyProfile.css'
import img from './assets/hero.png'

function MyProfile() {
    const name  = 'Dhairya'
    const role = 'Developer'
        return (
            <div className='root'>
            <h1 style={{color:'blue' , fontSize:'30px' , fontStyle:'italic'}}>My Profile</h1>
            <p className = 'para'>Name : {name}
                <br />
                Role : {role}
                <br />
                Skills :
                <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                </ul>
                <img src = {img} alt="profile" width='200'/>
                <button style={{backgroundColor:'green' , color:'White' , padding:'10px' , borderRadius:'5px' , border:'none' , cursor:'pointer'}}>Contact Me</button>
            </p>
            </div>
        )
}

export default MyProfile