// The componant should create a simple Profile UI Containing : Heading, Paragraph, List of skills, one img from assets folder and one button.Use inline css and External css as per need.

import img from './assets/hero.png'
import './MyProfile.css'

function Profile() {
    const name = 'Feel'
    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'blue' }}> Welcome {name} </h2>
            <div className='box'>
                <img src={img} alt='Profile' width='150' />
                <p>I am learning JSX</p>
                <h3>Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JSX</li>
                </ul>
                <button>Click</button>
            </div>
        </>
    )
}

export default Profile