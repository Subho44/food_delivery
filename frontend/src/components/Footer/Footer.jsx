import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Tomato is a subsidary company of Angashree Private Limited. Angashree Private Limited is simply dummy text of the printing and typesetting industry. Anagshree Private Limited has been the industry's standard dummy text ever since 1995, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                <div className="footer-social-icons">
                     <img src={assets.facebook_icon} alt="" />
                     <img src={assets.twitter_icon} alt="" />
                     <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>ANGASHREE PRIVATE LIMITED</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6565232653</li>
                    <li>contact@angahsreepvtltd.com</li>
                </ul>
            </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
