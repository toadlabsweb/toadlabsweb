import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image' 

const Hero = ({ image, title, content }) => (
  <div className="hero">
    {image && (
      <GatsbyImage  className="image" alt={title} image={image} />
    )}
    <div className="details">
      <h2 className="title text-white text-center py-5">{title}</h2>
      {content && <p className="content">{content}</p>}
    </div>
  </div>
)

export default Hero