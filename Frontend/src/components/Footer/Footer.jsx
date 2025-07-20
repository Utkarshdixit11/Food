import React from 'react'
import "./Footer.css";
import { assests  }  from '../../assets/assests';

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assests.logo} alt="" style={{width:"120px",height:"120px",borderRadius:"150px"}}></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio magnam, quod officia dolore ducimus rerum dolorum, sit natus amet nisi? Similique, soluta maiores laudantium nesciunt molestiae maxime! Debitis, placeat.</p>
                <div className='footer-social-icons'>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+918299887224</li>
                    <li>utkarshdixit925@gmail.com</li>
                </ul>
            </div>
            
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ ZingBite.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
