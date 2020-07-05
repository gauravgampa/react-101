import './MessageTokenizer.css';

import React, { Component } from 'react';

import Char from './Char';
import Validation from './Validation';

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
            <div className="container-assignment-2">
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
            </div>
        )
    }
}
