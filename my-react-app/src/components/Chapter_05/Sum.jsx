import React from 'react';

const Sum = ([...numbers]) => {
    const total = numbers.reduce((acc, number) => acc + number, 0);

    return <h1>Suma: {total}</h1>
}

export default Sum;