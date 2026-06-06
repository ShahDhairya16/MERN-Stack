// Create a react component named 'StudentCart' in a reactvite prj. The component should display the following details : Student name, Enroll, course by passing JS expression.

function StudentCart() {
    const name = 'Rahul'
    const enroll = '123456'
    const course = 'FSD'
    return(
        <>
        <h2>Student Details</h2>
        <p>Student name : {name}</p>
        <p>Enroll : {enroll}</p>
        <p>Course : {course}</p>
        </>
    )
}

export default StudentCart