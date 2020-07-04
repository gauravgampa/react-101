import './App.css';

import React, { Component } from 'react'

import Assignment2 from './Assignment2/Assignment2.jsx';
import PersonsManager from './PersonsManager/PersonsManager.jsx';

export default class App extends Component {
  state = {
    components: [
      {name: 'Toggle Persons Manager', show: false},
      {name: 'Toggle Assignment - 2', show: false}
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
              case 'Toggle Assignment - 2':
                componentToShow = <Assignment2 />;
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