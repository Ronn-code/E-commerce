import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {

const [first, setFirst] = useState('');
const [last, setLast] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');


const Navigate = useNavigate('');
const form = useRef(); 


 const isValidEmail = (email) => {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
 const isValidPhoneNumber = (phone) => {
       return /^\+?\d{10,15}$/.test(phone);
   };

const handleSend = (e) =>{
    e.preventDefault();
    if(!isValidEmail(email)) {
        alert(`Enter Valid Email`);
        return;
    }
    if(!first){
        alert(`Enter Your First Name`); 
        return;
    }
    if(!last){
        alert(`Enter Your Last Name`);
        return;
    }
    if(!isValidPhoneNumber(phone)){
        alert(`Enter Valid Phone Number`);
        return;
    }
    if(!message){
        alert(`Please Enter Your Message`)
        return;
    }
    emailjs.sendForm('service_tui1g0k', 'template_jmed0xn', form.current, 'email_PN43ZUuDcOlNp8LCKFisZhHN')
      .then(() => {
        alert('Message sent successfully!');
        Navigate('/');
      }, (error) => {
        alert('Failed to send message. Try again.');
        console.error;
      });

};



  return (
    <div className='contact-container'>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={handleSend} className="contact-info">
        <div className="message-box">
            <h4>Send us a message</h4>
            <p>Do you have a question? A complain? or need any help
                to choose the right product <br></br>from ModaWalk, feel free to 
                contact us.
            </p>
            <div className="fields">
                <div className="name-field">
                    <div className="first">
                        <label htmlFor='fname'>First Name</label>
                        <input type='text'
                               id='fname'
                               name="first_name"  
                               value={first} 
                               onChange={(e) => setFirst(e.target.value)}
                               placeholder='Enter your First name'></input>
                    </div>
                    <div className="last">
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text'
                               id='lname'
                               name="last_name"  
                               value={last} 
                               onChange={(e) => setLast(e.target.value)}
                               placeholder='Enter your Last name'></input>
                    </div>
                </div>
                <div className="email-field">
                    <div className="email">
                        <label htmlFor='email'>Email</label>
                        <input type='text' 
                               id='email'
                               name="email"  
                               value={email} 
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder='Enter your Email'></input>
                    </div>
                    <div className="phone">
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='text' 
                               id='phone' 
                               name="phone"  
                               value={phone}
                               onChange={(e) => setPhone(e.target.value)}
                               placeholder='Enter your Phone number'></input>
                    </div>
                </div>
                <div className="area">
                    <textarea  name="message"
                               value={message} 
                               onChange={(e) => setMessage(e.target.value)} 
                               placeholder='Enter Your message here'></textarea>
                </div>
                <button type='submit' id='send'>Send Message</button>
            </div>
        </div>
        <div className="contact-box">
            <h4>Hi! We are always here to help you.</h4>
            <div className="calls">
                <div className="icon">
                    <span className='material-icons-sharp'>call</span>
                    <h5>Calls</h5>
                </div>
                <h6>+254 718671212</h6>
            </div>
             <div className="sms">
                <div className="icon">
                    <span className='material-icons-sharp'>message</span>
                    <h5>Whatsapp/Sms</h5>
                </div>
                <h6>+254 718671212</h6>
            </div>
            <div className="emails">
                <div className="icon">
                    <span className='material-icons-sharp'>email</span>
                    <h5>Email</h5>
                </div>
                <h6>modawalkstore@gmail.com</h6>
            </div>
            <h4>Connect with us</h4>
            <div className="connect">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-tiktok"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>
      </form>
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
  )
}

export default Contact
