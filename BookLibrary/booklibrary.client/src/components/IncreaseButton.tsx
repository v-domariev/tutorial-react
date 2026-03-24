import type { Dispatch, SetStateAction } from 'react';

type IncreaseButtonProps = {
    setCount: Dispatch<SetStateAction<number>>;
};

export function IncreaseButton({ setCount }: IncreaseButtonProps) {
    function increaseValueHandler() {
        setCount((prev) => prev + 1);
    }

    return (
        <button type="button" onClick={increaseValueHandler}>
            +
        </button>
    );
}
