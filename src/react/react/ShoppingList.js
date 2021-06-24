import React from 'react'
// Component Type 1 : Class Components
class ShoppingList extends React.Component {
    render(){
      return (
        <div className="shopping-list">
        {/* props:is short for properties */}
        <h1>Shopping List for {this.props.value}</h1>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
          </ul>
        </div>
      );
    }
  }

  export default ShoppingList;