// export default 
import { useState } from "react";
export function Square({ value, onSquareClick }) {
    // const [value, setValue] = useState(null);

    // function handleClick() {
    //     console.log("clicked!");
    //     setValue("X");
    // }
    // onClick={handleClick}
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}