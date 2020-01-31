import React, { Component } from 'react';
import TodoListItemComponent from './todoListItemComponent.js';

/**
 * Parent component for a to-do list
 */
export default class todoListParentComponent extends Component {

  /**
   * Initial component state
   * We initialize the component with:
   *   - an empty array of items (empty to-do list)
   *   - a null current value (nothing in the input box)
   *
   * @type {{todoListArray: [], todoCurrentValue: null}}
   */
  state = {
    todoListArray: [],
    todoCurrentValue: null
  };


    /**
     * Action to take when a new event is submitted
     *  - Add current to-do value to to-do list array (in the component state)
     *  - Clear current to-do value state
     *
     * @param event
     */
  submitNewTodo = event => {
      event.preventDefault();
      this.setState((prevState) => ({
          todoListArray: [...prevState.todoListArray, prevState.todoCurrentValue],
          todoCurrentValue: null
      }));
  };

    /**
     * Action to take when input text box is updated
     *  - Set current to-do value state to input text box value
     *
     * @param event
     */
    handleChange = event => {
      this.setState({todoCurrentValue: event.target.value});
  };

  /**
   * Render the HTML on the page
   */
  render() {
    return (
      <div className="todo-main">
        <form>
        <h1> My TO-DO List! </h1>
            <input
                placeholder="Add a to-do"
                value={this.state.todoCurrentValue}
                onChange={this.handleChange}
            />
          <input
            type="button"
            className="button"
            value= "Add"
            onClick={this.submitNewTodo}
          />
        </form>
        <ul className="todo-list">
            {this.state.todoListArray.map(todoValue => (
               <TodoListItemComponent key={todoValue} todoItemValue={todoValue} />
            ))}
        </ul>
      </div>
    );
  }
}
