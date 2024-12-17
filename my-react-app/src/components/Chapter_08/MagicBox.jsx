import React, {useState} from 'react';

const MagicBox = () => {
    const [color, setColor] = useState("#000");

    const handleHover = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    }
    return (
        <div
        style={{
            width: "200px",
            height: "200px",
            backgroundColor: color}}
        onMouseOver={handleHover}
        ></div>
    );
};

export default MagicBox;