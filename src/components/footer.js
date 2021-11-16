import React from 'react' 
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
        altPhoneNumber
        email
      }    
    } 
  `)
  return (
    <footer> 
    <div className="container"> 
      <div className="row">
        <div className="col-sm-6">
        <Address  
          company={data.contentfulContactPage.company} 
          street={data.contentfulContactPage.street} 
          streetAddress={data.contentfulContactPage.streetAddress} 
          phoneNumber={data.contentfulContactPage.phoneNumber}
          altPhoneNumber={data.contentfulContactPage.altPhoneNumber}
          email={data.contentfulContactPage.email}
              />  
        </div>

        
        <div className="col-sm-6 text-center">
          <h4 className="mb-5">Follow us on</h4> 
          <SocialMedia className="footer-icons" />
        </div>
      
      </div>
    </div>
  </footer>
  )
}