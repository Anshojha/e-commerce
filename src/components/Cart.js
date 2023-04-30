import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
       <section id="header">
        <Link to="/"><img src={require("./assets/ella-logo-black.png")} className="logo" alt=""/></Link>
        <div>
            <ul id="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/shop">Shop</Link></li>                
                <li><Link to="/cart"></Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="#" className="active"><i className="far fa-shopping-bag"></i></Link></li>
                <Link id="close" to="#"><i className="far fa-times"></i></Link>
            </ul>
        </div>
        <div id="mobile">
            <a to="cart.html"><i className="far fa-shopping-bag"></i></a>
            <i id="bar" className="fas fa-outdent"></i>

        </div>
    </section>

    <section id="page-header" className="about-header">

        <h2>Cart</h2>
        <p>Limited Offer Grab Now!</p>

    </section>

    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><a to="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/bao-bao-GREEBEtyR9Y-unsplash.jpg" alt=""/></td>
                    <td>Summer T-Shirts</td>
                    <td>₹999</td>
                    <td><input type="number" value="1" name="" id=""/></td>
                    <td>₹999</td>
                </tr>
                <tr>
                    <td><a to="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/bao-bao-mlKE8dEMc_8-unsplash.jpg" alt=""/></td>
                    <td>Stylish T-Shirts</td>
                    <td>₹999</td>
                    <td><input type="number" value="1" name="" id=""/></td>
                    <td>₹999</td>
                </tr>
                <tr>
                    <td><a to="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/josue-escoto-crsQ7CNIovw-unsplash.jpg" alt=""/></td>
                    <td>Red T-Shirts</td>
                    <td>₹899</td>
                    <td><input type="number" value="1" name="" id=""/></td>
                    <td>₹899</td>
                </tr>
            </tbody>
        </table>
    </section>
    </div>
  )
}

export default Cart
