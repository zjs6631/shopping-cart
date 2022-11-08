import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import Shop from './components/Shop';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>

      <Header />
      
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="shop" element={<Shop/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
