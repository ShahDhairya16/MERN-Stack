function Pb318_2(props){
    return (
        <>
        {props.data.filter((value)=> value > 60).map((value)=><h2>{value}</h2>)}
        </>
    )
}

export default Pb318_2;