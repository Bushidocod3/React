import React, {useState} from 'react';

const ShopItem = ({title, onBuy}) => {
    const handleBuy = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        } else {
            console.error("onBuy is not a function or was not passed.");
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleBuy}>Kup</button>
        </div>
    );
};

export default ShopItem;