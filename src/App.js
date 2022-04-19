import "./index";
import React, { Component } from "react";
import Circles from "./components/Circles";
import GoButton from "./components/GoButton";
import StopButton from "./components/StopButton";
import Modal from "./components/Modal";
import Header from "./components/Header";
import startSong from "./Assets/vlad-gluschenko-good-times.mp3";
import stopSong from "./Assets/16 - Game Over.mp3";
import { circles } from "./components/circlesArray";

const startMusic = new Audio(startSong);
const stopMusic = new Audio(stopSong);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    pace: 1500,
    gameOn: false,
    gameOff: false,
  };

  timer = undefined;

  gameStarter = () => {
    this.nextCircle();
    startMusic.play();
    this.setState({
      gameOn: true,
    });
  };

  clickHandler = (i) => {
    console.log(this.state.rounds);
    if (i !== this.state.current) {
      this.gameEnder();
    } else {
      this.setState({
        score: this.state.score + 1,
        rounds: this.state.rounds - 1,
      });
    }
  };

  nextCircle = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(1, 6);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
      pace: this.state.pace * 0.95,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);

    if (this.state.rounds > 3) {
      this.gameEnder();
      return;
    }
  };

  gameEnder = () => {
    clearTimeout(this.timer);
    startMusic.pause();
    stopMusic.play();
    this.setState({
      gameOn: false,
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
        <div className="circles">
          {circles.map((circle) => (
            <Circles
              key={circle.id}
              circle={circle}
              active={this.state.current === circle.id}
              click={this.clickHandler}
              disabled={this.state.gameOn}
            />
          ))}
        </div>
        {!this.state.gameOn && <GoButton gameStart={this.gameStarter} />}
        {this.state.gameOn && <StopButton gameEnd={this.gameEnder} />}
        {this.state.gameOff && (
          <Modal reload={this.reloadGame} score={this.state.score} />
        )}
      </div>
    );
  }
}

export default App;

//Margit's example
{
  /* <div>
  <h1>Speed Game</h1>
  <p>Your score:</p>
  <div className="circles">
  {circles.map((circles, color, i) => (
  <Circle key={i} id={i} color={color} click={() => this.clickHandler(i)} active={this.state.current === i}
  ))}
    <Circles />
    <Circles />
    <Circles />
    <Circles />
  </div>
  <div>
    <Buttons>Start</Buttons>
    <Buttons>Stop</Buttons>
  </div>
</div>; */
}
