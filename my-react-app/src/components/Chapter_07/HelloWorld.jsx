import React, {useState, useEffect} from 'react';

const HelloWorld = () => {
    const [text, setText] = useState("Hello, World!");

    useEffect(() => {
        const id = setTimeout(()=> {
            setText("Hi, Everyone!")
        }, 3000)
    }, [])

    return (
        <h1>
            {text}
        </h1>
    );
};

export default HelloWorld;