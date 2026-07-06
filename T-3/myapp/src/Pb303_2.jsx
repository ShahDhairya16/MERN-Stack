function Pb303_2(props){
    return (
        <>
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>
                    {props.data[0].id}
                </td>
                <td>
                    {props.data[0].name}
                </td>
                <td>
                    {props.data[0].age}
                </td>
            </tr>
            </table>
        </>
    )
    
}

export default Pb303_2;