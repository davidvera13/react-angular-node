import React, {useEffect} from "react";

const generateColor = () => {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    // return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}
const CounterView = React.memo((props) => {
    const {countValue, handleIncrement} = props;
    useEffect(() => {
        console.log('useEffect called from CounterView');
    })
    return (
        <div style={{ background: generateColor() }}>
            <h2 className={'value'}>{countValue}</h2>
            <button onClick={() => handleIncrement(-1)}>Modify -1</button>
            <button onClick={() => handleIncrement(1)}>Modify +1</button>
        </div>
    )
});

export default CounterView;