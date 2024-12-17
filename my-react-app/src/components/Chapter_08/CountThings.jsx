import React, {useState} from 'react';

const CountThings = () => {
    const [count, setCount] = useState(10000);
    const [age, setAge] = useState(25);

    const handleClickMoney = () => {
        setCount(count + 1000);
    }
    const handleClickAge = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <p>"💰 so much money: ${count}"</p>
            <p>"Age: {age}"</p>
            <button onClick={handleClickMoney}>Get rich!</button>
            <button onClick={handleClickAge}>Get older :(</button>
        </div>
    );
};

export default CountThings;