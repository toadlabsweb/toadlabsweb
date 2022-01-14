/** Section Video 2 COMPONENT **/

import * as React from "react" 
import TLvideo from '../../static/videos/tlvideo.mp4'    

const SectionVideo2 = ({ image, title, subtitle, buttonText }) => {
  
 
  return (
        <div className="section-video">
            <video playsinline controls preload muted>
              <source src="https://drive.google.com/file/d/1YdjwEoCA07vqqxM5nhDMiI8Yup80Z9cH/view?usp=sharing" type="video/mp4"/>
            </video> 
        </div>
    )
  }

export default SectionVideo2
 
