import './App.css';

import React, { Component } from 'react'

import MessageTokenizer from './MessageTokenizer/MessageTokenizer.jsx';
import PersonsManager from './PersonsManager/PersonsManager.jsx';

export default class App extends Component {
  state = {
    components: [
      {name: 'Toggle Persons Manager', show: false},
      {name: 'Message Tokenizer', show: false}
    ]
  }

  handleToggleComponent = (index) => {
    const currComponent = {...this.state.components[index]};
    currComponent.show = !currComponent.show;
    const newComponents = [...this.state.components];
    newComponents[index] = currComponent;
    this.setState({
      components: newComponents
    });
  }

  render() {
    return (
      <div className="App">
        <h1>REACT BASICS</h1>
        {this.state.components.map((c, index) => {
          let componentToShow;
          if(c.show){
            switch(c.name){
              case 'Toggle Persons Manager':
                componentToShow = <PersonsManager />;
                break;
              case 'Message Tokenizer':
                componentToShow = <MessageTokenizer />;
                break;
              default:
                componentToShow = null;
                break;
            }
          }

          return (
            <div className="ComponentCard" key={index}>              
              <button 
                onClick={() => this.handleToggleComponent(index)}
                className="ComponentToggler">
                  {c.name}
              </button>
              {componentToShow}
            </div>
          );
        })}
      </div>
    )
  }
}