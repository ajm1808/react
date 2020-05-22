import React from 'react';
import Pet from './Pet';
import './Person.css';

const Person =(props) =>{
    return (
      <div>
        <h1>My name is {props.name}</h1>
        <Pet petName={props.pet}/>
      </div>
    );
  }

  export default Person;