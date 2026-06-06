// Create a react component that manages multiple form input fields using a single state object and displays the values in real time.

import React, { useState } from "react";

function Us3 () {
    const [data, setData] = useState({});

    function handleChange (e) {
        const { name, value } = e.target;
        setData({...data, [name] : value});
    }

    return (
        <>
            <input type = 'text' name = 'fname' onChange={handleChange}/>
            <input type = 'text' name = 'lname' onChange={handleChange}/>'
            <p>FN : {data.fname}  LN : {data.lname}</p>
        </>
    )
}

export default Us3;