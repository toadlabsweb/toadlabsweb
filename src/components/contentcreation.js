/** Content Creation COMPONENT **/
import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'  

const ContentCreation = ({ contentcreation }) => {
  if (!contentcreation) return null
  if (!Array.isArray(contentcreation)) return null

  return ( 

     
    <div className=" container-fluid">
      <div className="row" >
        {contentcreation.map((contentcreationitem) => {
          return (
            <div className="solutions-item card bg-transparent text-dark col-sm-12 border-2 rounded-0 g-0" key={contentcreationitem.id}>
              <div class="card-overlay"></div>
                <GatsbyImage class="card-img solutions-image" alt="" image={contentcreationitem.image.gatsbyImageData} />  
                  <div className="card-img-overlay d-flex text-center justify-content-center align-items-center"> 
                  <div className="card-text p-5 ">
                  <h3 className="pb-5">{contentcreationitem.title}</h3>
                  <p className="pb-5">{contentcreationitem.subtitle}</p>
                  <Link to={contentcreationitem.buttonLink}>
                  <button className="btn btn-outline-light btn-lg rounded-0" to="/contact/">{contentcreationitem.buttonText}</button> 
                  </Link>
                  </div>
                </div>
              </div>        
            )
          })}
        </div>
    </div>
  )
}

export default ContentCreation
