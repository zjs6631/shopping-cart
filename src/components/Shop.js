import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axeImg from "../images/axe.jpeg";
import bearsprayImg from "../images/bearspray.jpg";
import bugsprayImg from "../images/bugspray.jpg";
import cordImg from "../images/cord.jpg";
import firestarterImg from "../images/firestarter.jpg";
import lanternImg from "../images/lantern.jpeg";
import tentImg from "../images/tent.jpg";
import uniqid from "uniqid";


const Shop = () =>{

    
    
    const [cart, setCart] = useState([]); //create cart to hold items to buy

    //create factory function to create objects for each item in shop
    const itemFactory = (key, name, img, price, numInCart) =>{
        return {key, name, img, price, numInCart};
    }

    //create objects to represent each item and their data
    const axe = itemFactory(uniqid(), "Axe", axeImg, 20.99, 0);
    const bearspray = itemFactory(uniqid(), "Bear Spray", bearsprayImg, 15.85, 0);
    const bugspray = itemFactory(uniqid(), "Bug Spray", bugsprayImg, 5.99, 0);
    const cord = itemFactory(uniqid(), "Utility Cord", cordImg, 5.00, 0);
    const firestarter = itemFactory(uniqid(), "Fire Starter", firestarterImg, 10.50, 0);
    const lantern = itemFactory(uniqid(), "Oil Lantern", lanternImg, 13.99, 0);
    const tent = itemFactory(uniqid(), "Tent", tentImg, 55.00, 0);

    //inventory state to render the items information on screen
    const [inventory, setInventory] = useState([axe, bearspray, bugspray, cord,
    firestarter, lantern, tent]);


    const handleClick = (e) =>{
        let copyCart = cart;
        inventory.map((item)=>{
            if(item.key == e.currentTarget.id){
                item.numInCart+=1;
                copyCart.push(item);
                
            }
        });
        setCart(copyCart);
        console.log(cart);
    }

    
    



    return(
        <div className="shopPage">
            <div className="homeBtnContainer">            
                <Link to="/"><button id="homeBtn">Home</button></Link>
                <h1>{cart.length}</h1>
            </div>
            <div className="inventoryContainer">
            {inventory.map((item)=>{
                return(
                    <div className="itemCard" key={item.key}>
                        <h1>{item.name}</h1>
                        <img src={item.img} />
                        <h3>{"$" + (item.price).toFixed(2)}</h3>
                        <button className="addToCartBtn" onClick={handleClick} id={item.key}>Add To Cart</button>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Shop;