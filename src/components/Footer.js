import React from 'react'

const Footer = () => {
  return (
      
    <footer class="section-p1">
        <div class="col">
            <img class="logo" src="assets/ella-logo-black.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>SRM RMP Ramapuram Main Rd Chennai 600012</p>
            <p><strong>Phone:</strong> +044 4853 6157 / +91 9328675438</p>
            
            <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            
            <a href="#">Track My Order</a>
            
        </div>
        <div class="col install">
           
            <p>Secured Payment Gateways </p>
            <img src={require("./img/pay/pay.png")} alt=""/>
        </div>

        <div class="copyright">
            <p>© 2023 CodeChef SRM</p>
        </div>
    </footer>

  )
}

export default Footer
