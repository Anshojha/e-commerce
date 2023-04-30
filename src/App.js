
import Display from './components/New.js';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Display/>}/>
      <Route exact path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
      
     {/* <Navbar/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;
