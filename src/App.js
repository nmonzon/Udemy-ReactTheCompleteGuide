import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
   const [personState, setPersonState] = useState(
      {  //{ person: [] is a js object 
        persons: [
          { name: 'Max', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stepanhie', age: 26}
        ]
      }
    );
  const [otherValueState] = useState("This is other value");

//console.log([statePerson, setPersonState]);

  const switchValuesHandler = (newName) => {
      personState ({
        persons: [
          { name: newName, age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stepanhie', age: 27}
        ],
        otherValueState: otherValueState
      })
  }

  const nameChangedHandler = (event) =>{
    setPersonState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stepanhie', age: 27}
      ]
    });
  }
  
    return(//understanding JSX
    <div className="App">
      <h1>React</h1>
      <p>This is really working!</p>
      <button onClick={() => switchValuesHandler("Maxii!")}>Change Values</button>
      <Person 
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchValuesHandler.bind(this, "Maxii!!!")}
        changed={nameChangedHandler}>My hobbiees: Racing 
      </Person>
        
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age}
      />
    </div>
    );
  
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Contenido de elementoReact H1'));
}

export default App;
