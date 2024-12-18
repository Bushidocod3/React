import React, { useState } from "react";

const TextTyper = ({ text }) => {
    const [length, setLength] = useState(1);

    const increaseLength = () => {
        if (length < text.length) {
            setLength(length + 1);
        }
    };

    const decreaseLength = () => {
        if (length > 1) {
            setLength(length - 1);
        }
    };

    return (
        <div>
            <h1>{text.substring(0, length)}</h1>
            <button onClick={increaseLength}>+</button>
            <button onClick={decreaseLength}>-</button>
        </div>
    );
};

export default TextTyper;