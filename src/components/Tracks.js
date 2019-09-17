import React from "react";

function Tracks({ track }) {
  return (
    <div className="list-element">
      <div className="image-left"></div>
      <div className="track-info">
        <h2>{track.title}</h2>
        <div className="show-icons">
          <i className="material-icons">directions_run</i>
          {track.distance}
          <i className="material-icons">timer</i>
          {track.time}
          <i className="material-icons">speed</i>
          {track.distance}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
