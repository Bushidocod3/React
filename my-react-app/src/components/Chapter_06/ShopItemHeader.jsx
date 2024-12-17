import React from 'react';

const ShopItemHeader = ({title, image}) => {
    return (
            <header>
                <h1>{title}</h1>
                <img src={image} alt={title} style={{width: "200px", height: "auto"}}/>
            </header>
    );
};

export default ShopItemHeader;