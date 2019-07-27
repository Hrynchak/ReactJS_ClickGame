import React, { Component } from 'react';
// App Components
import Scoreboard from './Components/Scoreboard';
import Board from './Components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      record: 0,
      message: "",
      classShake: "",
    }
  }

  handleScoreChange = () => {
    this.setState({
      currentScore: this.state.currentScore + 1,
      message: "Good choice!",
      classShake: "",
    });
  }

  handleGameOver = () => {
    // If this is a new record
    if (this.state.currentScore > this.state.record) {
      this.setState({ record: this.state.currentScore }); // Update record
    } 
    // Then, reset stats and message user
    this.setState({
      currentScore: 0,
      message: "Game Over!",
      classShake: "shake",
    });
  }

  handleUWin = () => {
    this.setState({
      currentScore: 0,
      record: 0,
      message: "Congratulations, you won!"
    });
  }

  render() {
    return (
      <div>
        <header>
        <h1>Click All Zombies</h1>
          <Scoreboard 
            score={this.state.currentScore} 
            record={this.state.record} 
            message={this.state.message} 
          />
        </header>
        <section>
          <Board 
            shake={this.state.classShake}
            scoreChange={this.handleScoreChange} 
            gameOver={this.handleGameOver}
            uWin={this.handleUWin} 
          />
        </section>
      </div>
    );
  }
}

export default App;
