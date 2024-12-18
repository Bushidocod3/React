import React, {useState, useEffect} from 'react';

const Modal = ({heading}) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplay(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    if (display) {
        <div>
            <h2>{heading}</h2>
        </div>
    } else {
        return null;
    }
};

export default Modal;