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

                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Write us</h2>
                            <p>We will help you find the right products and pricing for your business.</p>
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Sales</button>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Contact information</h2>
                            <p>We're open for any suggestion or just to have a chat.</p>
                            <button class="btn btn-outline-secondary" type="button">Go to the help centre</button>
                        </div>
                    </div>
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
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </>
        )
    }
}

export default Contact;