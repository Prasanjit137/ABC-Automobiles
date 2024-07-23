import {Link} from 'react-router-dom';


function Footer(){
    return(
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to='/'>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='services'>Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to='vehicle-list'>Vehicles</Link></li>
            <li className="nav-item"><Link className="nav-link" to='contact'>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
          </ul>
          <div data-testid="footer-content">
        <p className="text-center text-body-secondary">© 2024 ABC Automobiles</p>
        </div>
        </footer>
      </div>
    )
  
  }

  export default Footer;
  