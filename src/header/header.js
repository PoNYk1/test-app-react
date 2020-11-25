import React from "react";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBar: ["red", "blue"]
    };
  }

  render() {
    const { statusBar } = this.state;
    const { playerState } = this.props;

    let string, barClass;

    const setClass = (newClass) => {
      barClass = " ";
      barClass = newClass;
    };

    if (playerState !== undefined) {
      if (playerState) {
        string = statusBar[1];
        setClass(" blue");
      } else {
        string = statusBar[0];
        setClass(" red");
      }
    } else {
      string = "someone";
    }

    return (
      <div className="Header">
        <h1>Cubes</h1>
        <div>
          Walks now <span className={barClass}>{string}</span>
        </div>
      </div>
    );
  }
}
