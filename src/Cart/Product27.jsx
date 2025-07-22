import './cart.css';
import img1c from '../images/img1c.jpg';
import {Link} from 'react-router-dom';
import {useState} from 'react';
  


function Product27(){


    const[quantity, setQuantity] = useState(1);
    const sizes= [36,37,38,39,40,41];
    const name=['Nike SB Dunks '];

    const handleIncrease=()=>{
        setQuantity(quantity+1);
    }
    const handleDecrease=() =>{
        setQuantity(quantity-1);
    }
    const[selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }
    return(
        <div className="product-cart">
            <div className="product-image">
                <Link to='/'>
                <h4>Home/ Cart</h4></Link>
                <img src={img1c}></img>
            </div>
            <div className="product-details">
                <h2>{name}</h2>
                <h4>Kshs. 3500</h4>
                <h6>Tax included</h6>
                <h4>Size</h4>
                 <div className="sizes">
                    {sizes.map(size => (
                        <div
                            key={size}
                            className={`size ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeClick(size)}
                            
                        >
                            <h4>{size}</h4>
                        </div>
                    ))}
                </div>
                <h4>Quantity</h4>
                <div className="quantity">
                    <span className='material-icons-sharp'onClick={handleDecrease}>remove</span>
                    <h5>{quantity}</h5>
                    <span className='material-icons-sharp'onClick={handleIncrease}>add</span>
                </div>
                <div className="buttons">
                    <button id='cart-btn'>Add to Cart</button><br></br>
                    <a  href={`https://wa.me/254718671212?text=Hi,%20I'm%20interested%20in%20buying%20this%20${name}.%20I%20want%20Size%20${selectedSize}%20and%20Quantity%20${quantity}.%20Here%20is%20the%20image:%20https://yourdomain.com/images/img1.jpg`}
                        target="_blank"
                        rel="noopener noreferrer">
                    <button id='buy-btn'>Buy Now</button></a>
                </div>
            </div>
        </div>
    );
}
export default Product27;