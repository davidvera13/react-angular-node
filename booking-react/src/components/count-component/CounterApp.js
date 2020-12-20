import React, {useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import CounterView from "./CounterView";

// set is an object that keep only unique data
const functions = new Set();

const CounterApp = (props) => {
    const[count, setCount] = useState(0);
    const[whatever, setWhatever] = useState(42);
    //const title = props.title;
    const {title} = props;
    // this method will only called when a deps is changed
    useEffect(() => {
        console.log('useEffect called')
    }, [count])

    // const modify = (step) => {
    //     setCount(count + step);
    // }
    // const doWhatever = () => setWhatever(whatever + 1)

    const modify = useCallback((step) => {
        setCount(count + step);
    }, [count]);
    const doWhatever = useCallback(() => setWhatever(whatever + 1), [whatever]);

    functions.add(modify);
    functions.add(whatever)


    return (
        <div>
            <div className={'counter-app'}>
                <h1>{title}</h1>
                <CounterView
                    countValue = {count}
                    handleIncrement = {modify}
                />
                <button onClick={doWhatever}>Do something</button>
                <h1>count functions : {functions.size}</h1>
            </div>
        </div>
    )
}
CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}


// class CounterApp extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.increment = this.increment.bind(this);
//         // this.decrement = this.decrement.bind(this);
//     }
//     state =  {
//         count: 0
//     }
//     increment() {
//         this.setState({
//             count: this.state.count+1
//         })
//
//     }
//     decrement() {
//         this.setState({
//             count: this.state.count-1
//         })
//     }
//
//     componentDidMount() {
//         // alert("componentDidMount called");
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         // alert("componentDidUpdate called \n prevProps: " + prevProps + "\nprevState: " + prevState + "\nSnapshot: " + snapshot)
//     }
//
//     update = (step) => {
//         this.setState({
//             count: this.state.count + step
//         })
//     }
//
//     render() {
//         //const count = this.state.count;
//         const {count} = this.state;
//         //const title = this.props.title;
//         const {title} = this.props;
//         return(
//             <div>
//                 <div className={'counter-app'}>
//                     <h1>{title}</h1>
//                     <h2 className={'value'}>
//                         {this.state.count} or {count}
//                     </h2>
//                     <button onClick={() => this.decrement()}>Decrement</button>
//                     <button onClick={() => this.increment()}>Increment</button>
//                     <br />
//                     <button onClick={() => this.update(-1)}>Decrement</button>
//                     <button onClick={() => this.update(1)}>Increment</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default CounterApp;