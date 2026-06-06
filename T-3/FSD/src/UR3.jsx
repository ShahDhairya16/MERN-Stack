// Create React JS app to increase value of the counter by 1 on click of the button

import { useReducer } from "react";
 
const initialState = 0;
function reducer(state, action) {
    if (action.type === 'increament'){
        return state +1;
    }
    if (action.type === 'decreament'){
        return state -1;
    }
}
function UR3()
{
    const [count, dispatch] = useReducer(reducer,initialState);
    return(
        <button onClick={() => dispatch({type: 'increament'})}>Increatment{(state)}</button>
    )
}
export default UR3;