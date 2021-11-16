import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby' 

const ProductGroup = ({ productgroups }) => {
  if (!productgroups) return null
  if (!Array.isArray(productgroups)) return null

  return ( 

     
    <div className=" container-fluid">
      <div className="row" >
        {productgroups.map((productgroup) => {
          return (
            <div className="productgroup-item card bg-transparent text-dark col-sm-6 border-2  rounded-0 g-0" key={productgroup.id}>
              <div class="card-overlay"></div>
                <GatsbyImage class="card-img productgroup-image" alt="" image={productgroup.image.gatsbyImageData} />  
                  <div className="card-img-overlay d-flex text-center justify-content-center align-items-center"> 
                  <div className="card-text text-center p-5">
                  <h3>{productgroup.title}</h3>
                  <p>{productgroup.subtitle}</p>
                  <Link to={productgroup.buttonLink}>
                  <button className="btn btn-outline-light rounded-0 btn-lg" to="/contact">{productgroup.buttonText}</button> 
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

export default ProductGroup
