import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <section id="header">
        <Link to="/"><img src={require("./img/ella-logo-black.png")} class="logo" alt=""/></Link>

        <div>
            <ul id="navbar">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><a to="cart.html"><i className="far fa-shopping-bag"></i></a></li>
                <Link to="#" id="close"><i className="far fa-times"></i></Link>
            </ul>
        </div>
        <div id="mobile">
            <a to="cart.html"><i className="far fa-shopping-bag"></i></a>
            <i id="bar" className="fas fa-outdent"></i>
        </div>
    </section>
    </div>
  )
}

export default Header

