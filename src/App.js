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

  const deletePersonHandler = (personIndex) =>{
    const persons = personState.persons;
    persons.splice(personIndex,1);
    setPersonState({persons: persons});
  }

  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer'
  }
  
  let persons = null;

  if (showPersons.showPersonsState) {
    
    persons = (
              <div>
                {personState.persons.map((person, index)=> {
                  return <Person click={() => deletePersonHandler(index)} name={person.name} age={person.age}/>
                })}  
              </div>
    );
  }

    return(//understanding JSX
    <div className="App">
      <h1>React</h1>
      <p>This is really working!</p>
      <button style={style} onClick={toogleHandlerPerson}>Toogle persons</button>
      {persons}    
    </div>
    );
  
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Contenido de elementoReact H1'));
}

export default App;
