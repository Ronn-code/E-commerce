import './airforce.css';
import {Link} from 'react-router-dom';
import black from './images/air-black.jpg';
import blue from './images/Air-blue.jpg';
import green from './images/air-green.jpg';
import cream from './images/air-cream.jpg';
import white from './images/air-white.jpg';
import grey from './images/air-grey.jpg';
import suede from './images/air-suede.jpg';
import greyb from './images/air-bg.jpg';
import whiteb from './images/air-bw.jpg';
import suedec from './images/suede-cream.jpg';
import tiffb from './images/tiff-black.jpg';
import tiffg from './images/tiff-green.jpg';


function Airforce(){
    return(
        <div className="airforce-container">
            <aside>
                <h2>Sneakers Collection</h2>
                <ul className='sneaker-list'>
                    <li>Airforce</li>
                    <li>Retro Dunks</li>
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
                    <Link to='/shop'>Shop /</Link>
                    <a href='#'className='active'>Airforce</a>
                </div>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={black}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 black</h4>
                            <Link to='/product2'>Kshs.2500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={suede}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 suede maroon</h4>
                            <Link to='/product12'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={white}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 white</h4>
                            <Link to='/product10'>Kshs.2500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={green}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 green</h4>
                            <Link to='/product5'>Kshs.3000</Link>
                        </div>
                    </li>
                </ul>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={tiffg}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce tiffany green</h4>
                            <Link to='/product1'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={suedec}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce suede cream</h4>
                            <Link to='/product6'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={grey}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 grey</h4>
                            <Link to='/product11'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={whiteb}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 black/white</h4>
                            <Link to='/product9'>Kshs.3000</Link>
                        </div>
                    </li>
                </ul>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={cream}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 cream</h4>
                            <Link to='/product4'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={greyb}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 grey/black</h4>
                            <Link to='/product8'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={tiffb}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce tiffany black</h4>
                            <Link to='/product7'>Kshs.3000</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={blue}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Airforce 1 blue</h4>
                            <Link to='/product3'>Kshs.3000</Link>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    );
}
export default Airforce;