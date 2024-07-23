import {Component} from 'react';


class About extends Component{
    render(){
        return(
            <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5">
                  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                      <img src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
                      <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    
                        </div>  
                  
                    </div>
                  </div>
                </div>


                <div className="card-group">
                  <div className="card">
                    <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div className="card">
                    <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>



        )
    }
}

export default About;