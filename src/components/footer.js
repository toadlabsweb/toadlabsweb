import React from 'react'
import { IoLogoFacebook, IoLogoYoutube, IoLogoInstagram } from "react-icons/io5";

const Footer = () => (
  <footer> 
    <div className="container"> 

    <div className="row">

    <div className="col-sm-6  footer-text">
      <h4>Toadlabs Technologies Inc.</h4>
      <p>1st floor, Bimola Residency, Gandhibasti, Guwahati, Assam</p> 
      <p>+91 985 993 4443</p>
      <p>toadlabs@gmail.com</p>
      <p>www.toadlabs.biz</p>
    </div>

    <div className="col-sm-6 text-center footer-icons">
    <h4>Follow us on</h4>
      <IoLogoFacebook className="footer-icons mx-3" />
      <IoLogoYoutube className="footer-icons mx-3" />
      <IoLogoInstagram className="footer-icons mx-3" />
    </div>
      
    </div>
      
    </div>

 
  </footer>
)

export default Footer
