import React, {useState, useEffect} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <ClockTime date={currentDate} />
            <ClockDate date={currentDate} />
        </div>
    );
};
export default Clock;