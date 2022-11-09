import React, {useState} from "react";
import {Link} from "react-router-dom"


const Checkout = (props) => {
    

    return (
        <div className="checkoutContainer">
            <h1>Your Cart</h1>
            <div className="currentCart">
                {props.cart.map((item) => {
                    if(item.numInCart > 0){
                    return(
                    <div className="cartCard" key={item.key}>
                        <h3>{item.name}</h3>
                        <div className="cartItemBtns">
                        <button className="cartDecrement" id={item.key + "d"} onClick={props.handleDecrement}>-</button>
                        <h3>{item.numInCart}</h3>
                        <button className="cartIncrement" id={item.key + "i"} onClick={props.handleIncrement}>+</button>
                        </div>
                        <h3>{'$' + (item.numInCart * item.price).toFixed(2)}</h3>
                    </div>
                    )
                    }
                })}
            </div>
            <h1>{'Total price: $' + (props.total).toFixed(2)}</h1>
            <div className="checkoutBtns">
                <Link to='/'><button id="checkHome">Home</button></Link>
                <Link to='/shop'><button>Continue Shopping</button></Link>
                <button id="payBtn">Pay</button>
            </div>
        </div>
    )
}

export default Checkout;