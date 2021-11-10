/** HEROIMG COMPONENT **/

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'   

const HeroImg = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <div>
          <div  className="hero-overlay">  </div>  
          <div>
          {image && ( <GatsbyImage className="hero-image" alt={title} image={image} /> )}  
              <div className="hero-text "> 
                {subtitle && <h1 className="text animate__animated animate__backInDown  animate__delay-1s">{subtitle}</h1>}  
                <Link to="/contact">
                  <button className="btn btn-outline-light border-1 btn-lg" >{buttonText}</button>
                </Link>
              </div>
            </div>           
                      
        </div>
    )
  }

export default HeroImg