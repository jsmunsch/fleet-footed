import React from "react";

function Filter({ filter, onChange }) {
  return (
    <div className="filter-element">
      <select onChange={event => onChange(filter.name, event.target.value)}>
        <option>{filter.name}</option>
        {filter.options.map(data => {
          return <option>{data}</option>;
        })}
        ;
      </select>
    </div>
  );
}

export default Filter;
