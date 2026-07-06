import React from 'react';
import Appoitment from './Appoitment';
function Hospital(){
const data = {
    patientName: "John Doe",
    DrName : "Dr. Smith",
}
    return (
        <div>
            <h1>Hospital</h1>
            <Appoitment data={data} />
        </div>
    );

}

export default Hospital;