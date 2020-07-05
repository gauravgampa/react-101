import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    display: inline-block;
    padding: 16px;
    margin: 16px;
    text-align: center;
    border: 1px solid black;
`;

const Char = ({character, handleClick}) => {

    return (
        <Paragraph onClick={handleClick}>
            {character}
        </Paragraph>
    )
}

export default Char;
