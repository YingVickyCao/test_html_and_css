import React from 'react'
import "./Game.css"

// Parent -> Child : props
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol></ol>
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={i} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    let value = this.props.value;
    return (
      <button className="square" onClick={
        function () {
          alert('click ' + value);
        }}>
        {this.props.value}
      </button>
    );
  }
}

export default Game;