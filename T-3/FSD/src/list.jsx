function List() {
    const students = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ];
    return (
        <ul>{

            students.map((value) => {
                return <li key={value.id}> {value.name} </li>
            })
        }
        </ul>
    )
}

export default List;