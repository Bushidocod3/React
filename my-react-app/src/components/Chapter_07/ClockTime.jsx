import React from 'react';

const ClockTime = ({date}) => {
    return <h1>{date.toLocaleTimeString()}</h1>
};

export default ClockTime;