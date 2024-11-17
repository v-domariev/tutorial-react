import { useState } from "react";
import { Square } from "../Square";
export function Board() {


    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(indexSqueare) {
        const nextSquares = squares.slice();
        nextSquares[indexSqueare] = "X";
        setSquares(nextSquares);
    }

    let row = [];
    let j = 0;
    // for (let i = 0; i < 3; i++) {
    //     row.push(<Square value={squares[j]} onSquareClick={() => handleClick(0 + j)}></Square>);
    //     j++;
    // }

    return <>
        {/* <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
         */}
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


}