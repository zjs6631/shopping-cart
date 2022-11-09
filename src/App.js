import React, {useState, useEffect, PureComponent} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import Shop from './components/Shop';
import './App.css';
import './styles/Checkout.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axeImg from "./images/axe.jpeg";
import bearsprayImg from "./images/bearspray.jpg";
import bugsprayImg from "./images/bugspray.jpg";
import cordImg from "./images/cord.jpg";
import firestarterImg from "./images/firestarter.jpg";
import lanternImg from "./images/lantern.jpeg";
import tentImg from "./images/tent.jpg";
import uniqid from "uniqid";
import Checkout from './components/Checkout';

function App() {

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


  //set a total to track the total cost of users purchase
  const [puchaseTotal, setPurchaseTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);


  const handleClick = (e) =>{
      let copyCart = cart;
      let copyTotal = puchaseTotal;
      let copyNumItems = numItems;
      inventory.map((item)=>{
          if(item.key == e.currentTarget.id && cart.indexOf(item) == -1){
              item.numInCart+=1;
              copyCart.push(item);
              copyTotal+=item.price;
              copyNumItems+=1;
          } else if (item.key == e.currentTarget.id && cart.indexOf(item) != -1){
            item.numInCart+=1;
            copyTotal+=item.price;
            copyNumItems+=1;
          }
      });
      setCart(copyCart);
      setPurchaseTotal(copyTotal);
      setNumItems(copyNumItems);
      
  }

  const handleIncrement = (e) =>{
    let copyCart = cart;
    let copyTotal = puchaseTotal; //change this spelling later 
    let copyNumItems = numItems;
    let key = e.currentTarget.id;
    key = key.substring(0, key.length-1);
    
    cart.map((item)=>{
      if(item.key == key){
        item.numInCart+=1;
        copyTotal+=item.price;
        copyNumItems+=1;
      }
    })
    setCart(copyCart);
    setPurchaseTotal(copyTotal);
    setNumItems(copyNumItems);
    
  }

  const handleDecrement = (e) =>{
    let copyCart = cart;
    let copyTotal = puchaseTotal; //change this spelling later 
    let copyNumItems = numItems;
    let key = e.currentTarget.id;
    key = key.substring(0, key.length-1);
    cart.map((item)=>{
      if(item.key == key && item.numInCart > 0){
        item.numInCart-=1;
        copyTotal-=item.price;
        copyNumItems-=1;
      }
    })
    setCart(copyCart);
    setPurchaseTotal(copyTotal);
    setNumItems(copyNumItems);
    
  }

  useEffect(()=>{

  },[cart])

  return (
    <div className='App'>

      <Header numItems={numItems}/>
      
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="/shop" element={<Shop handleClick={handleClick} cart={cart} inventory={inventory}/>}/>
          <Route path='checkout' element={<Checkout cart={cart} total={puchaseTotal} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
