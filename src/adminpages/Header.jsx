import React from 'react'
import { Link } from 'react-router-dom'
import { blacklogo } from '../assets'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='header-nav'>
                <div className="container-fluid">
                    <Link to={'/jsquarecrmnjadmin'}><img src={blacklogo} alt="Logo" width={60} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-item m-2 nav-link" to="/jsquarecrmnjadmin/projects">Projects</Link>
                            <Link className="nav-item m-2 nav-link" to="/jsquarecrmnjadmin/invoices">Invoices</Link>
                            <Link className="nav-item m-2 nav-link" to="/jsquarecrmnjadmin/payments">Payments</Link>
                            <Link className="nav-item m-2 nav-link" to="/jsquarecrmnjadmin/profile">My-Profile</Link>
                        </ul>
                        <div className="profile d-flex align-items-center">
                            Jsquarecrm
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header