import React from 'react';

const Hello = ({name, surname}) => {
    return (
        <div>
            <h1>Hello, {name} {surname}</h1>
        </div>
    );
};

export default Hello;