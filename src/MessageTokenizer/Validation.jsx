import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${props => props.warn && 'red'};
`;

const Validation = ({length}) => {
    let message = 'Enter some Text';
    let warn = false;
    if(length > 4){
        message = 'Text long enough';        
    }
    else if(length>1){
        message = 'Text too short';
        warn = true;
    }

    return (
        <Paragraph warn={warn}>{message}</Paragraph>
    );
}

export default Validation;
