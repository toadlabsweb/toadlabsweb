/** HEROVideo COMPONENT **/

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import TLShark from '../../static/videos/toadlabs-shark.mp4'    

const HeroVideo = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <header>
           <div class="hero-overlay"></div>

            {/* <!-- The HTML5 video element that will create the background video on the header --> */}
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src={TLShark} type="video/mp4"/>
            </video>

          {/* <!-- The header content --> */}
                    <div class="container h-100">
                      <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                          {/* <h2 class="display-3">TOADLABS</h2>  */}
                          <div className="hero-text "> 
                            {subtitle && <h1 className="text animate__animated animate__backInDown  animate__delay-1s">{subtitle}</h1>}  
                            <Link to="/contact">
                              <button className="btn btn-outline-light border-1 btn-lg" >{buttonText}</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                </div>         
        </header>
    )
  }

export default HeroVideo