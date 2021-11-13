import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image' 

const ProductItem = ({ products }) => {
  if (!products) return null
  if (!Array.isArray(products)) return null

  return (
    <div className="container-fluid">
 
      <div className="wwd-items"> 
        {products.map((product) => {
          return (
          <article className="product-item row" key={product.id}>     
              <div className="col-12 col-md-6 product-image p-0">
                <GatsbyImage className="img-fluid" alt="" image={product.featuredImage.gatsbyImageData} /> 
              </div>

              <div className="col-12 col-md-6 product-text p-0 d-flex justify-content-center align-items-center">
                <div className="m-5">
                  <h3> {product.title} </h3>
                  <h6> Rs. {product.price} </h6>
                  <p>{product.description}</p>
                  <p>{product.content}</p>
                  <p><div dangerouslySetInnerHTML={{ __html: product.specifications?.childMarkdownRemark?.html, }} /></p> 
                </div>  
              </div>
          </article>
          )
        })}
      </div>
    </div>
  )
}

export default ProductItem
