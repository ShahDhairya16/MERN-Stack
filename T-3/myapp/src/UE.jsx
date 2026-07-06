// Add two buttons and increament count by 1 with each click 
// Display alert as an effect on specified condition 
// Effect will be triggered only when the page rendered for the first time, every time the button a is clicked,
// for the first time and on every update 

import {useEffect,useState} from 'react';

function UE(){
    const [count,setCount] = useState(0);
    const [calculation, setCal] = useState(0);

    useEffect(()=>{
        alert("Page rendered for the first time");
    },[]);

    useEffect(()=>{
        alert('Click A')
    },[count]);

    useEffect(()=>{
        alert('count updated')
    });


function ChangeCount(){
    setCount(count+1);
}

function ChangeCal(){
    setCal(count+2);
}
return (
    <div>
        <button onClick={ChangeCount}>A {count}</button>
        <button onClick={ChangeCal}>B</button>
    </div>
)

}

export default UE;