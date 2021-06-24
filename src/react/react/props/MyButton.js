import React, { Component } from 'react';

// https://www.taniarascia.com/getting-started-with-react/

class MyButton extends Component {
    render() {
        // const { myData } = this.props;
        // return (<button>{myData}</button>);
        return (<button>{this.props.myData}</button>);
    }
}

export default MyButton;