import React, {useEffect} from "react";

const CounterView = (props) => {
    const {countValue, handleIncrement} = props;
    useEffect(() => {
        console.log('useEffect called from CounterView');
    })
    return (
        <div>
            <h2 className={'value'}>{countValue}</h2>
            <button onClick={() => handleIncrement(-1)}>Modify -1</button>
            <button onClick={() => handleIncrement(1)}>Modify +1</button>
        </div>
    )
};

export default CounterView;