import React from 'react';
import './Navbar.css';

const Navbar =(props)=>{
    return(
        <nav>
            <h1>My Shop</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li> Cart: <span>{props.basketNumbers}</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;