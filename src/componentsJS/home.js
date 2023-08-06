import React from "react";
import "./componentsjavascript/componentsCSS/master.css";
import "./componentsjavascript/componentsCSS/home.css";
import { 
Chart as chartJs,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend } from "chart.js";
import {Bar}from "react-chartjs-2";
import { Link } from "react-router-dom";
chartJs.register(
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
)
export default function Home(props) {
 const data={
    labels:['React','nodeJS','javascript','css','HTML','C','java'],
    datasets:[{
      label:['My Skill'],
      data:[4,1,6,4.5,5,9,1,10],
      backgroundColor:['#1A56DB','green','#E3A008','#76A9FA','blueviolet','black','red'],
      borderColor:'black',
      borderRadius:1,
      HoverBorderWidth:0,
      
    }]
  }
  const options={
    indexAxis:'y',
  } 
  return (
    <>
      {/* <!-- Header text content--> */}
      <header>
        <div className="text-center text-xxl-start">
            <h1 className="display-3 fw-bolder">
            <span className="text-gradient d-inline">
                       SHOUNOK DATTA 
           </span>
           </h1>
           <div className="container-text ">
            <h2></h2>
            <spam className="text first-text">I am a</spam>
            <spam className="text sceond-text">Developer</spam> 
            </div>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
            <a
              className="btn btn-outline-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
              download="Resume"
              href={props.pdfFile}
            >
             Download My Resume
            </a>
            <Link
              className="btn btn-outline-success btn-lg px-5 py-3 fs-6 fw-bolder"
              to="/project"
            >
              Top Projects
            </Link>
          </div>
        </div>
      </header>
      {/* <div className="divider bg-dark">exp</div> */}
      <div className="Container my-5">
      <img src={props.Masterimg}/>
        <Bar
        style={
          {width:'80%',
          padding:'20px'}
        }
        data={data}
        options={options}
        ></Bar>
      </div>
    </>
  );
}
