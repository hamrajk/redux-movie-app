import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Header>
      </Router>
    </div>
  );
}

export default App;
