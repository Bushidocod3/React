import React from 'react';

const LikeBox = ({likes}) => {
    return (
        <div>
            <h1>Liczba polubień: {likes}</h1>
            <button>Like</button>
        </div>
    );
};

export default LikeBox;