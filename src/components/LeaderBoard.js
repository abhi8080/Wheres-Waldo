import React from "react";
import Players from "./Players";
import { getPlayers } from "../firebase-config";
export default class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = { leaderBoard: [] };
  }
  async componentDidMount() {
    this.setState({ leaderBoard: await getPlayers() });
  }
  render() {
    return (
      <div className="board">
        <h1 className="leaderboard">LeaderBoard</h1>

        <Players LeaderBoard={this.state.leaderBoard} />
      </div>
    );
  }
}
