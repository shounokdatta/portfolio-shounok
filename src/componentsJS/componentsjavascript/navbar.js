import React from 'react'
import  './componentsCSS/master.css';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    // <!-- Navigation-->
    <div className='contenar'>
        <div className="brand"><h1>Protfolio</h1></div>
        <div>        <nav>
      <a><Link  to="/">Home</Link></a>
      {/* <a><Link  to="/resume" class="nav-item" active-color="green">Resume</Link></a> */}
      <a href="https://github.com/shounokdatta?tab=repositories/" target="_blank">Github Link</a>
      <a><Link  to="/contact">Contact</Link></a>
      <div class="animation start-home"></div>
    </nav>
    </div>
        </div>
    );
}