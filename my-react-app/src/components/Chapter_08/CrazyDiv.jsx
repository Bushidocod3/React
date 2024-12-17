import React, {useState} from 'react';

const CrazyDiv = () => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    function getRandomNumber(min = 0, max = 1000) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const handleMouseEnter = () => {
        setLeft(getRandomNumber());
        setTop(getRandomNumber());
    }

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                position: "absolute",
                left: `${left}px`,
                top: `${top}px`
            }}
            onMouseOver={handleMouseEnter}>
            
        </div>
    );
};

export default CrazyDiv;