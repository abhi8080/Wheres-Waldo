import React from "react";

export default class Players extends React.Component {
  render() {
    return <div id="player">{Item(this.props.LeaderBoard)}</div>;
  }
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <h3 className="playerName">{value.name}</h3>
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
