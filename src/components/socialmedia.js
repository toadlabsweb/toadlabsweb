/** Social Media COMPONENT **/
import React from 'react'
import { IoLogoFacebook, IoLogoYoutube, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'gatsby' 
 
    const SocialMedia = ( ) => { 
 
        return ( 
            <>  
            <Link data-bs-toggle="tooltip" title="Facebook" to="https://www.facebook.com/toadlabs" target="_blank">
                <IoLogoFacebook className="footer-icons mx-3" />
            </Link>
            <Link data-bs-toggle="tooltip" title="Youtube" to="https://www.youtube.com/channel/UCOpRzSwbHON9NGsmvr2yjoA" target="_blank">
                <IoLogoYoutube className="footer-icons mx-3" />
            </Link>
            <Link data-bs-toggle="tooltip" title="Instagram" to="https://www.instagram.com/toadlabs_technology_inc/" target="_blank">
                <IoLogoInstagram className="footer-icons mx-3" />
            </Link>
            <Link data-bs-toggle="tooltip" title="Linkedin" to="https://www.linkedin.com/in/toadlabs-technology-inc-376593226/" target="_blank">
                <IoLogoLinkedin className="footer-icons mx-3" />
            </Link> 
        </> 
    )
}
export default SocialMedia
