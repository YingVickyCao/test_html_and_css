import React, { Component } from 'react';
import { test_Console } from './js/A';
import { testLodash } from './lodash/test_lodash';
import { testEs6 } from './es6/index';
import { testJS } from './js/index';
import { mock } from './mock/Mock';
import { testJest } from './jest/index';
import { testJson } from './json/index';
import { increment, decrement } from './Redux/PureReducers';
import ShoppingList from './react/ShoppingList';
import MyButton from './react/props/MyButton';
import Game from "./react/tutorial/Game";
// import Table from "./react/component/Table";
// import Table from "./react/component/Table2";
import Table from "./react/component/Table3";
import Welcome from "./react/component/Welcome";
import Welcome2 from "./react/component/Welcome2";
import { sum, withdraw } from "./react/pure"

// import { HookExample } from './reactExample/hooks';

// function App() {
//   return (
//     <div>
//       <p Shopping List Example ></p>
//       <ShoppingList/>
//       <p> Game Example</p>
//       <Game/>
//     </div>
//   );
// }


// export default App;


class App extends Component {
  _onClick = () => {
    // this._onClick_4_test_lodash();
    this._onClick_4_test_es6();
    // this._onClick_4_test_js();
    // this._onClick_4_mock();
    // this._onClick_4_Jest();
  };
  _onClick_4_test_lodash() {
    testLodash('reduce');
  }

  _onClick_4_test_es6() {
    testEs6('return_global_var_twice');
  }

  _onClick_4_test_js() {
    testJS();
  }

  _onClick_4_mock() {
    mock('convert');
  }

  _onClick_4_Jest() {
    testJest('sync');
  }

  _onClick_4_Json() {
    testJson();
  }

  render() {
    // this._onClick();
    const account = {
      total: 100
    }
    console.log("before:" + account.total);  // 100
    withdraw(account, 3);
    console.log("after:" + account.total); // 97

    const myButtonData = "Green Button";
    return (
      <div className='App'>
        <button className='App-header-btn' onClick={this._onClick_4_test_lodash}>
          Test Lodash
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_test_es6}>
          Test ES6
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_test_js}>
          Test JS
					</button>
        <button className='App-header-green-btn' id='click_green' onClick={this._onClick_4_test_js}>
          Cliek green
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_mock}>
          Mock
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_increment}>
          Mock Redux - Increment
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_Jest}>
          Test about Jest
					</button>

        <button className='App-header-btn' onClick={this._onClick_4_Json}>
          Test Json
					</button>


        <p Reac Example ></p>
        <ShoppingList />
        <p> Game Example</p>
        <Game />
        <Table />
        <MyButton myData={myButtonData} />

        {/*  Function Component */}
        <Welcome name="123"></Welcome>
        <Welcome2 name="123"></Welcome2>

        <p>sum(1, 3) = {sum(1, 3)}</p>
      </div>

    );
  }

  _onClick_4_increment() {
    increment();
  }
  _onClick_4_decrement() {
    decrement();
  }
}
export default App;