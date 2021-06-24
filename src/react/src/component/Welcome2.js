import React, { Component } from 'react';

// Class Component
// ok
class Welcome2 extends React.Component {
  render() {
    return <h1> Hello,{this.props.name}</h1>;
  }
}


// class Welcome2 extends React.Component {
//   constructor(params) {
//     super(params);
//   }
//   render() {
//     // error:
//     return <h1> Hello,{this.params.name}</h1>;
//   }
// }

export default Welcome2;