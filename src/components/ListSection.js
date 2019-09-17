import React from "react";
import Tracks from "./Tracks";
import { tracks } from "../api/tracks";

function ListSection({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredTracks = tracks.filter(tracks => {
    return true;
    // if (!selectedFilter) {
    //   return true;
    // }
    // if (selectedFilter.name === "length") {
    //   return tracks.length.includes(selectedFilter.value);
    // }
    // if (selectedFilter.name === "difficulty") {
    //   return tracks.difficulty.includes(selectedFilter.value);
    // }
    // if (selectedFilter.name === "area") {
    //   return tracks.categories.includes(selectedFilter.value);
    // }
    // return true;
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
