import React from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import Header from "./components/Header";

function App() {
  const [filters, setFilter] = React.useState("");

  function handleFilterChange(filtername, filterpups) {
    const newFilters = { ...filters };
    newFilters[filtername] = filterpups;
    setFilter(newFilters);
  }

  return (
    <div className="App">
      <Header />
      <main className="main-grid">
        <FilterSection onFilterChange={handleFilterChange} />
        <ListSection selectedFilters={filters} />
      </main>
    </div>
  );
}
export default App;
