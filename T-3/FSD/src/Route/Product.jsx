function Product(props) {
    return (
        <div>
            <h1>Product Page</h1>
            {
                props.products.map((p) => {
                    return (
                        <div>
                            <img src={p.image} alt={p.name} width="100" height="100" />
                            <h2>{p.name}</h2>
                            <p>Price: {p.price}</p><br/>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Product;