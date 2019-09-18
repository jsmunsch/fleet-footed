import React from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import Title from "./components/Title";
import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
`;
function App() {
  const [filters, setFilter] = React.useState("");

  function handleFilterChange(filtername, filterpups) {
    const newFilters = { ...filters };
    newFilters[filtername] = filterpups;
    console.log(newFilters);
    setFilter(newFilters);
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
    <AppLayout>
      <Title />
      <Main>
        <FilterSection onFilterChange={handleFilterChange} />
        <ListSection selectedFilters={filters} />
      </Main>
    </AppLayout>
  );
}
export default App;
