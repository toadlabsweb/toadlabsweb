/** Section Video 2 COMPONENT **/

import * as React from "react" 
import TLvideo from '../../static/videos/all3techs.mp4'    

const SectionVideo2 = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <div className="section-video ratio ratio-16x9">
            <video playsinline controls preload muted>
              <source src={TLvideo} type="video/mp4"/>
            </video> 
        </div>
    )
  }

export default SectionVideo2
 
