import React from "react";
import {Link} from "react-router-dom";


export const Home = () =>{

    return(
        <div className="homePage">
            <div className="homeDescription">
                <h1>Welcome to The Outpost!</h1>
                <p>This is your one stop shop for all of your camping needs!</p>
            </div>
            <div className="shopNow">
                <Link to="shop"><button id="shopBtn">Shop Now</button></Link>
            </div>
        </div>
    )
}