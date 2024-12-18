import React from 'react';

const SecretStuff = ({password, correctPassword, secret}) => {
    if (password !== correctPassword) {
        return null;
    }

    return <div>{secret}</div>
};

export default SecretStuff;