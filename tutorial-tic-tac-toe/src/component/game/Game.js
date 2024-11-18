import { useState } from "react";
import { Board } from "../board/Board";

export function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {

        // let historyCopy = history.slice();
        // historyCopy.push(nextSquares);
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        if (history.length == 0) {
            return;
        }
        let xIsNextCopy = xIsNext;
        for (let i = history.length - nextMove; i >= 0; i--) {
            xIsNextCopy = !xIsNextCopy;
        }
        setXIsNext(xIsNextCopy);
        const historyJumpedTo = history.slice(0, nextMove);
        setHistory(historyJumpedTo);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li>
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