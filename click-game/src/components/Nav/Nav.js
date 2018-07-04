import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn alignLeft">
        <a href="/clicky-game/">{props.title}</a>
      </li>
      {/* <li id="rw" >{props.correctIncorrect}</li> */}
      {
      props.correctIncorrect==="You guessed incorrectly!"?<b><li id="rw" className="incorrect">{props.correctIncorrect}</li></b>:<b><li className="correct" id="rw" >{props.correctIncorrect}</li></b>
      }

      <li className="alignRight">Score - Top: {props.topScore} | Current: {props.score}</li>

    </ul>
  </nav>
);

export default Nav;