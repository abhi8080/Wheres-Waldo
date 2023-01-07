import React from "react";
import { getPlayers } from "../firebaseModel";
import "../styles/LeaderBoard.css";
import { Link } from "react-router-dom";
export default class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = { leaderBoard: [] };
  }
  async componentDidMount() {
    this.setState({ leaderBoard: await getPlayers() });
  }
  render() {
    function Player(value, index) {
      return (
        <tr key={index}>
          <td style={{ margin: "10px" }}>{value.name}</td>
          <td style={{ margin: "10px" }}>{value.time}</td>
        </tr>
      );
    }

    return (
      <div className="highscoreView">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.state.leaderBoard.map(Player)}</tbody>
        </table>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
