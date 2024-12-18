import React, { useState } from 'react';

const UpperLower = () => {
    const [text, setText] = useState('Witaj świecie!');

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    };

    return (
        <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <h2>{text}</h2>
            <button onClick={handleUpperCase} style={{ marginRight: "10px" }}>Uppercase</button>
            <button onClick={handleLowerCase}>Lowercase</button>
        </div>
    );
};

export default UpperLower;