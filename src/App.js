import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gaëtan', age: 31},
      {name: 'Patrick', age: 30},
      {name: 'Sandra', age: 32}
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  nameChangedHandler = event => {
    this.setState({
        persons: [
          {name: 'Gaëtan', age: 31},
          {name: event.target.value, age: 30},
          {name: 'Sandra', age: 32}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>
            My Hobby: Volley-Ball
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}>
            My Hobby: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>
            My Hobby: Dancing
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
