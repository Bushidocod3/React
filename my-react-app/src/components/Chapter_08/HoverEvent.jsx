import React from 'react';

const HoverEvent = () => {
    const handleHover = () => {
        console.log("Najechano na przycisk!");
    }

    return (
        <button onMouseOver={handleHover}>Najedź na mnie!</button>
    );
};

export default HoverEvent;