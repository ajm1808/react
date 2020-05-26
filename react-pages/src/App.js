import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

class App extends Component {

  state ={
    basket: 0
  }

  addToBasket=()=>{
    this.setState({
      basket:this.state.basket +1
    })
  }
  render(){
  return (
    <React.Fragment>
      <Navbar basketNumbers={this.state.basket}/>
      <Home addtocart={this.addToBasket}/>
    </React.Fragment>
  )
}
}

export default App;
