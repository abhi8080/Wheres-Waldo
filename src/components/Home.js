import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <span id="icon-attribution">
          Icon made by Stefan Spieler from{" "}
          <a
            href="https://thenounproject.com/browse/icons/term/waldo/"
            target="_blank"
            title="Waldo Icons"
          >
            Noun Project
          </a>
        </span>
        <figure>
          <img
            src="https://www.pngkey.com/png/detail/929-9298678_wally-wheres-waldo-face.png"
            alt="Waldo"
            height="300px"
          ></img>
          <figcaption>
            <a
              href="https://www.pngkey.com/detail/u2y3a9w7w7u2w7t4_wally-wheres-waldo-face/"
              target="_blank"
            >
              Image on pngkey.com
            </a>
          </figcaption>
        </figure>
        <h1>Where's Waldo</h1>
        <p>
          Find the characters Waldo, Woof, Wilma, Wizard Whitebeard and Odlaw.
        </p>
        <div id="startAndLeaderBoard-buttons">
          <Link to="/game">
            <button className="button" id="start">
              Start
            </button>
          </Link>{" "}
          <Link to="/leaderboard">
            <button className="button" id="leaderboard-button">
              Leaderboard
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
