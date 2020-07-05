import React, { Component } from 'react';

import Char from './Char';
import Validation from './Validation';
import styled from 'styled-components';

const Container = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid black;
    margin-top: 15px;
    padding: 5px;
    @media (max-width: 450px) {
        width: 450px;
    }
`;

export default class MessageTokenizer extends Component {
    state = {
        message: ''
    }

    handleMessageChange = (event) => {
        let inputMessage = '';
        if(event && event.target && event.target.value){
            inputMessage = event.target.value;
        }
        this.setState({message: inputMessage});
    }

    removeCharacterHandler = (charList, index) => {        
        charList.splice(index, 1);
        this.setState({message: charList.join('')});
    }

    render() {
        const charList = [...this.state.message];
        const messageLength = this.state.message.length || 0;
        return (
            <Container>
                <input value={this.state.message} onChange={this.handleMessageChange} />
                <Validation length={messageLength}/>
                {charList.map((ch, index)=>{
                    return(
                        <Char 
                            key={index}
                            character={ch} 
                            handleClick={() => this.removeCharacterHandler(charList, index)}/>)
                })}                
                <p>length of input: {messageLength}</p>
            </Container>
        )
    }
}
