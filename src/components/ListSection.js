import React from "react";
import Tracks from "./Tracks";
import { tracks } from "../api/tracks";
import styled from "styled-components";

const ListSectionDiv = styled.div`
  background-color: #aebfb0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    return keepTrack;
  });
  return (
    <ListSectionDiv>
      {filteredTracks.map(track => {
        return <Tracks key={track.id} track={track} />;
      })}
    </ListSectionDiv>
  );
}

export default ListSection;
