import React, { useState } from 'react';

const AddTwoNumbers = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const n1 = Number(num1);
    const n2 = Number(num2);
    const result = isNaN(n1) || isNaN(n2) ? "Podaj dwie liczby." : n1 + n2;

    return (
        <form>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <h1>{result}</h1>
        </form>
    );
}
export default AddTwoNumbers;