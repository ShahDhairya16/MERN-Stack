// Write a program to create function based ReactJS app having an array of 6 people having
// mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60
// using filter method. Also display total count of people whose age is greater than 60 on the same
// page. Use props.

import Pb318_2 from './Pb318_2.jsx';

function Pb318(){
    const data = [70,83,38,65,49,94];

    return(<>
    <Pb318_2 data={data} />
    </>)
}

export default Pb318;