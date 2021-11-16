import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image' 

const Partners = ({ partners }) => {
  if (!partners) return null
  if (!Array.isArray(partners)) return null

  return ( 

    <div className="col-sm-6 offset-sm-3">
      <h2 className="text-center">OUR PARTNERS</h2>
      <div className="row" > 
        {partners.map((partner) => {
          return (
            <div className=" card bg-transparent col-sm-4 border-0 rounded-0 g-2 p-5" key={partners.id}>
                <GatsbyImage class="card-img solutions-image" alt="" image={partner.logo.gatsbyImageData} />       
            </div>        
            )
          })}
        </div>
      </div>   
  )
}

export default Partners
