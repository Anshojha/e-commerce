
import Display from './components/New.js';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import Shop from './components/Shop.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Display/>  <Footer/></>}/>
      <Route exact path="/cart" element={<><Cart/> <Footer/></>}/>
      <Route exact path="/shop" element={<><Shop/> <Footer/></>}/>
      <Route exact path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
