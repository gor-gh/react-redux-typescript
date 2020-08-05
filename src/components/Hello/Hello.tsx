import React from 'react';
import './Hello.css';

function getExclamationMarks(numChars = 1) {
    return Array(numChars + 1).join('!');
}

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
    if(enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic :)');
    }

    return (
        <div className='hello'>
            <div className='greeting'>
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>

    )
}

export default Hello;