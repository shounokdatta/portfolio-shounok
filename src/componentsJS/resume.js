import React from 'react'
import './componentsjavascript/componentsCSS/master.css';
export default function Resume(props) {
  return (
    <>
    <div className="contenar-1">
    <div class="card mb-3 card-resume text-bg-info">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.school} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Why do we use it?</h5>
              <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    <div class="card mb-3 card-resume text-bg-warning">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.school} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Why do we use it?</h5>
              <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    <div class="card mb-3 card-resume text-bg-secondary">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.school} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">Why do we use it?</h5>
              <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
              <p className="card-text text-light"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
