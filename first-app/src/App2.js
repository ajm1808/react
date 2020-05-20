import React, {Component} from 'react';
import './App.css';

const Age=(props)=>{
  return(
    <div>
      <h2>My age is {props.ageIs}</h2>
    </div>
  )
}

const Pet =(props)=>{
  return(
    <div>
      <h2>My pet is {props.petName}</h2>
    </div>
  )
}

// above is a class that takes info from Person (just the petnames)

const Person =(props) =>{
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <Age ageIs={props.age}/>
      <Pet petName={props.pet}/>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>If this here rocks to you, then react...</h2>
        <Person 
          name="Alex" 
          age={18} 
          pet="Coco"
        />
        <Person 
          name= "Ben" 
          age = {21} 
          pet = "Daisy"
        />
        <Person 
          name= "Charlie" 
          age ={25} 
          pet = "Molly"
        />
      </div>
    )
  }
}

export default App;
