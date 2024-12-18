import React, { useState } from "react";

const Numbers = () => {
    const initialNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
    const [numbers, setNumbers] = useState(initialNumbers);

    const showAll = () => setNumbers(initialNumbers);
    const showEven = () => setNumbers(initialNumbers.filter((num) => num % 2 === 0));
    const showOdd = () => setNumbers(initialNumbers.filter((num) => num % 2 !== 0));

    return (
        <div>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={showAll}>Pokaż wszystkie</button>
            <button onClick={showEven}>Pokaż tylko parzyste</button>
            <button onClick={showOdd}>Pokaż tylko nieparzyste</button>
        </div>
    );
};

export default Numbers;