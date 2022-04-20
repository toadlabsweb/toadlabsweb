/** Footer COMPONENT **/
import React from 'react' 
import { StaticImage } from "gatsby-plugin-image" 
import { useStaticQuery, graphql } from 'gatsby'
import SocialMedia from '../components/socialmedia'
import Address from '../components/address' 


export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
    } 
  `)
  return (
    <footer className="p-0"> 
    <div className=" footer-topborder mb-5"> </div>
    <div className="container"> 
      <div className="row">

      <div className="col-md-2 d-flex justify-content-center align-items-center">
        <StaticImage
          src="../../static/images/toadlabstecnologyinclogo1.png" alt="tllogo"
          className="logo d-inline-block align-top"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          width={220}
          height={220}
          quality={95}
          /> 
        </div>
        
        <div className="col-sm-7 d-flex justify-content-center align-items-center mb-5">
        <Address  
          company={data.contentfulContactPage.company} 
          street={data.contentfulContactPage.street} 
          streetAddress={data.contentfulContactPage.streetAddress} 
          phoneNumber={data.contentfulContactPage.phoneNumber}
          email={data.contentfulContactPage.email}
              />  
        </div>

        <div className="col-md-3 text-center d-flex justify-content-center  mb-5">
          <div>
          <h5 className="mb-5">Follow us on</h5> 
          <SocialMedia className="footer-icons" />          
          </div>
        </div>

        


      
      </div>
      <div className="row"> 
      <hr/>
      <p> <small className="text-muted">Property of Toadlabs Tecnology Inc© 2022</small> </p>
      
      </div>
    </div>
  </footer>
  )
}
