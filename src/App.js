import React from "react";

// scss
import "./assets/scss/main.scss";

// lib
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// component
import Header from "./components/common/header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
