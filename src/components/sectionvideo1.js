/** Section Video 1 COMPONENT **/

import * as React from "react" 
import Adsintheair from '../../static/videos/adsintheair.mp4'    

const SectionVideo1 = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <div className="section-video ratio ratio-16x9">
            <video playsinline controls preload muted>
              <source src={Adsintheair} type="video/mp4"/>
            </video>    
        </div>
    )
  }

export default SectionVideo1
 
