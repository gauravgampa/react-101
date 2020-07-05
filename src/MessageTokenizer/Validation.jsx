import React from 'react';

const Validation = ({length}) => {
    const message = 
        length > 0 ? (length > 4 ? "Text long enough" : "Text too short") : 'Enter some Text';
    return (
        <p>{message}</p>
    );
}

export default Validation;
