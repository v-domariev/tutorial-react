// export default 
import { useState } from "react";
export function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        console.log("clicked!");
        setValue("X");
    }
    return <button className="square" onClick={handleClick}>{value}</button>;
}