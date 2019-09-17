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
    if (keepTrack && selectedFilters.categories) {
      keepTrack = tracks.categories.includes(selectedFilters.categories);
    }
    if (keepTrack && selectedFilters.length) {
      keepTrack = tracks.length.includes(selectedFilters.length);
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
