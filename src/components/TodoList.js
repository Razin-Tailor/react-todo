import React, { Component } from 'react'

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Navbar from './Navbar';

export class TodoList extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <AddTodo/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}

export default TodoList
