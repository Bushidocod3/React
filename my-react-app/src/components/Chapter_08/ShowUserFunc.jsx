import React from 'react';

const ShowUserFunc = ({name, surname}) => {
    const handleClick = () => {
        console.log(`Imię: ${name}, Nazwisko: ${surname}`);
    };

    return <button onClick={handleClick}>Dane Użytkownika</button>
};

export default ShowUserFunc;