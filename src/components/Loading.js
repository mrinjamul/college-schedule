import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <div>
      <div className="card">
        <center>
          <br />
          <div className="card__image loading" style={{ height: "4em" }}></div>
          <div className="card__title loading"></div>
        </center>
        <div
          className="card__description loading"
          style={{ height: "3em" }}
        ></div>
        <div className="card__description loading"></div>
      </div>
    </div>
  );
}
export default Loading;
