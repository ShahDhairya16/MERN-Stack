function Pb320_2(props) {
    return(
        props.data.filter(item => item.city ==='Ahmedabad').map(item => <h2>Id: {item.id} Name: {item.name}</h2>)
    )
}

export default Pb320_2;