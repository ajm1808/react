import React, {Component} from 'react';
import './Review.css';
import imgHome1 from './image/home1.PNG';
import imgHome2 from './image/home2.PNG';
import imgHome3 from './image/home3.PNG';
import imgStars from './image/stars.PNG';
import cheryl from './image/cheryl.PNG';
import charlie from './image/charlie.PNG';
import john from './image/john.PNG';


const Review = (props)=>{
    return(
        <div className="reviewBox">
            <img className="images" src={props.img} alt=""/>
            <img className="stars" src={props.stars} alt=""/>
            <div className="content">{props.content}</div>
            <img className="selfie" src={props.selfie} alt=""/>
            <div className="name">{props.name}</div>
            <div className="location">{props.location}</div>
        </div>

    )
}

class App extends Component {
    render(){
        return(
            <div className="App">
                <Review 
                    img={imgHome1}
                    stars={imgStars}
                    content="Gary was such a great host during our time in Brighton. He made us feel at home and was helpful with any questions we had about directions or things to do. The room he has..."
                    name="Cheryl"
                    location="United States"
                    selfie={cheryl}
                />
                <Review 
                    img={imgHome2}
                    stars={imgStars}
                    content="Very accommodating with my booking and welcoming to all of us.Thanks!"
                    name="Charlie"
                    location="United Kingdom"
                    selfie={charlie}
                />
                <Review 
                    img={imgHome3}
                    stars={imgStars}
                    content="Wow...Alyson is truly an amazing person. 1st class accommodations and we got the difficult news..."
                    name="John Wayne"
                    location="Canada"
                    selfie={john}
                />

            </div>
        )
    }

}

export default App;