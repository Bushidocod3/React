import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

    if (!product) return <p>Produkt nie znaleziony</p>;

    return (
        <div className="container">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} className="img-fluid" />
            <p>{product.description}</p>
            <p>{product.price.toFixed(2)} PLN</p>
            <button onClick={() => addToCart(product)} className="btn btn-primary">
                Dodaj do koszyka
            </button>
        </div>
    );
};

export default ProductPage;