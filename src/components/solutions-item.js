/** Solutions Item COMPONENT **/
import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image' 
import { Link } from 'gatsby'

const SolutionsItem = ({ solutions }) => {
  if (!solutions) return null
  if (!Array.isArray(solutions)) return null

  return ( 
     
    <div className=" container-fluid">
      <div className="row" >
        {solutions.map((solution) => {
          return (
            <div className="solutions-item card bg-transparent text-dark col-sm-6 border-2 rounded-0 g-0 " key={solution.slug}>
              <div class="card-overlay"></div>
              <Link to={`/3dsolution/${solution.slug}`} className="link"> 
                <GatsbyImage className="card-img solutions-image" alt="" image={solution.image.gatsbyImageData} />  
                  <div className="card-img-overlay d-flex text-center justify-content-center align-items-center"> 
                    <div className="card-text p-5">
                      <h3 className="text-dark"> {solution.title}</h3> 
                      <p className="text-dark"> {solution.description}</p>
                        <button className="btn btn-outline-light rounded-0 border-1 btn-lg"> Learn More </button>
                    </div>
                  </div>
                </Link> 
              </div>        
            )
          })}
        </div>
    </div>
  )
}

export default SolutionsItem
