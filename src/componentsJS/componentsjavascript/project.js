import  './componentsCSS/project.css';
import React from "react";

export default function project(props) {
  return (
    <>
    <div className="page">
    <div className="title"><h1>MY PROJECT</h1></div>
    <div className="main-project">
        <div className="card"> 
          <div className="card-img">
            <img className="img" src={props.Project1} alt="" />
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
            <img className="img" src={props.Project2}  alt=""/>
          </div>
          <div className="card-title">TO-DO-LIST</div>
          <div className="card-subtitle">To-do lists are a list of tasks that an individual needs to complete or accomplish. Tasks are typically put in order by priority or importance. A to-do list can be written on a piece of paper or by utilizing task management software.
</div>
          <hr className="card-divider" />
          <a
            href="https://iridescent-maamoul-81904b.netlify.app/"
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
      </div>
    </>
  );
}
