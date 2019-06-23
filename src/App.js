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
  const [showPersons, setShowPersons] = useState({
    showPersonsState: false
  });

//console.log([statePerson, setPersonState]);

  const switchValuesHandler = (newName) => {
      setPersonState ({
        persons: [
          { name: newName, age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stepanhie', age: 27}
        ],
        otherValueState: otherValueState
      })
  }

  const toogleHandlerPerson = () => {
    const currentShownPersons = showPersons.showPersonsState;
    setShowPersons(
      {showPersonsState: !currentShownPersons}
    );
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

  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer'
  }
  
    return(//understanding JSX
    <div className="App">
      <h1>React</h1>
      <p>This is really working!</p>
      <button style={style} onClick={toogleHandlerPerson}>Toogle persons</button>
      { 
        showPersons.showPersonsState === true ? 
          <div>
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
          </div> : null
      }
    </div>
    );
  
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Contenido de elementoReact H1'));
}

export default App;
