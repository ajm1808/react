import React, {Component} from 'react';
import './Homes.css';
import Review from './components/Review';
import imgHome1 from './image/home1.PNG';
import imgHome2 from './image/home2.PNG';
import imgHome3 from './image/home3.PNG';
import imgStars from './image/stars.PNG';
import cheryl from './image/cheryl.PNG';
import charlie from './image/charlie.PNG';
import john from './image/john.PNG';




class App extends Component {
    state = {
      ReviewBox: [
          {img: imgHome1,stars:imgStars,content:"Gary was such a great host during our time in Brighton. He made us feel at home and was helpful with any questions we had about directions or things to do. The room he has...",name:"Cheryl",location:"United States",selfie:cheryl,id:1},
          {img: imgHome2,stars:imgStars,content:"Very accommodating with my booking and welcoming to all of us.Thanks!",name:"Charlie",location:"United Kingdom",selfie:charlie,id:2},
          {img: imgHome3,stars:imgStars,content:"Wow...Alyson is truly an amazing person. 1st class accommodations and we got the difficult news...",name:"John Wayne",location:"Canada",selfie:john,id:3},
      ]
    }
    render (){
        const eachR=this.state.ReviewBox.map((ReviewBox)=>{
            return <Review key={ReviewBox.id} img={ReviewBox.img} stars={ReviewBox.stars} content={ReviewBox.content} name={ReviewBox.name} location={ReviewBox.location} selfie={ReviewBox.selfie}/>
        })
        return(
            <div className="App">
                {eachR}
            </div>
        )
    }
}

export default App;
