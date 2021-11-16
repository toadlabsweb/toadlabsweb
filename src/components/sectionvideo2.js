/** HEROVideo COMPONENT **/

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import TLvideo from '../../static/videos/tlvideo.mp4'    

const SectionVideo2 = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <header className="section-video">
           {/* <div class="hero-overlay"></div> */}

            {/* <!-- The HTML5 video element that will create the background video on the header --> */}
            <video controls preload muted>
              <source src={TLvideo} type="video/mp4"/>
            </video>

          {/* <!-- The header content --> */}
                    {/* <div class="container h-100">
                      <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white"> */}
                          {/* <h2 class="display-3">TOADLABS</h2>  */}
                        {/* </div>
                      </div> 
                    </div>   */}      
        </header>
    )
  }

export default SectionVideo2
 