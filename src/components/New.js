import React from 'react'
import { Link } from 'react-router-dom'

const Display = () => {
  return (
    <>
<html lang="en">

<head>
   <title>Ecommerce CC</title>
    <link rel="stylesheet" to="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />

    <link rel="stylesheet" to="styles.css"/>
</head>

<body>

    <section id="header">
        <Link to="/"><img src={require("./img/ella-logo-black.png")} class="logo" alt=""/></Link>

        <div>
            <ul id="navbar">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
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

    <section id="hero">
        <h4>Summer Sale</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Limited Offer Grab up to 70% off! </p>
        <button>Shop Now</button>
    </section>

    
    <section id="product1" className="section-p1">
        <h2>Trendy Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src={require("./img/products/bao-bao-GREEBEtyR9Y-unsplash.jpg")} alt=""/>
                <div className="des">
                    <span>tommy</span>
                    <h5>Summer T-Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={require("./img/products/faith-yarn-Wr0TpKqf26s-unsplash (1).jpg")} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Black T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/ryan-hoffman-czLSitCJ3Dw-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>puma</span>
                    <h5>Winter T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/uji-kanggo-gumilang-sMn0sxR8v2E-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>h&m</span>
                    <h5>Cool T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/bao-bao-mlKE8dEMc_8-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Stylish T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/marlon-alves-A0mSSCEVh9A-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>tommy</span>
                    <h5>Pink T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹799</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/josue-escoto-crsQ7CNIovw-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>h&m</span>
                    <h5>Red T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹899</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/products/luis-santoyo-eyUOuA6hIMA-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>paris</span>
                    <h5>Short T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>
    </section>
    
    <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="img/New folder/amirr-zolfaqari-mLGTf7Wteyw-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Black T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹899</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/fadkhera-official-n_Si7Q7SdJk-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Blue T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹899</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/gelmis-bartulis-gzlfj8Fjdk0-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>h&m</span>
                    <h5>Black Jacket</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹2999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/jacinto-diego-Groi0xH25-o-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>tommy</span>
                    <h5>Green T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹899</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/marcel-strauss-LYEnS2xB9bQ-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>tommy</span>
                    <h5>Dark Blue T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹899</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/marcus-santos-s3w111NXnP4-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Red T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/pooria-shahriari-21TsyXG9Rgs-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Yellow T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹799</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src="img/New folder/wes-cain-MGi6K1Cvftk-unsplash.jpg" alt=""/>
                <div className="des">
                    <span>h&m</span>
                    <h5>Black Hoodie</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>₹2499</h4>
                </div>
                <a to="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>
    </section>

    <section id="sm-banner" className="section-p1">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcomming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className="white">Collection</button>
        </div>

    </section>

    
    <footer className="section-p1">
        <div className="col">
            <img className="logo" src="assets/ella-logo-black.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>SRM RMP Ramapuram Main Rd Chennai 600012</p>
            <p><strong>Phone:</strong> +044 4853 6157 / +91 9328675438</p>
            
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a to="#">About Us</a>
            
            <a to="#">Terms & Conditions</a>
            <a to="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a to="#">Sign In</a>
            <a to="#">View Cart</a>
            
            <a to="#">Track My Order</a>
            
        </div>
        <div className="col install">
           
            <p>Secured Payment Gateways </p>
            <img src="img/pay/pay.png" alt=""/>
        </div>

        <div className="copyright">
            <p>© 2023 CodeChef SRM</p>
        </div>
    </footer>

    


    <script src="script.js"></script>
</body>
</html>
</>

  )
}

export default Display
