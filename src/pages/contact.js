import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 
import Form from '../components/form' 
import { IoCallOutline, IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

class Contact extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const address = get(this, 'props.data.contentfulContactPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="CONTACT" />
        <Hero title="CONTACT" />

        <section>
          <div className="container">
            <div className="row">

              <div className="col-md-6 mx-auto my-5"> 
                <h6 className="mb-4">Toadlabs Technology Inc.</h6>
                <p> <IoLocationOutline/>  1st floor, Bimola Residency, <br/> Gandhibasti, Guwahati, Assam </p> 
                <p> <IoCallOutline/>  +91 985 993 4443 </p>
                <p> <IoMailOpenOutline/> toadlabs@gmail.com </p> 
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
    contentfulContactPage(contentful_id: {eq: "6C4Fgt4DLhkGeYK40QdfIF"}) {
      company
      address {
        raw
      }
    }
  } 
`
