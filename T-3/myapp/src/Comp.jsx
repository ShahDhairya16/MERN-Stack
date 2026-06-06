// Create 1 name file named comp.jsx and other 3 component file comp1,comp2,comp3.jsx pass number 1 and number 2 from comp.jsx to comp3.jsx. Calculate multiplication of the numbers using use context

import {createContext} from 'react';
import Comp1 from './Comp1.jsx';

const NumberContext = createContext();

function Comp(){
    return (
        <>
    <NumberContext.Provider value={{ number1: 5, number2: 10 }}>
      <h2>Main Component</h2>
      <Comp1 />
    </NumberContext.Provider>
        </>
    )

}

export default Comp;
export {NumberContext};