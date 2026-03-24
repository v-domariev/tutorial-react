import { useState } from "react";
import { DecreaseButton } from "./DecreaseButton";
import { IncreaseButton } from "./IncreaseButton";

export function NumberCounter() {

    const [counter, setCounter] = useState(0);
    return <>
        <label>Current number:{counter}</label>
        <DecreaseButton setCount={setCounter} />
        <IncreaseButton setCount={setCounter} />
    </>;
}