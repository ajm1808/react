import React from 'react';
import './Pet.css';

const Pet =(props)=>{
    return(
      <div>
        <h2>My pet is {props.petName}</h2>
      </div>
    )
  }

  export default Pet;