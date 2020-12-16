import React, {useState} from 'react'

const CounterApp = () => {
    const[count, setCount] = useState(0);
    // destructurize
    // const statesArray = useState(100);
    // const count = statesArray[0];
    // const setCount = statesArray[1];
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }

    const modify = (step) => {
        setCount(count + step);
    }

    const variant = (step) => () => setCount(count + step);


    return (
        <div>
            <div className={'counter-app'}>
                <h1 className={'value'}>
                    {count}
                </h1>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
                <br />
                <button onClick={() => modify(-1)}>Modify -1</button>
                <button onClick={() => modify(1)}>Modify +1</button>
                <br />
                <button onClick={variant(-1)}>Modify -1</button>
                <button onClick={variant(1)}>Modify +1</button>
            </div>
        </div>
    )
}

export default CounterApp;