import React from 'react';

const EventTest = () => {
    const handleClick = () => console.log("Kliknięto na element!");
    const handleMouseEnter = () => console.log("Najechano na element!");
    const handleMouseLeave = () => console.log("Opuszczono element!");

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }}/>
    );
};

export default EventTest;