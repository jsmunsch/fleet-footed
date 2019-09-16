import React from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import Header from "./components/Header";

function App() {
  function handleFilterChange(filtername, filterpups) {
    console.log(filtername, filterpups);
  }
  return (
    <div className="App">
      <Header />
      <main className="main-grid">
        <FilterSection onFilterChange={handleFilterChange} />
        <ListSection />
      </main>
    </div>
  );
}

export default App;
