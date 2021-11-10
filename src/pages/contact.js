import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero' 

class Contact extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const address = get(this, 'props.data.contentfulContactPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="CONTACT" />
        <Hero title="CONTACT" />
         

          <div className="container mx-auto text-center"> 
            <h6>Toadlabs</h6>
            <p><small className="text-muted">1st floor, Bimola Residency, Gandhibasti, Guwahati, Assam</small> </p> 
            <p><small className="text-muted"> +919859934443 </small> </p>
            <p><small className="text-muted">toadlabs@gmail.com</small></p>
            <p><small className="text-muted">www.toadlabs.biz</small></p>
             
          </div>
       

      <div className="col-6 mx-auto my-5">
        <h3 className="text-center my-3">GET IN TOUCH</h3>
        <form className="row g-3">
            <div className="col-md-6">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col-md-6">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
            </div>
            <div className="col-6">
              <input type="email" class="form-control" placeholder="name@example.com"/>
            </div>
            <div className="col-6">
              <input type="text" className="form-control"   placeholder="Phone Number"/>
            </div>
            <div class="col-12"> 
              <textarea class="form-control"placeholder="Your Message"  aria-label="With textarea"></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn  btn-outline-light rounded-0 btn-lg px-5 py-2 ">SUBMIT</button>
            </div>
          </form>
        </div> 



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
