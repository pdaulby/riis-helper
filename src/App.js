import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DrawHelper from "./DrawHelper";
import Cards from "./Cards";
import Card from "./Card";
import Board from "./jackstuff/Board";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/riis-helper">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cards">Card List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cards">
            <CardList />
          </Route>
          <Route path="/riis-helper">
            <DrawHelper />
          </Route>
          <Route path="/jackstuff">
            <Board />
          </Route>
          <Route path="/">
            <DrawHelper />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function CardList() {
  return (
  <div className="App card-list">
    {Cards().map((item) => 
    <Card card={item}/>)}
  </div>);
}
