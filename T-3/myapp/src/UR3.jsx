// Create React JS app to increase value of the counter by 1 on click of the button

import { useReducer } from "react";
 
const initialState = 0;
function reducer(state, action) {
    if (action.type === 'increament'){
        return initialState +1;
    }
    if (action.type === 'decreament'){
        return initialState -1;
    }
}
function UR3()
{
    const [count, dispatch] = useReducer(reducer,initialState);
    return(
        <>
        <button onClick={() => dispatch({type: 'increament'})}>Increatment {(initialState)}</button>
        <button onClick={() => dispatch({type: 'decreament'})}>Decrement {(initialState)}</button>
    </>
    )
}
export default UR3;