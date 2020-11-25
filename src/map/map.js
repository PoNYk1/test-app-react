import React from "react";
import MapElem from "../map-elem";

import "./map.css";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: [
        { id: 1, state: undefined },
        { id: 2, state: undefined },
        { id: 3, state: undefined },
        { id: 4, state: undefined },
        { id: 5, state: undefined },
        { id: 6, state: undefined },
        { id: 7, state: undefined },
        { id: 8, state: undefined },
        { id: 9, state: undefined }
      ],
      winCombinations: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 5, 9],
        [7, 5, 3],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ],
      his: [],
      draw: 0,
      player: true
    };
  }

  deductWinner = (arr) => {
    const { winCombinations } = this.state;
    const { setWinner } = this.props;

    winCombinations.forEach((item) => {
      const [a, b, c] = item;
      let items = arr.map((obj) => {
        if (obj.id === a || obj.id === b || obj.id === c) {
          return obj;
        }
      });

      let newArr = items.filter((i) => i !== undefined);

      const [q, w, e] = newArr;
      if (q.state === w.state && w.state === e.state) {
        if (q.state) {
          setWinner(true);
        } else if (q.state === false) {
          setWinner(false);
        }
      }
      this.findDraw();
    });
  };

  findDraw = () => {
    let i = this.state.draw;
    i++;
    console.log(i);
    i === 9 ? this.props.setWinner("draw") : i;
    this.setState({
      draw: i
    });
  };

  recordHistory = (id, state) => {
    this.setState(({ mapData }) => {
      const updateElem = {
        id: id,
        state: state
      };
      const index = mapData.findIndex((el) => el.id === id);

      const newArr = [
        ...mapData.slice(0, index),
        updateElem,
        ...mapData.slice(index + 1)
      ];

      this.deductWinner(newArr);
      return {
        mapData: newArr
      };
    });
  };

  togglPlayer = () => {
    this.props.playerState(!this.state.player);

    this.setState(({ player }) => {
      return {
        player: !player
      };
    });
  };

  render() {
    const { mapData, player } = this.state;

    const elements = mapData.map((item) => {
      return (
        <MapElem
          {...item}
          setStatePlayer={this.togglPlayer}
          player={player}
          calculateWinner={this.recordHistory}
        />
      );
    });
    return <div className="Map">{elements}</div>;
  }
}
