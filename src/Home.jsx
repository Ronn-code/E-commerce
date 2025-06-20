import {Link} from 'react-router-dom';
import { useState } from 'react';
import j3 from'./images/j3.jpg';
import campusb from './images/campusbrown.jpg';
import j1 from './images/j1.jpg';
import j4 from './images/j4R.jpg';
import nkdunks from './images/Nkdunks.jpg';
import speedcat from './images/speedcat.jpg';


function Home(){

    const [showNavbar, setShowNavbar] = useState(false);
    return(
        <div className="container">
            <div className="hero">
                <div className="top">
                    <div className="name">
                        <h2><span className="material-icons-sharp">fitbit</span>ModaWalk</h2>
                    </div>
                    <div className={`navbar ${showNavbar ? 'show' : ''}`}>
                        <a href="#">Home</a>
                        <Link to='/shop'>Shop</Link>
                        <a href="/airforce ">Collection</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="icons">
                        <span className="material-icons-sharp"
                              id="menu-icon"
                              onClick={() => setShowNavbar(!showNavbar)}>menu</span>
                        <span className="material-icons-sharp">shopping_cart</span>
                        <span className="material-icons-sharp">person</span>
                    </div>
                </div>
                <div className="hero-body">
                    <h1>Walk with confidence, Stride in Style</h1>
                    <p>Step into the latest trends with our curated collection of stylish and comfortable shoes</p>
                    <Link to='/shop'>
                    <button id="collection-btn">Collection</button></Link>
                    <div className="insights">
                        <div className="insights-details">
                            <span className='material-icons-sharp'>lock</span>
                            <h3>SECURE PAYMENTS</h3>
                        </div>
                        <div className="insights-details">
                            <span className='material-icons-sharp'>local_shipping</span>
                            <h3>DELIVERY COUNTRY-WIDE</h3>
                        </div>
                        <div className="insights-details">
                            <span className='material-icons-sharp'>build</span>
                            <h3>24/7 SUPPORT</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-body">
                <h2>New Arrivals</h2>
                <ul className='arrivals-list'>
                    <li className='arrival-items'>
                        <div className="arrival-item-image">
                            <img src={j4}></img>
                        </div>
                        <div className='arrival-item-content'>
                            <h4>Jordan 4 Seaform</h4>
                            <a href='/product21'>Kshs.3500</a>
                        </div>
                    </li>
                    <li className='arrival-items'>
                        <div className="arrival-item-image">
                            <img src={campusb}></img>
                        </div>
                        <div className='arrival-item-content'>
                            <h4>Adida Campus brown</h4>
                            <a href='/product26'>Kshs.3500</a>
                        </div>
                    </li>
                    <li className='arrival-items'>
                        <div className="arrival-item-image">
                            <img src={speedcat}></img>
                        </div>
                        <div className='arrival-item-content'>
                            <h4>Adidas Puma speedcat</h4>
                            <a href='/product22'>Kshs.3000</a>
                        </div>
                    </li>
                    <li className='arrival-items'>
                        <div className="arrival-item-image">
                            <img src={j3}></img>
                        </div>
                        <div className='arrival-item-content'>
                            <h4>Jordan 3 balvin sunset</h4>
                            <a href='/product23'>Kshs.3200</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="home-body2">
                <h2>Featured products</h2>
                <ul className='featured-list'>
                    <li className='featured-items'>
                        <div className="featured-items-image">
                            <img src={campusb}></img>
                        </div>
                        <div className="featured-items-content">
                            <h4>Adidas Campus brown</h4>
                            <a href='/product26'>Kshs.3500</a>
                        </div>
                    </li>
                     <li className='featured-items'>
                        <div className="featured-items-image">
                            <img src={j1}></img>
                        </div>
                        <div className="featured-items-content">
                            <h4>Jordan 1 highcuts</h4>
                            <a href='/product24'>Kshs.3500</a>
                        </div>
                    </li>
                     <li className='featured-items'>
                        <div className="featured-items-image">
                            <img src={nkdunks}></img>
                        </div>
                        <div className="featured-items-content">
                            <h4>Nike SB Dunks</h4>
                            <a href='/product25'>Kshs.3500</a>
                        </div>
                    </li>
                    <div className='link-view'>
                        <a href='/airforce'>View All</a>
                    </div>
                </ul>
            </div>
            <div className="foot">
                <div className="links">
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <nav className='nav-links'>
                            <a href='/'>Home</a>
                            <a href='/shop'>Collection</a>
                            <a href='#'>Contact</a>
                            <a href='#'>Support</a>
                            <a href='#'>Private policy</a>
                        </nav>
                    </div>
                    <div className="contacts">
                        <h2>Contact Us</h2>
                        <h4>Calls, Text, Whatsapp,</h4>
                        <h5>+254 718671212</h5>
                        <a href='mailto: hellennaomi001@gmail.com'>Email Me</a>
                    </div>
                </div>
                <h6>
                    &copy;  Copyright 2025 | <strong>ModaWalk</strong> | developed by Ronn codes.
                </h6>
            </div>
        </div>
    );
}
export default Home;