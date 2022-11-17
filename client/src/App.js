import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" component={Landing} />
    </Routes>
    <Landing />
  </Router>
);

export default App;
