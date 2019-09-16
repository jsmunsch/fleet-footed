import React from "react";

function Tracks(props) {
  return (
    <div className="list-element">
      <div className="image-left"></div>
      <div className="track-info">
        <h2>{props.track.title}</h2>
        <div className="show-icons">
          <i className="material-icons">directions_run</i>
          {props.track.distance}
          <i className="material-icons">timer</i>
          {props.track.time}
          <i className="material-icons">speed</i>
          {props.track.distance}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
