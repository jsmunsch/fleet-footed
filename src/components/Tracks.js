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
          <i className="material-icons">timer</i> 01:54h
          <i className="material-icons">speed</i> super fast
        </div>
      </div>
    </div>
  );
}

export default Tracks;
