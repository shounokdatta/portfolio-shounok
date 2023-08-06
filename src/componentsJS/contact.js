import React from "react";
import  './componentsjavascript/componentsCSS/master.css';
import ReactWhatsapp from "react-whatsapp";
export default function Contact(props) {
  return (
    <>
      <div className="Container-contact">
        <div className="card">
          <img src={props.whatsapp} className="card-img-top" alt="..." />
          <div className="card-body whatsapp">
            <h5 className="card-title">Connect on Whatsapp</h5>
            <p className="card-text">
              Ping me on whastsapp
            </p>
          </div>
            <ReactWhatsapp number="+91 8942958442" className="btn card-body socal-link font-weight-bold">Message</ReactWhatsapp>
        </div>
        <div className="card">
          <img src={props.linkdin} className="card-img-top"/>
          <div className="card-body linkdin">
            <h5 className="card-title">Connect on LINKDIN</h5>
            <p className="card-text">
              Massage me on LINKDIN
            </p>
            </div>
              <div className="btn card-body socal-link">
              <a href="https://www.linkedin.com/in/shounok-datta-ab9a11254/?trk=public-profile-join-page" target="blank">Linkdin</a>
          </div>
        </div>
        <div className="card">
          <img src={props.Twitter} className="card-img-top"/>
          <div className="card-body twitter">
            <h5 className="card-title">Connect on Twitter</h5>
            <p className="card-text">
              Massage me on Twitter
            </p>
          </div>
          <div className="btn card-body socal-link m-0 p-0">
              <a href="https://twitter.com/Datta3Shounok" target="blank">Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
} 
