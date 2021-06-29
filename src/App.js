import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Rrovider } from "./context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Rrovider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </div>
      </Router>
    </Rrovider>
  );
}

export default App;
