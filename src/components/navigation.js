/**HEADER COMPONENT **/

 import * as React from "react"
 import { Link } from "gatsby";  
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image" 

 const Navigation = () => {
  const data = useStaticQuery(graphql`
  query NavigationQuery {
    allContentfulPages(sort: {fields: weight}) {
      nodes {
        pageTitle
        url
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
)

 
const menu = data.allContentfulPages?.nodes
  return (
 
  <nav className="navbar fixed-top navbar-expand-lg navbar-custom navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
      <StaticImage
        src="../../static/images/toadlabstecnologyinclogo.png" alt="tllogo"
        className="logo d-inline-block align-top"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        width={100}
        height={100}
        quality={95}
      />  
        <span className="hidden">ToadLabs Technologies Inc.</span>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#tlnavbar" 
        aria-controls="tlnavbar" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="tlnavbar">
        <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
          {menu.map((data) => {
            return (  
              <li className="nav-item" key={data.id}>
                <Link to={data.url} className="nav-link text-light" activeClassName="nav-active">{data.pageTitle}</Link>
              </li> 
              )})}
        </ul>
      </div>
    </div>
  </nav>
  ) 
}
              

export default Navigation
