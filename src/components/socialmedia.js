import React from 'react'
import { IoLogoFacebook, IoLogoYoutube, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'gatsby' 
 
    const SocialMedia = ( ) => { 
 
        return ( 
            <>  
            <Link to="https://www.facebook.com/toadlabs">
                <IoLogoFacebook className="footer-icons mx-3" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCwSzfZtkIHZ3s5V3dUldaXg">
                <IoLogoYoutube className="footer-icons mx-3" />
            </Link>
            <Link to="https://www.instagram.com/toadlabs_technology_inc/">
                <IoLogoInstagram className="footer-icons mx-3" />
            </Link>
            <Link to="https://www.linkedin.com/in/toadlabs-technology-inc-376593226/">
                <IoLogoLinkedin className="footer-icons mx-3" />
            </Link> 
        </> 
    )
}
export default SocialMedia
