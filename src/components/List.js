import React from "react";

function List() {
  return (
    <div className="list-element">
      <div className="image-left"></div>
      <div className="track-info">
        <h2>Name</h2>
        <div className="show-icons">
          <i className="material-icons">directions_run</i> 8km
          <i className="material-icons">timer</i> 01:54h
          <i className="material-icons">speed</i> super fast
        </div>
      </div>
    </div>
  );
}

export default List;
