import React from "react";
import FilterSection from "../components/FilterSection";
import ListSection from "../components/ListSection";
import Title from "../components/Title";
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
`;

export default function Home({ location, history, match }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilter] = React.useState({
    difficulty: params.get("difficulty"),
    length: params.get("length"),
    area: params.get("area")
  });
  console.log(history);
  console.log(match);

  function handleFilterChange(filtername, filterpups) {
    const newFilters = { ...filters };
    newFilters[filtername] = filterpups;
    console.log(filters);
    setFilter(newFilters);
    history.push(
      `?difficulty=${newFilters.difficulty}&length=${newFilters.length}&area=${newFilters.area}`
    );
    if (newFilters.difficulty === "difficulty") {
      delete newFilters.difficulty;
    }
    if (newFilters.area === "area") {
      delete newFilters.area;
    }
    if (newFilters.length === "length") {
      delete newFilters.length;
    }
  }

  return (
    <>
      <Title />
      <Main>
        <FilterSection
          onFilterChange={handleFilterChange}
          selectedFilters={filters}
        />
        <ListSection
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      </Main>
    </>
  );
}
