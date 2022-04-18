import React from 'react'
import logo from '../static/logo.png'

export const Navbar = ({getData}) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logo} style={{borderRadius: "20px", maxHeight: "5vh"}}/>
                    <p>Nishant</p>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons" onClick={() => {getData(true)}}>
                            <a className="button is-primary">
                                <strong>Get Users</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
