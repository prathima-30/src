import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div id="h">
        <h2>Game Rules:</h2>
        <p><ol>
            <li>First, decide who goes first and what color each player will have.</li>
            <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
            <li>On your turn, drop one of your colored discs from the top into any of the seven slots.</li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>The starter of the previous game goes second on the next game.</li>
            </ol></p>
      </div>
    );
  }
}
 
export default Home;