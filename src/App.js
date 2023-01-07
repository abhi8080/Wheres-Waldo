import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoGraph from "./components/Photograph";
import Home from "./components/Home";
import GameOver from "./components/GameOver";
import LeaderBoard from "./components/LeaderBoard";
import getLocation from "./firebaseModel";
let xCoordinateClicked = 0;
let yCoordinateClicked = 0;
let xCoordinateOnScreen = 0;
let yCoordinateOnScreen = 0;

document.addEventListener("click", (event) => {
  if (event.target.id == "photo") photoIsClicked(event);
  else if (event.target.id == "view-characters") openCharactersBox();
  else if (event.target.classList.contains("close-button"))
    closeCharactersBox();
  else if (event.target.id == "leaderboard")
    document.getElementById("overlay").classList.remove("active");
  else if (event.target.classList.contains("character")) {
    const coordinates = getLocation(`${event.target.id}`);

    coordinates.then((coordinate) => {
      if (
        isXcoordinateInRange(coordinate.xValue, xCoordinateClicked) &&
        isYcoordinateInRange(coordinate.yValue, yCoordinateClicked)
      ) {
        placeMarker(xCoordinateOnScreen, yCoordinateOnScreen);
        event.target.style.backgroundColor = "lightgreen";
        if (isGameOver()) {
          const gameOver = document.getElementById("game-over");
          gameOver.click();
          document.getElementById("gameOver-box").classList.add("active");
          document.getElementById("overlay").classList.add("active");
        }
      } else displayIncorrect();
    });
    document.getElementById("target-box").classList.remove("targBoxActive");
    document.getElementById("dropdown-select").classList.remove("active");
  }
});

function isGameOver() {
  let gameOver = true;
  let characters = document.getElementsByClassName("character");
  Array.prototype.forEach.call(characters, (character) => {
    if (character.style.backgroundColor != "lightgreen") gameOver = false;
  });

  return gameOver;
}

function displayIncorrect() {
  const incMessage = document.getElementById("incorrect-message");
  incMessage.classList.add("active");
  setTimeout(() => {
    incMessage.classList.remove("active");
  }, 1500);
}
function placeMarker(xValue, yValue) {
  const photo = document.getElementById("photo");
  const marker = document.createElement("div");
  xValue = xValue - 5;
  yValue = yValue - 5;
  marker.classList.add("correctMarker");
  marker.style.left = `${xValue}px`;
  marker.style.top = `${yValue}px`;
  photo.appendChild(marker);
}

function isXcoordinateInRange(characterXcoordinate, xOnScreen) {
  if (
    xOnScreen > characterXcoordinate - 10 &&
    xOnScreen < characterXcoordinate + 10
  )
    return true;
  else return false;
}

function isYcoordinateInRange(characterYcoordinate, yOnScreen) {
  if (
    yOnScreen > characterYcoordinate - 10 &&
    yOnScreen < characterYcoordinate + 10
  )
    return true;
  else return false;
}

function openCharactersBox() {
  const charactersBox = document.getElementById("characters-picture");
  const overlay = document.getElementById("overlay");
  charactersBox.classList.add("active");
  overlay.classList.add("active");
}

function closeCharactersBox() {
  const charactersBox = document.getElementById("characters-picture");
  const overlay = document.getElementById("overlay");
  charactersBox.classList.remove("active");
  overlay.classList.remove("active");
}

function photoIsClicked(event) {
  xCoordinateOnScreen = event.clientX;
  yCoordinateOnScreen = event.clientY;
  document.getElementById("target-box").classList.add("targBoxActive");
  const topForTargetBox = event.clientY - 7;
  const leftForTargetBox = event.clientX - 7;
  const topForSelectTarget = event.clientY + 15;
  const leftForSelectTarget = event.clientX + 15;
  document.getElementById("target-box").style.top = `${topForTargetBox}px`;
  document.getElementById("target-box").style.left = `${leftForTargetBox}px`;
  document.getElementById("dropdown-select").classList.add("active");
  document.getElementById(
    "dropdown-select"
  ).style.top = `${topForSelectTarget}px`;
  document.getElementById(
    "dropdown-select"
  ).style.left = `${leftForSelectTarget}px`;

  let rect = event.target.getBoundingClientRect();
  xCoordinateClicked = xCoordinateOnScreen - rect.left;
  yCoordinateClicked = yCoordinateOnScreen - rect.top;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { minutes: 0, seconds: 0 };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <>
                <PhotoGraph
                  setScore={(min, sec) => {
                    this.setState({ minutes: min, seconds: sec });
                  }}
                />
                <GameOver
                  seconds={this.state.seconds}
                  minutes={this.state.minutes}
                />
              </>
            }
          />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
