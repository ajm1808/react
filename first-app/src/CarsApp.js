import React, {Component} from 'react';
import Carbox from './components/Carbox';
import './App.css';
import fiatImg from './image/fiat.PNG';
import kiaImg from './image/kia.PNG';
import audiImg from './image/audi.PNG';
import suzukiImg from './image/suzuki.PNG';




class App extends Component {
    state={
        cars:[
            {
                img:fiatImg, 
                rrp:"RRP", 
                rrPrice:"£14,475", 
                saleP:"£11,790", 
                save:"save", 
                saveP:"£2955", 
                carType:"Fiat 500 1.0 MHEV Lounge (s/s) 3dr",
                description:"3 door Manual Petrol Hatchback",
                id:1
            },
            {
                img:kiaImg, 
                rrp:"RRP", 
                rrPrice:"£18,850", 
                saleP:"£17,342", 
                save:"save", 
                saveP:"£1508", 
                carType:"Kia Ceed 1.0 T-GDi ECO 2 (s/s) 5dr",
                description:"5 door Manual Petrol Hatchback",
                id:2
            },
            {
                img:audiImg, 
                rrp:"RRP", 
                rrPrice:"£88,055", 
                saleP:"£76,588", 
                save:"save", 
                saveP:"£11,467", 
                carType:"Audi Q8 3.0 TDI v6 50 Vorsprung Tiptronic quattro (s/s) 5dr",
                description:"3 door Manual Petrol Hatchback",
                id:3
            },
            {
                img:suzukiImg, 
                rrp:"RRP", 
                rrPrice:"£17,214", 
                saleP:"£15,214", 
                save:"save", 
                saveP:"£2000", 
                carType:"Suzuki Ignis 1.2 Dualjet SHVS SZ5 Allgrip (s/s) 5dr",
                description:"5 door Manual Hybrid - Petrol/Electric Hatchback",
                id:4
            }
        ]
    }

    render(){
        const eachCar = this.state.cars.map((cars)=>{
           return <Carbox key={cars.id} img={cars.img} rrp={cars.rrp} rrPrice={cars.rrPrice} saleP={cars.saleP} save={cars.save} saveP={cars.saveP} carType={cars.carType} desc={cars.description}/>
        })
        return(
            <div className="App">
                <div className="Left">
                    Latest brand new car deals
                </div>
                <div className="Right">
                    View more deals->
                </div>
                {eachCar}
            </div>
        )
         
    };

}

export default App;