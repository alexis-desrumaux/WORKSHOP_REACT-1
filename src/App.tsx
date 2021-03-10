import React from 'react';
import {HomeRouter} from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <HomeRouter/>
    </Router>
  );
}

export default App;
