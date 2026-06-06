// Create a parent component ex1.jsx. Create an object named details containing student name and university name. Pass the the details object to a child component Example.jsx. In child component recieve the object and display "I am abc . Studying in LJ University".


import Example from './Example.jsx'

function Example1() {
    const Details = {
        student_name : "abc",
        uni_name : "LJ University"
    }
    return (
        <>
            <Example data = {Details}/>
        </>
    )
}

export default Example1