import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
//RouteSwitch handles all of our routes
//"/*" is needed to be able to transition between the pages from the home page

const RouteSwitch = () =>{

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/shopping-cart/*" element={<App />}>
                <Route index element = {<Home />} />
                <Route path="shop" element = {<Shop/>}/>
                    <Route path="checkout" element = { <Checkout/>}/>
                    
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RouteSwitch;