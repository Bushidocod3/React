import React, {useState} from 'react';

const MyButton = () => {
    const [isYes, setIsYes] = useState(false)

    return (
        <button onClick={() => setIsYes((prev) => !prev)}>
        {isYes ? "TAK" : "NIE"}
        </button>
    );
};

export default MyButton;