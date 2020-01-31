import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// EXAMPLE 1: Hello World
/**
 * Simple rendering of a heading in the title section of the html
 */
ReactDOM.render(
    <h1>~Hi, Tech Together~</h1>
    ,document.getElementById('title')
);


// Components
// EXAMPLE 2: Index Page component
import indexPageComponent from './components/indexPageComponent.js'

// EXAMPLE 3: To-do list
import todoListParentComponent from './components/todoListExample/todoListParentComponent.js'


/**
 * Mapping of components to routes and rendering in the body section of the html
 */
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={indexPageComponent} />
      <Route exact path="/todo" component={todoListParentComponent} />
    </div>
  </Router>
  , document.getElementById('body')
);
