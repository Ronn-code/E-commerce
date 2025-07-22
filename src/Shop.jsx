import './shop.css';
import {Link} from 'react-router-dom';
import puma from'./images/puma.jpg';
import cactus from './images/cactus.jpg';
import campus from './images/campus.jpg';
import airmax from './images/airmax90.jpg';
import vodoo from './images/vodoo.jpg';
import bape from './images/bape.jpg';
import dunks from './images/dunks.jpg';
import vans from './images/vans.jpg';


function Shop(){
    return(
        <div className="shop-container">
            <aside>
                <h2>Sneakers Collection</h2>
                <ul className='sneaker-list'>
                    <Link to="/airforce">
                    <li>Airforce</li></Link>
                    <Link to="/retro">
                    <li>Retro Dunks</li></Link>
                    <li>Jordans</li>
                    <li>Airmax</li>
                    <li>Converse/Vans</li>
                    <li>Puma</li>
                    <li>Adidas</li>
                    <li>Bape</li>
                </ul>
            </aside>
            <main>
                <div className="navbarr">
                    <Link to='/'>Home /</Link>
                    <a href='#'className='active'>collection</a>
                </div>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={vodoo}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Nike Air Vodoo</h4>
                            <Link to='/product17'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={bape}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Airforce Bapestar</h4>
                            <Link to='/product19'>Kshs.2500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={puma}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Adidas Puma black</h4>
                            <Link to='/product15'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={campus}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Adidas Campus green</h4>
                            <Link to='/product13'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
                 <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={cactus}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Cactus Jordan 4</h4>
                            <Link to='/product18'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={dunks}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Nike Sb Dunks</h4>
                            <Link to='/product14'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={vans}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Vans Rubbers</h4>
                            <Link to='/product16'>Kshs.2500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={airmax}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Nike Airmax 90</h4>
                            <Link to='/product20'>Kshs.3000</Link>
                        </div>
                    </li>
                </ul>
                 <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={vodoo}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Adidas Vodoo</h4>
                            <Link to='/product17'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={bape}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Airforce Bapestar</h4>
                            <Link to='/product19'>Kshs.2500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={puma}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Adidas Puma black</h4>
                            <Link to='/product15'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={campus}></img>
                        </div>
                        <div className='list-items-content'>
                            <h4>Adidas Campus green</h4>
                            <Link to='/product13'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    );
}
export default Shop;