import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterSection(props) {
  return (
    <div className="filter-section">
      {filters.map(filter => {
        return (
          <Filter
            key={filter.id}
            filter={filter}
            onChange={props.onFilterChange}
          />
        );
      })}
    </div>
  );
}

export default FilterSection;
