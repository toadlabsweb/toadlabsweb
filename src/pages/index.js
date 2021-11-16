import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout' 
import HeroImg from '../components/heroimg'
import ProductGroup from '../components/product-group'
import ContentCreation from '../components/contentcreation'
import Partners from '../components/partners' 
import SectionVideo from '../components/sectionvideo'
import HeroVideo from '../components/herovideo'

class RootIndex extends React.Component {
  render() { 
    const hero = get(this, 'props.data.contentfulHeroImage')
    const intro = get(this, 'props.data.intro')
    const howwework = get(this, 'props.data.howwework')
    const productgroups = get(this, 'props.data.productgroups.nodes')
    const contentcreation = get(this, 'props.data.contentcreation.nodes')
    const partners = get(this, 'props.data.partners.nodes')

    return (
      <Layout location={this.props.location}>

      <HeroVideo
         title={hero.title}
         subtitle={hero.subtitle}
         buttonText={hero.buttonText}  /> 
        {/* <HeroImg
          image={hero.image.gatsbyImageData}
          title={hero.title}
          subtitle={hero.subtitle}
          buttonText={hero.buttonText} 
        />   */}

          <section>
            <div className="card mb-3 bg-transparent border-0"  >
              <div className="row g-0">
                <div className="col-md-4 position-relative embed-responsive embed-responsive-16by9">
                <GatsbyImage className="intro-image" image={intro.image.gatsbyImageData}/>
                
                </div>
                <div className="col-md-8">
                  <div className="card-body px-5 animate__animated animate__fadeInUp  animate__delay-1s"> 
                    <div dangerouslySetInnerHTML={{ __html: intro.content?.childMarkdownRemark?.html, }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        
          <section>
              <ProductGroup productgroups={productgroups} /> 
              <ContentCreation contentcreation={contentcreation} /> 
          </section>
         
          <section>
              <Partners partners={partners} /> 
          </section> 
 
          <section>    
            <div className="card mb-3 bg-transparent border-0 "  >
              <div className="row g-0">
                <div className="col-md-6 position-relative"> 
                <SectionVideo />             
               </div>

                <div className="col-md-6">
                  <div className="card-body howwework-text px-5 animate__animated animate__fadeInUp  animate__delay-1s">
                  <h2> {howwework.title} </h2>
                  <div dangerouslySetInnerHTML={{ __html: howwework.content?.childMarkdownRemark?.html, }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED 
          )
        }
      }
    }
      contentfulHeroImage(contentful_id: {eq: "5s9KmJHyHqCWuQwwJyqSSt"}) {
        title
        subtitle
        buttonText
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      intro: contentfulTextSections(contentful_id: {eq: "63IYcJArG9d6w3wVSaMZGl"}) {
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
      howwework: contentfulTextSections(contentful_id: {eq: "4F5coCT4E5LRPXUkPKxwuN"}) {
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
      productgroups: allContentfulProductGroup(
        filter: {contentful_id: {ne: "4PKZjMgdz1NBbw8pUcAqE1"}}
        sort: {fields: size, order: ASC}
      ) {
        nodes {
          title
          subtitle
          buttonText
          image {
            gatsbyImageData(placeholder: BLURRED, height: 480)
          }
        }
      }
      contentcreation: allContentfulProductGroup(
        filter: {contentful_id: {eq: "4PKZjMgdz1NBbw8pUcAqE1"}}
      ) {
        nodes {
          title
          subtitle
          buttonText
          image {
            gatsbyImageData(placeholder: BLURRED, height: 480)
          }
        }
      }
      partners: allContentfulPartners(sort: {fields: weight, order: ASC}) {
        nodes {
          logo {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
          url
        }
      }
    }

`
