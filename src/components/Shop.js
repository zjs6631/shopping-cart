import React from "react";
import {Link} from "react-router-dom";

const Shop = () =>{
    
    return(
        <div className="shopPage">
            <h1>you are now on the shop</h1>
            <Link to="/"><button id="homeBtn">Home</button></Link>
        </div>
    )
}

export default Shop;