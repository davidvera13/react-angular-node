import React from 'react';
import ReactDOM from '../node_modules/react-dom';
import './index.css';
import App from './components/app-component/App'
import CounterApp from './components/count-component/CounterApp'
import reportWebVitals from './reportWebVitals';


// const h2Element = React.createElement('h2', null, 'Have a nice day');
// const element = React.createElement('h1', {className: 'title'}, 'Hello world', h2Element);
const rootElement = document.getElementById('root')
const countElement = document.getElementById('counter')
// ReactDOM.render(element, rootElement)
// ReactDOM.render(
//     <div className={'title'}>
//         Hello world
//         <h2>Have a nice day</h2>
//     </div>,
//     rootElement)

// using functional component => can be imported from external js file (component> app-component)
// function App(props) {
//     return (
//         <div className={props.className}>
//             Hello world
//             <h2>Have a nice day</h2>
//         </div>
//     )
// }
// ReactDOM.render(React.createElement(App, {className: 'title'}, null), rootElement)
ReactDOM.render(<App className = 'title' />, rootElement)
ReactDOM.render(<CounterApp />, countElement)

reportWebVitals();
