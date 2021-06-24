import React from 'react'
import "./Game.css"

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(""),
            }],
            stepNumber: 0,
            isNext: true,
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move # ' + move : 'Go to game start';
            return (<li>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>);
        });

        let status;
        if (winner) {
            status = 'Winner :' + winner;
        }
        else {
            status = "Next player: " + (this.state.isNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                        onClick={(i) => this.handleSquareClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }


    handleSquareClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const copyied_squres = current.squares.slice();
        if (calculateWinner(copyied_squres) || copyied_squres[i]) {
            return;
        }
        copyied_squres[i] = this.state.isNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares: copyied_squres }]), // push  new item
            stepNumber: history.length,
            isNext: !this.state.isNext,
        });
    }


    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isNext: (step % 2) === 0,
        });
    }


}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} />
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

// Function Compoent:only have render() method and don't have itself own state.
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Game;