import React from 'react';

const ClockDate = ({date}) => {
    return <h1>{date.toLocaleDateString()}</h1>
};

export default ClockDate;