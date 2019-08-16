import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/NavbarStyle.css';
import Logo from '../Images/90-[Convertido].png';
const Navbar=()=>{
    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="a"><img src={Logo} alt="Logo" width="35px"/></a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a className="nav-link" href="#home">Home<span className="sr-only">(current)</span></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
            
        
    );
}
export default Navbar;