import React from "react";
import Tracks from "./Tracks";
import { tracks } from "../api/tracks";

function ListSection() {
  return (
    <div className="list-section">
      {tracks.map(track => {
        return <Tracks key={track.id} track={track} />;
      })}
    </div>
  );
}

export default ListSection;
