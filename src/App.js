import React from "react";
import MainFrame from "./components/MainFrame";

import Journal from "./components/Journal";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Route exact path="/">
        <MainFrame />
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
      </Router>
    </div>
  );
}

export default App;
