import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {test_examples} from "./test_examples";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn JavaScript
                    </a>
                    <button className="App-btn" onClick={this._onClick_4_JavaScript}>test</button>
                </header>
            </div>
        );
    }

    _onClick_4_JavaScript() {
        test_examples();
    }
}
