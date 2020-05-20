import React, {Component} from 'react';
import './App1.css';

const Questions =(props)=>{
  return(
    <div className="Questions">
      <p>{props.netQuest}</p>
      
    </div>
  )
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Frequently Asked Questions</h1>
        
          <Questions netQuest= "What is Netflix?"/>
          <Questions netQuest= "How much does Netflix Cost?"/>
          <Questions netQuest= "Where can I watch?"/>
          <Questions netQuest= "How do I cancel?"/>
          <Questions netQuest= "What can I watch on Netflix?"/>
          <Questions netQuest= "How does the free trial work?"/>
        < div className="Free Trial">
          <p>TRY 30 DAYS FREE</p>
        </div>
      </div>
    )
  }
}

export default App;