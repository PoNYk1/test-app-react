import React from "react";
import "./map-elem.css";

export default class MapElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clases: "map-elem",
      close: false,
      playerState: undefined
    };
  }

  setClass = () => {
    const { setStatePlayer, calculateWinner, id, player } = this.props;
    if (this.state.close === false) {
      setStatePlayer();
      calculateWinner(id, player);
      if (player) {
        this.setState(({ clases }) => {
          let i = (clases += " blue");
          return {
            close: true,
            clases: i,
            playerState: player
          };
        });
      } else {
        this.setState(({ clases }) => {
          let i = (clases += " red");
          return {
            close: true,
            clases: i,
            playerState: player
          };
        });
      }
    } else {
      console.log(this.state.playerState);
    }
  };

  render() {
    let { clases, playerState } = this.state;

    return (
      <div
        className={clases}
        onClick={this.setClass}
        playerState={playerState}
      ></div>
    );
  }
}
