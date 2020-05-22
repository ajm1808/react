import React from 'react';
import './Carbox.css';

const Carbox=(props)=>{
    return(
        <div className="carBox">
            <img className="carImg" src={props.img} alt=""/>
            <div className="rrp" >{props.rrp}</div>
            <div className="rrPrice">{props.rrPrice}</div>
            <div className="saleP">{props.saleP}</div>
            <div className="save">{props.save}</div>
            <div className="saveP">{props.saveP}</div>
            <div className="carType">{props.carType}</div>
            <div className="description">{props.description}</div>
            <div className="brandnew">BRAND NEW - IN STOCK</div>
        </div>
    )
}

export default Carbox;