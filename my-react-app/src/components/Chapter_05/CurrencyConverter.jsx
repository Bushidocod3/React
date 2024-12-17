import React from 'react';

const CurrencyConverter = ({from, to, value, rate}) => {
    const convertedValue = (value * rate).toFixed(2);

    return (
        <div>
            <strong>{value.toFixed(2)} </strong> {from} =>
            <strong> {convertedValue} </strong> {to}
        </div>
    );
};

export default CurrencyConverter;