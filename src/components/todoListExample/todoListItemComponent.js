import React, { Component } from 'react';

/**
 * Component for a to-do list item
 */
export default class TodoListItemComponent extends Component {

    /**
     * Types for props
     */
    static propTypes = {
        todoItemValue: React.PropTypes.string
    };

  /**
   * Render the HTML on the page
   */
  render() {
    return (
        <div className="todo-item">
            <li> {this.props.todoItemValue} </li>
        </div>
    );
  }
}
