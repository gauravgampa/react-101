import React, { Component } from 'react'

import MessageTokenizer from './MessageTokenizer/MessageTokenizer.jsx';
import PersonsManager from './PersonsManager/PersonsManager.jsx';
import styles from './App.module.css';

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
      <div className={styles.App}>
        <h1>REACT BASICS</h1>
        {this.state.components.map((c, index) => {
          let componentToShow;
          const assignedClasses = [styles.App];
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
            assignedClasses.push(styles.Active);
          }

          return (
            <div className={styles.ComponentCard} key={index}>              
              <button 
                className={assignedClasses.join(' ')}
                onClick={() => this.handleToggleComponent(index)}
                >
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