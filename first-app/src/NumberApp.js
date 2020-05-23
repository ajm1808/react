import React,{Component} from 'react';
import './App.css';

class App extends Component {
    state ={
        numbers: [1,2,3,4],
        currentNumber:"",
        showingNumbers:true
    }
    recordNumberHandler = (event)=>{
        console.log(event.target.value)
        let num=parseInt(event.target.value)
        this.setState({
            currentNumber:num
        })
    }

    addNumberHandler = ()=>{
        this.setState({
            numbers:[...this.state.numbers,this.state.currentNumber],
            currentNumber:""
        })
    }
    showNumbersHandler=()=>{
        let show=this.state.showingNumbers;
        this.setState({showingNumbers:!show})
    }
    render (){
        let eachNumber=null;
        if(this.state.showingNumbers===true){
            eachNumber=this.state.numbers.map((number,index)=>{
            return <li key={index}>{number}</li>
        })
        }
        return (
            <div className="App">
            <h1>State - using methods</h1>
            <ul>{this.state.showingNumbers? eachNumber:null}</ul>
            <input type="number" onChange={this.recordNumberHandler} value={this.state.currentNumber}/>
            <button onClick={()=> this.addNumberHandler()}>Add Number</button>
            <button onClick={this.showNumbersHandler}>Show/hide</button>
            </div>
        )
    }
}

export default App;