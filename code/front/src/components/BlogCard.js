import React from "react";

export default (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text"> {props.body} </p>
          <a href="#" className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};
