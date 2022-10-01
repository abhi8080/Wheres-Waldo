import React from "react";

import "../styles/Photograph.css";

export default class PhotoGraph extends React.Component {
  constructor(props) {
    super(props);
    this.createCharactersBox();
    console.log("here");
  }
  createCharactersBox() {
    const picture = document.createElement("div");
    picture.classList.add("characters-picture");
    picture.id = "characters-picture";
    console.log(picture);
    document.getElementById("root").appendChild(picture);
  }

  render() {
    return (
      <div id="photograph-section">
        <nav>
          <button id="view-characters">View all characters</button>
          <div id="timer">Timer</div>
        </nav>
        <div id="photo">
          <div id="target-box">.</div>
          <div id="dropdown-select">
            <span>Waldo</span>
            <span>Woof the dog</span>
            <span>Wilma</span>
            <span>Wizard Whitebeard</span>
            <span>Odlaw</span>
          </div>
        </div>
      </div>
    );
  }
}
