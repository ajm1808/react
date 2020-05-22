import React,{Component} from 'react';
import './App.css';

class App extends Component {
    state ={
        numbers: [1,2,3,4],
        currentNumber:""
    }
    recordNumberHandler = (event)=>{
        console.log(event.target.value)
        this.setState({
            currentNumber:event.target.value
        })
    }

    addNumberHandler = ()=>{
        this.setState({
            numbers:[...this.state.numbers,this.state.currentNumber],
            currentNumber:""
        })
    }
    render (){
        const eachNumber=this.state.numbers.map((number,index)=>{
            return <li key={index}>{number}</li>
        })
        return (
            <div className="App">
            <h1>State - using methods</h1>
            <ul>{eachNumber}</ul>
            <input type="number" onChange={this.recordNumberHandler} value={this.state.currentNumber}/>
            <button onClick={()=> this.addNumberHandler()}>Add Number</button>
            </div>
        )
    }
}

export default App;