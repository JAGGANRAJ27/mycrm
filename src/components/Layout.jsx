import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Buttonv1 from './Buttonv1'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-5 px-5">
                        <nav className=''>
                            <Link to="/"><Buttonv1>Dashboard</Buttonv1></Link>
                            <Link to="/projects"><Buttonv1>Projects</Buttonv1></Link>
                            <Link to="/invoices"><Buttonv1>Invoices</Buttonv1></Link>
                            <Link to="/payments"><Buttonv1>Payments</Buttonv1></Link>
                            <Link to="/tickets"><Buttonv1>Tickets</Buttonv1></Link>
                            <Link to="/feedbacks"><Buttonv1>Feedback</Buttonv1></Link>
                        </nav>
                    </div>
                    <div className="col-md-10 p-5" id='content'>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout