import React, {useState} from 'react';

const UpperLower = () => {
    const [text, setText] = useState("Ala ma kota");

    const handleUppercase = () => {
        setText(text.toUpperCase());
    }
    const handleLowercase = () => {
        setText(text.toLowerCase());
    }

    return (
        <>
         <h2>{text}</h2>
         <button onClick={handleUppercase}>Uppercase</button>
         <button onClick={handleLowercase}>Lowercase</button>
        </>
    );
};

export default UpperLower;