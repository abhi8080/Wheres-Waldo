import React from "react";

import "../styles/GameOver.css";

export default class GameOver extends React.Component {
  render() {
    return <div id="gameOver-box">{this.props.seconds}</div>;
  }
}
