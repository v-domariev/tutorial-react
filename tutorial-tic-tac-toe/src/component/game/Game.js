import { useState } from "react";
import { Board } from "../board/Board";

export function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {

        // let historyCopy = history.slice();
        // historyCopy.push(nextSquares);
        let nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        // if (history.length == 0) {
        //     return;
        // }
        // let xIsNextCopy = xIsNext;
        // for (let i = history.length - nextMove; i >= 0; i--) {
        //     xIsNextCopy = !xIsNextCopy;
        // }
        // const historyJumpedTo = history.slice(0, nextMove);
        setCurrentMove(nextMove);
        setXIsNext(xIsNext % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );

    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>

    );
}