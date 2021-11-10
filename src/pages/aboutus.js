import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 
import { GatsbyImage } from 'gatsby-plugin-image'
import Team from '../components/team'

class About extends React.Component {
  render() {
    const aboutus = get(this, 'props.data.aboutus')
    const ourstory = get(this, 'props.data.ourstory')
    const team = get(this, 'props.data.team.nodes')
    const hero = get(this, 'props.data.hero')

    return (
      <Layout location={this.props.location}>
        <Seo title="ABOUT" />
        <Hero title="ABOUT"  image={hero.image.GatsbyImageData}/>

//               <section className="text-center">
//                 <h1 className="text"> {aboutus.title} </h1>
//                 <h2> {aboutus.title} </h2>
//                 <h3> {aboutus.title} </h3>
//                 <h4> {aboutus.title} </h4>
//                 <h5> {aboutus.title} </h5>
//                 <h6> {aboutus.title} </h6>
//                 <p> {aboutus.title} </p>
//               </section>

                

        <section>
          <div className="card mb-3 bg-transparent border-0"  >
            <div className="row g-0">
              <div className="col-md-5 position-relative">
                <GatsbyImage className="section-image" image={aboutus.image.gatsbyImageData}/> 
                <h2 className="section-text position-absolute top-50 start-50 translate-middle"> {aboutus.title} </h2> 
              </div>
              <div className="col-md-7">
                <div className="card-body text-white px-5"> 
                  <div dangerouslySetInnerHTML={{ __html: aboutus.content?.childMarkdownRemark?.html, }} />
                </div>
              </div>
            </div>
          </div>
        </section>
          
          <section>
            <Team team={team} /> 
          </section>


          <section>
            <div className="card mb-3 bg-transparent border-0"  >
              <div className="row g-0">
              <div className="col-md-4 position-relative d-block d-md-none">
                  <GatsbyImage className="section-image" image={ourstory.image.gatsbyImageData}/>
                  <h2 className="section-text position-absolute top-50 start-50 translate-middle "> {ourstory.title} </h2>
                </div>
                <div className="col-md-8">
                  <div className="card-body text-end px-5">
                    <div dangerouslySetInnerHTML={{ __html: ourstory.content?.childMarkdownRemark?.html, }} />
                  </div>
                </div>
               <div className="col-md-4 position-relative d-none d-md-block">
                  <GatsbyImage className="section-image" image={ourstory.image.gatsbyImageData}/>
                  <h2 className="section-text position-absolute top-50 start-50 translate-middle "> {ourstory.title} </h2>
                </div>
              </div>
            </div>
          </section>

       
        
          
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutUsQuery {
    hero: contentfulHeroImage(contentful_id: {eq: "5s9KmJHyHqCWuQwwJyqSSt"}) {
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    aboutus: contentfulTextSections(contentful_id: {eq: "oUwFk02DjlaaNtWr0FsEH"}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(placeholder: BLURRED )
      }
    }
    ourstory: contentfulTextSections(contentful_id: {eq: "2qSnV5BHLa9WtXYGP57IVk"}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(placeholder: BLURRED )
      }
    }
    team: allContentfulPerson {
      nodes {
        name
        title
        email
        phone
        facebook
        image {
          gatsbyImageData(placeholder: BLURRED, cornerRadius: 100, layout: CONSTRAINED)
        }
      }
    }
  }
`
