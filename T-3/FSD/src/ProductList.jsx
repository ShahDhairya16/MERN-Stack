// Create a product card component to show product details like title, price, rating and image. Use a ProductList component to store product data and display details using map function.

import ProductCard from './ProductCard.jsx'
import img from "./assets/hero.png";
import img1 from "./assets/react.svg";

function ProductList() {
    const product = [
        {
            title: "Laptop",
            price: 50000,
            rating: 4.5,
            image: img
        },

        {
            title: "Smartphone",
            price: 20000,
            rating: 4.2,
            image: img1
        }
    ]
    return (
    <>
        <ProductCard data = {product}/>
    </>)
}

export default ProductList