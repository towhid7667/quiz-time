import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/ideas.png'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    Quiz Time
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/topic">Topic</Link>
                        <Link className="nav-link" to="/statistic">Statistic</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar