import "./index";
import React, { Component } from "react";
import Circles from "./components/Circles";
import GoButton from "./components/GoButton";
import StopButton from "./components/StopButton";
import Modal from "./components/Modal";
import Header from "./components/Header";
import startSong from "./Assets/vlad-gluschenko-good-times.mp3";
import stopSong from "./Assets/16 - Game Over.mp3";

const startMusic = new Audio(startSong);
const stopMusic = new Audio(stopSong);

let timer;

class App extends Component {
  state = {
    level: "",
    circle: 0,
    score: 0,
    rounds: 0,
    active: "",
    pace: 1000,
    gameOn: false,
    gameOff: false,
  };

  gameStarter = () => {
    startMusic.play();
    this.setState({
      gameOn: true,
    });
  };

  gameEnder = () => {
    startMusic.pause();
    stopMusic.play();
    this.setState({
      gameOff: true,
    });
  };

  reloadGame = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Circles />
        {this.state.gameOn || <GoButton gameStart={this.gameStarter} />}
        {this.state.gameOn && <StopButton gameEnd={this.gameEnder} />}
        {this.state.gameOff && (
          <Modal reload={this.reloadGame} score={this.state.score} />
        )}
      </div>
    );
  }
}

export default App;
