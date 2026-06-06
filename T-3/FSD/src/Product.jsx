// Create a react component that contains an arrayo of student objects with id, name and standard. Perform the following task using filter and map function : 1) Display only students whose std is 5. 2) Increase their std by 1. 3) Display student name and updated std.

function Student() {
    const students = [
        { id: 1, name: 'John', std: 5 },
        { id: 2, name: 'Jane', std: 6 },
        { id: 3, name: 'Doe', std: 5 },
        { id: 4, name: 'Smith', std: 7 }
    ]

    return (
        <>
            <h1>Students in Standard 5</h1>
            {
                students.filter((student) => student.std === 5).map((student) => (
                    <div>
                        <h3>Name : {student.name.toUpperCase()}</h3>
                        <h3>Updated standard: {student.std + 1}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default Student