import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image' 
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

class SolutionsPostTemplate extends React.Component {
  render() {
    const solution = get(this.props, 'data.solutionPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo title={solution.title}  />
        <Hero title={solution.title} /> 
        
        <section>
          <div className="container">
            <div className="row">
            <div className="col-md-6 pe-5">
              {/* <GatsbyImage className="image" alt="" image={solution.image.gatsbyImageData} />  */}
              {/* YOUTUBE LINK */}
              <div dangerouslySetInnerHTML={{ __html: solution.content?.childMarkdownRemark?.html, }} /> 
            </div>          
            <div className="col-md-6">            
                <h6 className="mb-5">{solution.description}</h6>
                <p><div dangerouslySetInnerHTML={{ __html: solution.specs?.childMarkdownRemark?.html, }} /></p> 
            </div>
            {/* <div className="col-md-12 mt-5"> 
               <div dangerouslySetInnerHTML={{ __html: solution.content?.childMarkdownRemark?.html, }} />
            </div> */}
          </div>
        </div>
        </section>

        <div className="container">
            {/* <hr className="text-white mt-5"/>  */}
            {(previous || next) && (
              <nav className=" m-5">
                <ul className="articleNavigation">
                  {previous && (
                    <li>
                      <Link to={`/3dsolution/${previous.slug}`} rel="prev">
                      <IoChevronBackOutline className="footer-icons mx-3" /> {previous.title}  
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/3dsolution/${next.slug}`} rel="next">
                        {next.title} <IoChevronForwardOutline className="footer-icons mx-3" />
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
      </Layout>
    )
  }
}

export default SolutionsPostTemplate

export const pageQuery = graphql`
  query SolutionsPostBySlug(
    $slug: String!
    $previousSolutionSlug: String
    $nextSolutionSlug: String
  ) {
    solutionPost: contentfulSolutions(slug: { eq: $slug }) {
      slug
      title
      description
      image {
        gatsbyImageData(  placeholder: BLURRED)
      }
      specs {
        childMarkdownRemark {
          html 
        }
      }
      content {
        childMarkdownRemark {
          html 
        }
      } 
    }
    previous: contentfulSolutions(slug: { eq: $previousSolutionSlug }) {
      slug
      title
    }
    next: contentfulSolutions(slug: { eq: $nextSolutionSlug }) {
      slug
      title
    }
  }
`
