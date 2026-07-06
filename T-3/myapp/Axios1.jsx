import {useState, useEffect} from 'react';
import axios from 'axios';

function Axios2(){
    const [joke,setjoke]= useState('');

    function fetchjoke(){
        axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then((response)=>{
            setjoke(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    useEffect(fetchjoke,[]);

    return(
        <div>
            <h1>Random Joke</h1>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={fetchjoke}>Get New Joke</button>
        </div>
    );
}

export default Axios2;