import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";
import styled from "styled-components";

const FilterDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  background-color: #68a691;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  width: 100vw;
  position: sticky;
  top: 50px;
  z-index: 1;
  box-shadow: 0px 3px 5px 0px rgba(87, 87, 87, 1);
`;

function FilterSection({ onFilterChange, selectedFilters }) {
  console.log(selectedFilters);
  return (
    <FilterDiv>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
    </FilterDiv>
  );
}

export default FilterSection;
