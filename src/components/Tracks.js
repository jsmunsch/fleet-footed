import React from "react";
import styled from "styled-components";

const ListElement = styled.div`
  display: flex;
  background-color: #4e8053;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin: 15px;
  box-shadow: 2px 1px 1px 0px rgba(90, 90, 90, 0.75);
  min-width: 400px;
`;

const CardImage = styled.div`
  display: flex;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  background: url(https://d2exd72xrrp1s7.cloudfront.net/www/smart_tours/525921-big@2x/1681c9dcd2e?width=1000&height=700&crop=true&q=40)
    no-repeat center center;
  background-size: cover;
`;

const TrackInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 5px;
  flex-wrap: wrap;
`;

const IconDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function Tracks({ track }) {
  return (
    <ListElement>
      <CardImage></CardImage>
      <TrackInfo>
        <h2>{track.title}</h2>
        <IconDisplay>
          <i className="material-icons">directions_run</i>
          {track.distance}
          <i className="material-icons">timer</i>
          {track.time}
          <i className="material-icons">speed</i>
          {track.distance}
        </IconDisplay>
      </TrackInfo>
    </ListElement>
  );
}

export default Tracks;
