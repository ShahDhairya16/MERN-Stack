import "./My2.css";
import img1 from "./assets/hero.png";


function My2(){
    const name = "React"
    return(
        <>
            <h1 style = {{ color: 'blue', fontStyle : 'italic', fontSize : '25px'}}>Welcome to {name}</h1>
            <p className="para">JSX allows writing HTML</p>
            <h3>List</h3>
            <ol type = 'A'>
                <li>Apple</li>
                <li>Orange</li>
            </ol>
            <img src = {img1} alt = "fruit" width = "200"/>
        </>
    )
}

export default My2
