import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState("10");

    return (
        <div>
            <h2>Liczba kliknięć: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(10)}>Reset</button>
        </div>
    );
};

export default Counter;