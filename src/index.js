import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './components/TodoList'
// import Navbar from './components/Navbar'

ReactDOM.render(
  // React.Fragment is a place holder
  <React.Fragment>
    {/* <Navbar/> */}
    <TodoList/>
  </React.Fragment>,
  document.getElementById('root')
);
