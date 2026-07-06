function Pb305_2(props) {

    return(
        <>
         {props.data.filter(num => num <10).map((num,index) => (<h2 key={index}>{num}</h2> ))}
        </>
    )

}

export default Pb305_2;