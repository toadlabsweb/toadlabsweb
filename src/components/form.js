import React from 'react' 

const Form = () => (
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
)

export default Form
