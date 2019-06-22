import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state =
      {  //{ person: [] is a js object 
        persons: [
          { name: 'Max', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stepanhie', age: 26}
        ]
      };
  
  //[otherValueState] = useState("This is other value");

//console.log([statePerson, setPersonState]);

  switchValuesHandler = (newName) => {
      this.state ({
        persons: [
          { name: newName, age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stepanhie', age: 27}
        ],
        otherValueState: this.otherValueState
      })
  }

  nameChangedHandler = (event) =>{
    this.setState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stepanhie', age: 27}
      ]
    })
  }
  
  render(){
    return(//understanding JSX
    <div className="App">
      <h1>React</h1>
      <p>This is really working!</p>
      <button onClick={() => this.switchValuesHandler("Maxii!")}>Change Values</button>
      <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchValuesHandler.bind(this, "Maxii!!!")}
        changed={this.nameChangedHandler}>My hobbiees: Racing 
      </Person>
        
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
      />
    </div>
    );
  }
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Contenido de elementoReact H1'));
}

export default App;
