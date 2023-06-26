import React from 'react'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        To-Do-List (Task Manager)
                </a>
            </div>
        </nav>

    )
}
