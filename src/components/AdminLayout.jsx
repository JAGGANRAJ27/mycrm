import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../adminpages/Header'
import Buttonv1 from './Buttonv1'
import Footer from './Footer'

const AdminLayout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-5 px-5">
                        <nav className=''>
                            <Link to="/jsquarecrmnjadmin"><Buttonv1>Dashboard</Buttonv1></Link>
                            <Link to="/jsquarecrmnjadmin/projects"><Buttonv1>Projects</Buttonv1></Link>
                            <Link to="/jsquarecrmnjadmin/invoices"><Buttonv1>Invoices</Buttonv1></Link>
                            <Link to="/jsquarecrmnjadmin/payments"><Buttonv1>Payments</Buttonv1></Link>
                            <Link to="/jsquarecrmnjadmin/tickets"><Buttonv1>Tickets</Buttonv1></Link>
                            <Link to="/jsquarecrmnjadmin/feedbacks"><Buttonv1>Feedback</Buttonv1></Link>
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

export default AdminLayout