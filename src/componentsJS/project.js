import  './componentsCSS/master.css';
import Project1 from "./board-g04042984f_640.jpg";
import React from "react";

export default function project() {
  return (
    <>
      <div className="Container-1">
        <div className="card"> 
          <div className="card-img">
            <img className="img" src={Project1} alt="" />
          </div>
          <div className="card-title">Tic-Tac-Tae</div>
          <div className="card-subtitle">A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.
</div>
          <hr className="card-divider" />
          <a
            href="https://sensational-cranachan-63351a.netlify.app/"
            target="_blank"
            className="card-price card-footer"
          >
            website link
          </a>
        </div>
        <div className="card">
          <div className="card-img">
            <div className=""></div>
          </div>
          <div className="card-title">counting Number</div>
          <div className="card-subtitle">website discription</div>
          <hr className="card-divider" />
          <a
            href="#"
            target="_blank"
            className="card-price card-footer"
          >
            website link
          </a>
        </div>
        </div>
      <div className="Container-1">
        <div className="card">
          <div className="card-img">
            <div className=""></div>
          </div>
          <div className="card-title">counting Number</div>
          <div className="card-subtitle">website discription</div>
          <hr className="card-divider" />
            <a className="card-price card-footer">website link</a>
        </div>
      </div>
      <div className="Container-1">
        <div className="card">
          <div className="card-img">
            <div className=""></div>
          </div>
          <div className="card-title">counting Number</div>
          <div className="card-subtitle">website discription</div>
          <hr className="card-divider" />
            <a className="card-price card-footer">website link</a>
        </div>
        <div className="card">
          <div className="card-img">
            <div className=""></div>
          </div>
          <div className="card-title">counting Number</div>
          <div className="card-subtitle">website discription</div>
          <hr className="card-divider" />
            <a className="card-price card-footer">website link</a>
        </div>
      </div>
    </>
  );
}
