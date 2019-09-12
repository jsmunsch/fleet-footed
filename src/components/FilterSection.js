import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterSection() {
  return (
    <div className="filter-section">
      {filters.map(filter => {
        return <Filter key={filter.id} filter={filter} />;
      })}
    </div>
  );
}

export default FilterSection;
