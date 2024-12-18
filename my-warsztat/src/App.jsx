import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import './App.css';

const CartContext = React.createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Jeśli produkt już istnieje w koszyku, zwiększamy jego ilość
        return prevCart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
      } else {
        // Dodajemy nowy produkt z ilością 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Aktualizujemy całkowitą cenę po dodaniu produktu
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const totalProducts = cart.reduce((acc, product) => acc + product.quantity, 0);

  return (
      <CartContext.Provider value={{ cart, addToCart, total, setCart, setTotal }}>
        <Router>
          <div className="container">
            <header className="my-4">
              <nav className="navbar bg-dark">
                <Link to="/" className="navbar-brand">Sklep Elektroniczny</Link>
                <Link to="/cart" className="btn btn-primary">
                  Koszyk ({totalProducts}) - {(total || 0).toFixed(2)} PLN
                </Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<ProductList products={products} />} />
              <Route path="/product/:id" element={<ProductPage products={products} />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </Router>
      </CartContext.Provider>
  );
};
export { CartContext };
export default App;
