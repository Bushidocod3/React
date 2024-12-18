import React, { useState, useEffect } from "react";

const NumberRandomInfo = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(Math.ceil(Math.random() * 5));
        }, 1000);

        return () => clearInterval(interval); // Cleanup po zakończeniu
    }, []);

    return (
        <div>
            <p>
                {randomNumber} - {randomNumber > 3 ? "Większa od 3" : "Mniejsza od 3"}
            </p>
        </div>
    );
};

export default NumberRandomInfo;