import React, {useState, useEffect} from 'react';

const StrobeLight = ({color, frequency}) => {
    const [bgColor, setBgColor ] = useState("white");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBgColor((prev) => (prev === "white" ? color: "white"));
        }, frequency);

        return () => clearInterval(intervalId);
    }, [color, frequency]);

    return (
        <div style={{
            width: "500px",
            height: "50px",
            backgroundColor: bgColor,
        }} />
    );
};

export default StrobeLight;