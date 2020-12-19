import React, { Component } from 'react'
// import {Link} from 'react-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between bg-dark p-2">
                <button className="btn btn-primary btn-lg">Home</button>
                <button className="btn btn-primary btn-lg">About</button>
            </div>
        )
    }
}

export default Navbar
