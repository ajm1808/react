import React from 'react';
import './Reviews.css';


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

export default Review;