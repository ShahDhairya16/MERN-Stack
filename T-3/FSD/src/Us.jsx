// Build a react app having a button Which increase count by 1 while clicking it.
// Create a program to build react app having buttons to increment and decrement the numbers by clicking that respective button. Also increment of the number should be perform only if number is < 10 and decrement of the number should be performed if the number is > 0.

import React, { useState } from "react";

function Us() {
    const [count, setCount] = useState(0);
    
    function inc () {
        if(count < 10) {
            setCount(count + 1);
        }
    }
    function dec () {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <h1>You clicked {count} times</h1>
            
            <button onClick={inc}>
                Increase Count
            </button><br/>

            <button onClick={dec}>
                Decrease Count
            </button>
        </div>
    );
}

export default Us;