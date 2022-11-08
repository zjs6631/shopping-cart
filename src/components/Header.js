import React, {useState} from "react";
import cart from "../images/cart.png";
const Header = () =>{
    return(
    <div className="headerContainer">
        <h1 className="header">The Outpost</h1>
        <img src={cart} />
    </div>
    )
}

export default Header;