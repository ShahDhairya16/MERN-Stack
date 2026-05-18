import './My.css'
import imgs from './assets/hero.png'
function Dms1() {
    const name = 'React'
    return (
        <>
            <h1 style = {{color:'red' , fontStyle:'italic' , fontSize:'25px'}}>Welcome to {name}</h1>
            <p className = 'para'>JSX Writing HTML</p>
            <h3>List</h3>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                </ul>
            <img src={imgs} alt="fruit" width = '200'/>
        </>
    )
}
export default Dms1
