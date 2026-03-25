import type { Dispatch, SetStateAction } from 'react';

type DecreaseButtonProps = {
    setCount: Dispatch<SetStateAction<number>>;
};

export function DecreaseButton({ setCount }: DecreaseButtonProps) {
    function decreaseValueHandler() {
        setCount((prev) => {
            const temp = prev;
            return prev - 1;
        }
        );
    }

    return (
        <button type="button" onClick={decreaseValueHandler}>
            -
        </button>
    );
}
