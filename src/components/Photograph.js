import React from "react";

import "../styles/Photograph.css";

export default class PhotoGraph extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = { minutes: 0, seconds: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ seconds: this.state.seconds + 1 });
    if (this.state.seconds == 60) {
      this.setState({ seconds: 0 });
      this.setState({ minutes: this.state.minutes + 1 });
    }
    console.log(this.state.seconds);
  };
  render() {
    return (
      <div id="photograph-section">
        <nav>
          <div id="incorrect-message">Incorrect, try again</div>
          <button id="view-characters">
            View all characters {this.props.example}
          </button>
          <button
            id="game-over"
            onClick={() =>
              this.props.setScore(this.state.minutes, this.state.seconds)
            }
          ></button>
        </nav>
        <div id="photo">
          <div id="target-box">.</div>
          <div id="dropdown-select">
            <span className="character" id="waldo">
              Waldo
            </span>
            <span className="character" id="woof">
              Woof the dog(only tail visible)
            </span>
            <span className="character" id="wilma">
              Wilma
            </span>
            <span className="character" id="wizard">
              Wizard Whitebeard
            </span>
            <span className="character" id="odlaw">
              Odlaw
            </span>
          </div>
        </div>
      </div>
    );
  }
}
