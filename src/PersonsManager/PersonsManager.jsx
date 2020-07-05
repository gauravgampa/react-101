import React, { Component } from 'react';

import UserInput from '../UserInput/UserInput.jsx';
import UserOutput from '../UserOutput/UserOutput.jsx';
import styles from './PersonsManager.module.css';

export default class PersonsManager extends Component {
    state = {
        persons: [
          {id:'abc1', name: 'Rick'},
          {id:'abc2', name: 'Morty'},
          {id:'abc3', name: 'Justin'},
        ],
        showPersons: false
      };
    
    togglePerson = (index) => {
        const newPersons = [...this.state.persons];
        newPersons.splice(index, 1);
        this.setState({persons: newPersons});
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id===id);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const newPersons = [...this.state.persons];
        newPersons[personIndex] = person;    
        this.setState({persons: newPersons});
    }
          
    render() {
        return (
            <div>
                {this.state.persons.map((person, index) => {
                    return (
                        <div className={styles.Person} key={person.id}>
                            <UserInput 
                            name={person.name}
                            handleChange={(event) => this.nameChangeHandler(event, person.id)}/>
                            <UserOutput 
                            name={person.name}
                            handleClick={() => this.togglePerson(index)}/>
                        </div>                                                                
                    )
                })}
            </div>              
        )
    }
}
