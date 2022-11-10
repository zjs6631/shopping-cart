import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.png"; 

const Header = (props) =>{ //header component that uses cart prop to display item count
    return(
    <div className="headerContainer">
        <h1 className="header">The Outpost</h1>
        <Link to='checkout' ><img src={cart} /></Link>
        <div>{props.numItems}</div>
    </div>
    )
}

export default Header;