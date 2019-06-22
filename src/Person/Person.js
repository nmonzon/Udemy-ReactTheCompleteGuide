import React from 'react';

const person  = (props) => {
    //return <p>I'm a person and i am {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;