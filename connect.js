import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Player from "./player";
  import App from "./game";
class Connect extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>CONNECT FOUR GAME</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/player">Player Info</NavLink></li>
            <li><NavLink to="/game">Game</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/player" component={Player}/>
            <Route path="/game" component={App}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Connect;