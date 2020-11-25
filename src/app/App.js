import React from "react";
import Map from "../map";
import Header from "../header";
import WinnerWindow from "../winner-window";

import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerState: undefined,
      winner: undefined
    };
  }

  playerStateHeader = (player) => {
    this.setState(() => {
      return {
        headerState: player
      };
    });
  };
  winnerState = (winner) => {
    this.setState({
      winner: winner
    });
  };
  render() {
    const { headerState, winner } = this.state;

    return (
      <div className="App container">
        <WinnerWindow winner={winner} />
        <Header playerState={headerState} />
        <Map
          playerState={this.playerStateHeader}
          setWinner={this.winnerState}
        />
      </div>
    );
  }
}
