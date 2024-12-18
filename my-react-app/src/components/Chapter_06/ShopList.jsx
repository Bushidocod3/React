import React from 'react';
import ShopItemHeader from "./ShopItemHeader.jsx";
import items from "../../data/items.js";

const ShopList = () => {
    return (
        <ul>
            {
                items.map(el =>
                    <ShopItemHeader title={el.title} image={el.image} key={el.title} />)
            }
        </ul>
    );
};

export default ShopList;