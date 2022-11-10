import React from "react";
import {Link} from "react-router-dom";



const Shop = (props) =>{ //shop comp that uses props to display the inventory as well as handleclick function tied to button


    return(
        <div className="shopPage">
            <div className="homeBtnContainer">            
                <Link to="/shopping-cart/"><button id="homeBtn">Home</button></Link>
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