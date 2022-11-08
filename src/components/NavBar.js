import React from "react";
import {Link} from "react-router-dom";


const NavBar = () =>{
    return(
    <div className="NavBar">
        <ul className="NavList">
            <Link to="/"><li className="homeNav">Home</li></Link>
            <Link to="shop"><li className="shopNav">Shop Now</li></Link>
        </ul>
    </div>
    )
}

export default NavBar;