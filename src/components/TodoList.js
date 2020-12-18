import React, { Component } from 'react'

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export class TodoList extends Component {
    render() {
        return (
            <div className="container-fluid p-5">
                <AddTodo/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}

export default TodoList
