import React, { Component } from 'react'
import {Link} from 'react-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <Link className="nav-link active" >Todo Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >About</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar
