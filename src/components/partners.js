import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image' 

const Partners = ({ partners }) => {
  if (!partners) return null
  if (!Array.isArray(partners)) return null

  return ( 

    <div className="col-md-6 offset-md-3 col-8 offset-2">
      <h2 className="text-center">OUR PARTNERS</h2>
      <div className="row" > 
        {partners.map((partner) => {
          return (
            <div className="card bg-transparent col-md-4 col-sm-6 border-0 rounded-0 g-5 p-4" key={partners.id}>
                <GatsbyImage class="card-img partner-img" alt="" image={partner.logo.gatsbyImageData} />       
            </div>        
            )
          })}
        </div>
      </div>   
  )
}

export default Partners
