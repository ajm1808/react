import React, {Component} from 'react';
import Carbox from './components/Carbox';
import './App.css';



class App extends Component {
    render(){
        return(
            <div className="App">
                <div className="leftDeals">
                        <h1>Latest brand new car deals</h1>
                </div>
                <div className="rightDeals">
                        <h1>View more deals -></h1>
                </div>
                <Carbox type="Fiat"/>
                



            </div>
        )
    }

}

export default App;