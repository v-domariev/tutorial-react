import { Square } from "../Square";
export function Board() {

    let row = [];
    for (let i = 0; i < 3; i++) {
        row.push(<Square value={i} ></Square >);
    }

    return <>
        <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
        <div className="board-row">{row}</div>
    </>;
}