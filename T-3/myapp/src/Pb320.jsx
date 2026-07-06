// Write react js script to perform the task as below using function component:
// •	Create array of objects which have id, name & city of person.
// •	Display id & name of persons having city name “Ahmedabad” . Use props.
// No need to write App.js file. 

import Pb320_2 from './Pb320_2.jsx';

function Pb320(){
    const data = [
        {'id':1,'name':'ABC','city':'Ahmedabad'},
        {'id':2,'name':'DEF','city':'Surat'},
        {'id':3,'name':'GHI','city':'Ahmedabad'},
        {'id':4,'name':'JKL','city':'Baroda'},
        {'id':5,'name':'MNO','city':'Ahmedabad'}
    ];

    return(<>
        <Pb320_2 data={data} />
    </>)
}
export default Pb320;