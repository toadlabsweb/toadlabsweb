import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 
import Form from '../components/form' 
// import { IoCallOutline, IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";
// import SocialMedia from '../components/socialmedia'
import Address from '../components/address'

class Contact extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const address = get(this, 'props.data.contentfulContactPage.nodes')
    // const socialmedia = get(this, 'props.data.socialmedia.nodes')
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
                  altPhoneNumber={address.altPhoneNumber}
                  email={address.email}
              />  
              </div>

 

              <div className="col-md-6 mx-auto my-5">
                <h3 className="text-center my-3">GET IN TOUCH</h3>
                <Form/>   
              </div>

            </div>
          </div>
        </section> 
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
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
        altPhoneNumber
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
