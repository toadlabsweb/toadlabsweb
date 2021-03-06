import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 
import Address from '../components/address'

class ThankYou extends React.Component {
  render() { 
    const address = get(this, 'props.data.contentfulContactPage')

    return (
      <Layout location={this.props.location}>
        <Seo title="CONTACT" />
        <Hero title="CONTACT" />

        <section>
          <div className="container">
            <div className="row">

              <div className="col-md-6 mx-auto my-5">  
                <Address  
                  company={address.company} 
                  street={address.street} 
                  streetAddress={address.streetAddress} 
                  phoneNumber={address.phoneNumber}
                  email={address.email}
              />  
              </div>

 

              <div className="col-md-6 mx-auto my-5">
                <h3 className="text-center mb-3">Thank You for your message.</h3>
              </div>

            </div>
          </div>
        </section> 
      </Layout>
    )
  }
}

export default ThankYou

export const pageQuery = graphql`
  query ThankYouQuery {
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
      contentfulContactPage {
        company
        street
        streetAddress{
          childMarkdownRemark {
            html
          }
        }
        phoneNumber
        email
      }    
    socialmedia: allContentfulSocialMediaLinks(sort: {fields: weight, order: ASC}) {
        nodes {
          name
          link
          icon
          weight
        }
      }
    } 
`
