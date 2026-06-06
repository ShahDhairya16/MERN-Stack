import {createContext} from 'react';
import c1 from './c1.jsx';

const fname = createContext();
const lname = createContext();

function PC()
{
    return (
        <>
        <fname.Provider value='ABC'>
            <lname.Provider value='XYZ'>
                <c1 />
            </lname.Provider>
        </fname.Provider>
        </>
    )
}
export default PC;
export {fname,lname};