import React, { useState } from "react";

const ColorfulBoxes = () => {
    const [colors, setColors] = useState([]);

    const addBox = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColors([...colors, randomColor]);
    };

    return (
        <div>
            <button onClick={addBox}>Dodaj Boxa!</button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            width: "200px",
                            height: "200px",
                            backgroundColor: color,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorfulBoxes;