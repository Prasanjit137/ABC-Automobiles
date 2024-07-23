import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <>
              <div class="container py-4">
                  <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                      <div class="container-fluid py-5">
                          <h1 class="display-5 fw-bold">Contact us</h1>
                      </div>
                  </div>




                  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Office Address</h5>
        <p class="card-text">US office:</p>
        <p class="card-text">1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Email us</h5>
        <p class="card-text">We're on top of things and aim to respond to all inquiries within 24 hours.</p>
        <p class="card-text">abc.automobiles@gmail.com</p>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Call us</h5>
        <p class="card-text">Let's work together towards a common goal - get in touch!</p>
        <p class="card-text">(+91)8899112327</p>
      </div>

    </div>
  </div>
</div>
<br></br>




                          <div class="h-100 p-5 text-bg-dark rounded-3">
                              <h2>Write us</h2>
                              <p>We will help you find the right products and pricing for your business.</p>
                              <button class="btn btn-outline-light" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Sales</button>
                          </div>


                          
              </div>




                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">

                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Write us here</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    
                      <div class="modal-body">
 
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="FirstName LastName"/>
                        </div>

                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1234567890"/>
                        </div>

                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                      </div>
                
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send a Message</button>
                      </div>
    
                    </div>
                  </div>
                </div>

            </>
        )
    }
}

export default Contact;