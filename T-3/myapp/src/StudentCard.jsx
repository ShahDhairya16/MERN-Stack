{/*
    Create a student card component which should display name,enrollment number, course while passing JS expression
*/}

function StudentCard(){
    const name = 'DMS'
    const enrollmentNumber = '123456789'
    const course = 'CE'

return (
    <>
    <h1>Student Details</h1>
    <p>{name}</p>
    <p>{enrollmentNumber}</p>
    <p>{course}</p>
    </>
)
}
export default StudentCard