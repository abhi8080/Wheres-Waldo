import React from "react";

import "../styles/GameOver.css";
import { saveScoreInDataBase } from "../firebaseModel";
import { Link } from "react-router-dom";

export default class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  playAgain() {
    window.location.reload();
  }

  sumbitScore(minutes, seconds) {
    this.setState({ name: "" });
    if (seconds < 10) seconds = "0" + seconds;
    saveScoreInDataBase(minutes, seconds, this.state.name);
  }
  render() {
    return (
      <div id="gameOver-box">
        <h1>Congratulations!</h1>
        <p>You found all the characters</p>
        <span>
          Your time is {this.props.minutes} minutes and {this.props.seconds}{" "}
          seconds
        </span>
        <form>
          <label for="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button
            type="button"
            id="sumbitScore"
            onClick={this.sumbitScore.bind(
              this,
              this.props.minutes,
              this.props.seconds
            )}
          >
            Sumbit Score
          </button>
        </form>
        <div id="playAgain-leaderboard-buttons">
          <button
            className="button"
            onClick={this.playAgain.bind(this)}
            id="playAgain"
          >
            Play Again
          </button>
          <Link to="/leaderboard">
            <button className="button" id="leaderboard">
              Leaderboard
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
