import React from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-grid">
        <FilterSection />
        <ListSection />
      </main>
    </div>
  );
}

export default App;
