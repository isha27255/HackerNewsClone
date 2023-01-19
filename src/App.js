import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewStoriesPage from "./components/NewStoriesPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<NewStoriesPage></NewStoriesPage>} />
        <Route path="/search" element={<SearchPage></SearchPage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
