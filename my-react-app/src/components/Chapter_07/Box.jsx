import React, {useState, useEffect} from 'react';

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const id = setInterval(()=> {
            setColor(prev => {
                return prev === "green" ? "red" : "green";
            });
        }, 2500);
        return () => clearInterval(id);
    }, [])


    return (
        <div style={{
            height: "100px",
            width: "100px",
            backgroundColor: color,
        }} />
    );
};

export default Box;