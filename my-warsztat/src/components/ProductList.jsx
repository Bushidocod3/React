import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const ProductList = ({ products }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-12 col-md-4">
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price.toFixed(2)} PLN</p>
                            <button onClick={() => addToCart(product)} className="btn btn-success me-2">
                                Dodaj do koszyka
                            </button>
                            <Link to={`/product/${product.id}`} className="btn btn-primary">
                                Zobacz więcej
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;