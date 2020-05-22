//inputs
import React, {Component} from 'react';
import './App.css';
import Person from './components/Person';


//class or function
class App extends Component{
  //state
  state={
    persons:[
      {id:1,name:"Alex",age:18,pet:"Coco"},
      {id:2,name:"Jeff",age:18,pet:"Daisy"},
      {id:3, name:"Jim",age:18,pet:"Don"}
  ]
  }
  //functions or methods - render is what is being created
  render(){

    //variables for returning part of the code
    const eachPerson=this.state.persons.map((person)=>{
      
      return <Person key ={person.id} name={person.name} age={person.age} pet ={person.pet} />
    })

    return(
      <div className="App">
        <h1>My react project</h1>
        {eachPerson}
      </div>
  );
  }
}

export default App;

 // render(){
  //   return(
  //     <div className="App">
  //       <h2>If this here rocks to you, then react...</h2>
  //       <Person 
  //         name="Alex" 
  //         pet="Coco"
  //       />
  //       <Person 
  //         name= "Ben" 
  //         pet = "Daisy"
  //       />
  //       <Person 
  //         name= "Charlie"
  //         pet = "Molly"
  //       />
  //     </div>
  //   )
  // }

