function Pb319_2(props){
    const button = () =>{
        alert("Your Product is Added to cart!");
    }
    return(
        <>
        <div>
        <h2>Product Name: {props.data.productName}</h2>
        <h2>Price: {props.data.price}</h2>
        <button onClick={button}>Add to cart</button>
        </div>
        </>
    )
}

export default Pb319_2;