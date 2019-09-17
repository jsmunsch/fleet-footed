import React from "react";
import Tracks from "./Tracks";
import { tracks } from "../api/tracks";

function ListSection({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredTracks = tracks.filter(tracks => {
    let keepTrack = true;
    if (keepTrack && selectedFilters.difficulty) {
      keepTrack = tracks.difficulty.includes(selectedFilters.difficulty);
    }
    if (keepTrack && selectedFilters.area) {
      keepTrack = tracks.categories.includes(selectedFilters.area);
    }
    if (keepTrack && selectedFilters.length) {
      keepTrack = tracks.length.includes(selectedFilters.length);
    }
    if (selectedFilters.difficulty === "difficulty") {
      delete selectedFilters.difficulty;
      return true;
    }
    if (selectedFilters.area === "area") {
      delete selectedFilters.area;
      return true;
    }
    if (selectedFilters.length === "length") {
      delete selectedFilters.length;
      return true;
    }
    return keepTrack;
  });
  return (
    <div className="list-section">
      {filteredTracks.map(track => {
        return <Tracks key={track.id} track={track} />;
      })}
    </div>
  );
}

export default ListSection;
