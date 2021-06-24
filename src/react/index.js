import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// ReactDOM.render(<React.StrictMode> 
//   <App />
// </React.StrictMode>, document.getElementById("root"));

// reportWebVitals();

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>time is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.date.getElementById('root'));
// }

function Clock(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>time is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}
setInterval(tick, 1000);