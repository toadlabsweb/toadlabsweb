import React from 'react'
import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
 
const Address = ({ company, streetAddress, phoneNumber, altPhoneNumber, email }) => {
       
        return (  
            <div className="col-md-6 mx-auto"> 
                <h5 className="mb-4">{company}</h5> 
                <p class="d-flex"> <IoLocationOutline/> &nbsp; 
                  <div dangerouslySetInnerHTML={{ __html: streetAddress?.childMarkdownRemark?.html,}}/> 
                </p>  
                <a href = "tel: {phoneNumber}"> 
                  <p> <IoCallOutline/> {phoneNumber}</p>
                </a>
                <a href="tel: {altPhoneNumber}"> 
                  <p><IoCallOutline/> {altPhoneNumber}</p>
                </a>
                <a href="mailto: {email}"> 
                  <p><IoMailOpenOutline/> {email}</p>
                </a>
            </div>          
 )
}
export default Address

 