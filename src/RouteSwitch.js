import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import render from "react-dom";

const RouteSwitch = () =>{

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />}>
                <Route index element = {<Home />} />
                <Route path="shop" element = {<Shop/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RouteSwitch;