import React from 'react';
import  './componentsCSS/master.css';
import Masterimg from "./Background.svg";
import {Link} from 'react-router-dom';
import pdfFile from './Shounok_Datta_Resume.pdf'
export default function Headline() {
    return (
        <>
            {/* <!-- Header text content--> */}
            <header>
                <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Marketing</div></div>
                    <div className="fs-3 fw-light text-muted">I can help your business to</div>
                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                        <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" download='Resume'href={pdfFile}>Resume</a>
                        <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/project">Top 5 Projects</Link>
                    </div>
                </div>  
            </header>
            <div className='Container'>
           <img src={Masterimg} alt="" />
            </div>
        </>
    )
}
