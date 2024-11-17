import { useState } from "react";
import { Square } from "../Square";
export function Board() {


    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    let gameStatus = "";
    if (winner) {
        gameStatus = "Winner: " + winner;
    } else {
        gameStatus = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(indexSqueare) {
        const nextSquares = squares.slice();
        if (nextSquares[indexSqueare] || calculateWinner(squares)) {
            return;
        }

        nextSquares[indexSqueare] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    // let row = [];
    // let j = 0;
    // for (let i = 0; i < 3; i++) {
    //     row.push(<Square value={squares[j]} onSquareClick={() => handleClick(0 + j)}></Square>);
    //     j++;
    // }

    return <>
        {/* <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
         */}

        <div className="status">{gameStatus}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </>;



    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}