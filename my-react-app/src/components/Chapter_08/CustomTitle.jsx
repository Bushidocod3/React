import React, {useState, useEffect} from 'react';

const CustomTitle = () => {
    const [clicks, setClicks] = useState(1);

    useEffect(() => {
        document.title = `Kliknięto ${clicks} razy!`;
    }, [clicks]);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <p
            style={{fontSize: `${clicks * 1.2}rem`}}
            onClick={handleClick}>
            Kliknięto mnie już: {clicks} razy.
        </p>
    );
};

export default CustomTitle;