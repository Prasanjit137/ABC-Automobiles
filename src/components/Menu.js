import {Link} from 'react-router-dom';

function Menu(){
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ABC Automobilles</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-testid="menu-content">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='vehicle-list'>Vehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='addVehicle'>Add Vehicle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='contact'>Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
  
  }

  export default Menu;
  