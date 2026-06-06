function ProductCard(props) {
    return (
        <>
            {
                props.data.map((product) => (
                    <div>
                        <img src={product.image} alt={product.title} width={200} height={200}/>
                        <h2>{product.title}</h2>
                        <h2>₹ {product.price}</h2>
                        <h2>{product.rating} ⭐</h2><br></br>
                    </div>
                ))
            }
        </>
    )
}

export default ProductCard