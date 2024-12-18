import React, {useState} from 'react';
import ShopItem from "./ShopItem.jsx";

const Shop = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);

    const handleBuy = (item) => {
        setPurchasedItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={handleBuy}/>
            <ShopItem title="Dell X5500" onBuy={handleBuy}/>
            <ShopItem title="Asus NT6000" onBuy={handleBuy}/>
            <ul>
                {purchasedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;