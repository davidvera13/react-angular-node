import React from 'react';

// using classic function
// function App(props) {
//     return (
//         <div className={props.className}>
//             Hello world
//             <h2>Have a nice day</h2>
//         </div>
//     )
// }

// using arrow function
const App = (props) => {
    return (
        <div className={props.className}>
            Hello world
            <h2>Have a nice day</h2>
        </div>
    )
}

export default App;