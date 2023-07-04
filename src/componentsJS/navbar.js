import React from 'react'
import  './componentsCSS/master.css';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    // <!-- Navigation-->
    <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container px-5">
            <span className="brand mb-lg-0 text-light fw-bolder">
                DATTA & WEB'S
            </span>
            <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">   
                <ul className="navbar-nav mb-2 mb-lg-0  fw-bolder">
                    <li className="nav-item"><Link className="mx-2 " to="/">Home</Link></li>
                    <li className="nav-item"><Link className="mx-2 " to="/resume">Resume</Link></li>
                    <li className="nav-item"><a className="mx-2 " href="https://github.com/shounokdatta?tab=repositories/" target="_blank">Projects</a></li>
                    <li className="nav-item"><Link className="mx-2 " to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
     </nav>
    );
}