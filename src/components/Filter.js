import React from "react";
import styled from "styled-components";

const SingleFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  overflow: scroll;
  flex: 0 0 100px;
  margin: 10px;
  background-color: #e8ffea;
`;

function Filter({ filter, onChange, selectedValue }) {
  console.log(selectedValue);
  return (
    <SingleFilter>
      <select
        value={selectedValue}
        onChange={event => onChange(filter.name, event.target.value)}
      >
        <option>{filter.name}</option>
        {filter.options.map(data => {
          return <option>{data}</option>;
        })}
        ;
      </select>
    </SingleFilter>
  );
}

export default Filter;
