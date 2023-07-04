import React from "react";
import  './componentsCSS/master.css';
import whatsappPic from "./whatsapp.png";
import linkdinpic from "./unnamed.png";
import Twitterpic from "./Logo_of_Twitter.svg.png"
import ReactWhatsapp from "react-whatsapp";
export default function Contact() {
  return (
    <>
      <div className="Container-contact">
        <div className="card">
          <img src={whatsappPic} className="card-img-top" alt="..." />
          <div className="card-body whatsapp">
            <h5 className="card-title">Connect on Whatsapp</h5>
            <p className="card-text">
              Ping me on whastsapp
            </p>
          </div>
            <ReactWhatsapp number="+91 8942958442" class="card-body socal-link">Message</ReactWhatsapp>
        </div>
        <div className="card">
          <img src={linkdinpic} className="card-img-top" alt="..." />
          <div className="card-body linkdin">
            <h5 className="card-title">Connect on LINKDIN</h5>
            <p className="card-text">
              massage me on LINKDIN
            </p>
            </div>
              <div className="card-body socal-link">
              <a href="https://www.linkedin.com/in/shounok-datta-ab9a11254/?trk=public-profile-join-page" target="blank"> connect me on linkdin</a>
          </div>
        </div>
        <div className="card">
          <img src={Twitterpic} className="card-img-top" alt="..." />
          <div className="card-body twitter">
            <h5 className="card-title">Connect on Twitter</h5>
            <p className="card-text">
              massage me on Twitter
            </p>
          </div>
          <div className="card-body socal-link">
              <a href="https://twitter.com/Datta3Shounok" target="blank"> connect me on twitter</a>
          </div>
        </div>
      </div>
    </>
  );
} 
