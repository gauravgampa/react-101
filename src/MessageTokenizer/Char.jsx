import React from 'react';

const Char = ({character, handleClick}) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid black'
    }

    return (
        <p onClick={handleClick} style={style}>
            {character}
        </p>
    )
}

export default Char;
