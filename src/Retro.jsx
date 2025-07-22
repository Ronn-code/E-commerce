import './airforce.css';
import {Link} from 'react-router-dom';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from './images/img13.jpg';
import img14 from './images/img14.jpg';
import img15 from './images/img15.jpg';
import img16 from './images/img16.jpg';


function Retro(){
    return(
        <div className="retro-container">
            <aside>
                <h2>Sneakers Collection</h2>
                <ul className='sneaker-list'>
                    <Link to="/airforce">
                    <li>Airforce</li></Link>
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
                    <a href='#'className='active'>Retro Dunks</a>
                </div>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img1}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product27'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img2}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product28'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img3}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product29'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img4}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product30'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img5}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product31'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img6}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product32'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img7}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product33'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img8}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product34'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img9}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product35'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img10}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product36'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img11}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product37'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img12}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product38'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
                <ul className='product-list'>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img13}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product39'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img14}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product40'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img15}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product41'>Kshs.3500</Link>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div className="list-items-image">
                            <img src={img16}></img>
                        </div>
                        <div className="list-items-content">
                            <h4>Nike SB Dunks</h4>
                            <Link to='/product42'>Kshs.3500</Link>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    );
}
export default Retro;