import React from "react";

function Filter(props) {
  return (
    <div className="filter-element">
      <select>
        <option>{props.filter.name}</option>
        {props.filter.options.map(data => {
          return <option>{data}</option>;
        })}
        ;
      </select>
    </div>
  );
}

export default Filter;
