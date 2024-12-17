import React, { useState } from 'react';

const Hello = () => {
    const [name, setName] = useState("Ty");

    return (
        <form>
            <input type="text" value={name}
                   onChange={(e) => setName(e.target.value)} />
            <h1>Hello, {name}</h1>
        </form>
    );
};

export default Hello;
