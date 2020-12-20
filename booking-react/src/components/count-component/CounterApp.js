import React, {useState} from 'react'

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }
    state =  {
        count: 0
    }
    increment() {
        this.setState({
            count: this.state.count+1
        })

    }
    decrement() {
        this.setState({
            count: this.state.count-1
        })
    }

    componentDidMount() {
        alert("componentDidMount called");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("componentDidUpdate called \n prevProps: " + prevProps + "\nprevState: " + prevState + "\nSnapshot: " + snapshot)
    }

    update = (step) => {
        this.setState({
            count: this.state.count + step
        })
    }

    render() {
        //const count = this.state.count;
        const {count} = this.state;
        return(
            <div>
                <div className={'counter-app'}>
                    <h1 className={'value'}>
                        {this.state.count} or {count}
                    </h1>
                    <button onClick={() => this.decrement()}>Decrement</button>
                    <button onClick={() => this.increment()}>Increment</button>
                    <br />
                    <button onClick={() => this.update(-1)}>Decrement</button>
                    <button onClick={() => this.update(1)}>Increment</button>
                </div>
            </div>
        );
    }

}
// const CounterApp = () => {
//     const[count, setCount] = useState(0);
//     // destructurize
//     // const statesArray = useState(100);
//     // const count = statesArray[0];
//     // const setCount = statesArray[1];
//     const increment = () => {
//         setCount(count+1);
//     }
//     const decrement = () => {
//         setCount(count-1);
//     }
//
//     const modify = (step) => {
//         setCount(count + step);
//     }
//
//     const variant = (step) => () => setCount(count + step);
//
//
//     return (
//         <div>
//             <div className={'counter-app'}>
//                 <h1 className={'value'}>
//                     {count}
//                 </h1>
//                 <button onClick={decrement}>Decrement</button>
//                 <button onClick={increment}>Increment</button>
//                 <br />
//                 <button onClick={() => modify(-1)}>Modify -1</button>
//                 <button onClick={() => modify(1)}>Modify +1</button>
//                 <br />
//                 <button onClick={variant(-1)}>Modify -1</button>
//                 <button onClick={variant(1)}>Modify +1</button>
//             </div>
//         </div>
//     )
// }

export default CounterApp;