import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";



const Shop = (props) =>{


    return(
        <div className="shopPage">
            <div className="homeBtnContainer">            
                <Link to="/"><button id="homeBtn">Home</button></Link>
            </div>
            <div className="inventoryContainer">
            {props.inventory.map((item)=>{
                return(
                    <div className="itemCard" key={item.key}>
                        <h1>{item.name}</h1>
                        <img src={item.img} />
                        <h3>{"$" + (item.price).toFixed(2)}</h3>
                        <button className="addToCartBtn" onClick={props.handleClick} id={item.key}>Add To Cart</button>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Shop;