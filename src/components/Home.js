import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="waldo-image"></div>
        <p>Identify all characters</p>
        <div id="startAndLeaderBoard-buttons">
          <button id="start">Start</button>
          <button id="leaderboard">Leaderboard</button>
        </div>
      </div>
    );
  }
}
