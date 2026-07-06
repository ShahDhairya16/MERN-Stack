import Pb303_2 from './Pb303_2.jsx';

function Pb303() {
    const data = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
    ]

    return(
        <>
        <Pb303_2 data={data} />
        </>
    )
}

export default Pb303;