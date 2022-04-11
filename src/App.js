import "./index";
import React, { Component } from "react";
import Circles from "./components/Circles";
import Buttons from "./components/Buttons";
import Modal from "./components/Modal";
import Header from "./components/Header";
import startSong from "./Assets/vlad-gluschenko-good-times.mp3";
import stopSong from "./Assets/16 - Game Over.mp3";

class App extends Component {
  state = {
    startMusic: {
      startAudio: new Audio(startSong),
      isPlaying: false,
    },
    stopMusic: {
      stopAudio: new Audio(stopSong),
      isPlaying: false,
    },
  };

  gameStarter = () => {
    let isPlaying = this.state.startMusic.isPlaying;
    if (!isPlaying) {
      this.state.startMusic.startAudio.play();
    }
    this.setState({ ...this.state.startMusic, isPlaying: true });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Circles />
        <Buttons gameStart={this.gameStarter} />
        <Modal />
      </div>
    );
  }
}

export default App;
