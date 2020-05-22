import React from 'react';
import './Questions.css';

const Questions =(props)=>{
    return(
      <div className="Questions">
        <div className="questleft">{props.question}</div>
        <div className="plus">+</div>
      </div>
    )
  }

  export default Questions;