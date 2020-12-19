import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div className="container-fluid p-2">
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add your Todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <input class="btn btn-outline-success" type="submit" id="button-addon2" value="Add"/>
                </div>
            </div>
            </div>
        )
    }
}

export default AddTodo
