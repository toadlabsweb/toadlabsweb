/** Address COMPONENT **/
import React from 'react'
import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
 
const Address = ({ company, streetAddress, phoneNumber, email }) => {
       
        return (  
            <div className="col-md-6 mx-auto"> 
                <h5 className="mb-4">{company}</h5> 
                <p class="d-flex"> <IoLocationOutline className="address-icon"/> &nbsp; 
                  <div dangerouslySetInnerHTML={{ __html: streetAddress?.childMarkdownRemark?.html,}}/> 
                </p>  
                <a href = "tel: {phoneNumber}"> 
                  <p class="link"> <IoCallOutline className="address-icon" /> {phoneNumber}</p>
                </a>
//                 <a href="tel: {altPhoneNumber}"> 
//                   <p class="link"><IoCallOutline className="address-icon" /> {altPhoneNumber}</p>
//                 </a>
                <a href="mailto: {email}"> 
                  <p class="link"><IoMailOpenOutline className="address-icon"/> {email}</p>
                </a>
            </div>          
 )
}
export default Address

 
