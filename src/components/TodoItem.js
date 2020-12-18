import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                        </div>
                        <input type="text" className="form-control" placeholder="Add your Todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <input className="btn btn-outline-danger" type="submit" id="button-addon2" value="Delete"/>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default TodoItem
