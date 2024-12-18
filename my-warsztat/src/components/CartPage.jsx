import React, { useContext } from "react";
import { CartContext } from "../App";

const CartPage = () => {
    const { cart, setCart, total, setTotal } = useContext(CartContext);

    // Funkcja usuwania produktu
    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((product) => product.id !== productId)
        );
        // Zaktualizuj całkowitą cenę
        const productToRemove = cart.find((product) => product.id === productId);
        setTotal((prevTotal) => prevTotal - (productToRemove.price * productToRemove.quantity));
    };

    // Funkcja zmieniająca ilość produktu
    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
        // Zaktualizuj całkowitą cenę
        const product = cart.find((product) => product.id === productId);
        setTotal((prevTotal) => prevTotal + product.price);
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === productId && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
        // Jeśli ilość jest 1, usuwamy produkt
        const product = cart.find((product) => product.id === productId);
        if (product.quantity === 1) {
            removeFromCart(productId);
        } else {
            // Zaktualizuj całkowitą cenę
            setTotal((prevTotal) => prevTotal - product.price);
        }
    };

    // Funkcja czyszcząca koszyk
    const clearCart = () => {
        setCart([]);
        setTotal(0); // Resetujemy cenę
    };

    return (
        <div className="container">
            <h2>Koszyk</h2>
            {cart.length === 0 ? (
                <p>Twój koszyk jest pusty</p>
            ) : (
                <>
                    <ul className="list-group mb-3">
                        {cart.map((product) => (
                            <li
                                key={product.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span className="flex-grow-1">
                                    {product.name} - {product.quantity} x {product.price.toFixed(2)} PLN
                                </span>
                                <div>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className="btn btn-danger btn-sm me-1"
                                    >
                                        Usuń
                                    </button>
                                    <button
                                        onClick={() => increaseQuantity(product.id)}
                                        className="btn btn-secondary btn-sm me-1"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => decreaseQuantity(product.id)}
                                        className="btn btn-secondary btn-sm me-1"
                                    >
                                        -
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-end">
                        Suma: {(total || 0).toFixed(2)} PLN
                    </h4>
                    <button className="btn btn-warning" onClick={clearCart}>
                        Wyczyść koszyk
                    </button>
                </>
            )}
        </div>
    );
};

export default CartPage;
