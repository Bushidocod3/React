import React, {useState} from 'react';

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const updateDate = () => {
        setCurrentDate(new Date());
    }

    return (
        <div>
            <h2>
                {currentDate.toLocaleTimeString()}, {currentDate.toLocaleDateString()}
            </h2>
            <button onClick={updateDate}>Zaktualizuj datę</button>
        </div>
    );
};

export default CurrentDate;