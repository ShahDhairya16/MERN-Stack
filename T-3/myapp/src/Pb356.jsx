import {useState} from 'react';

function Pb356(){
    const [text,setText] = useState('LJ University');
    const [color,setColor] = useState('red');
    const [show,setShow] = useState(true);

    const changeText=()=>{
        if(text==='Lj University') 
            setText('Welcome Students')
        else 
            setText('LJ University')
    }

    const changeColor=()=>{
        if(color=='red')
            setColor('blue')
        else
            setColor('red')
    }

    const changeShow=()=>{
        setShow(!show)
    }

    return(
        <>
        <div>
            <h1 style={{color:color}}>{text}</h1>
            <button onClick={changeText}>Change Text</button>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={changeShow}>Toggle</button>
            {show && <p>It is a public university</p>}
        </div>
        </>
    )
}

export default Pb356;