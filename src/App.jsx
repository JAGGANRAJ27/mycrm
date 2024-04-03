import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Tickets from './pages/Tickets';
import Feedbacks from './pages/Feedbacks';
import AdminHome from './adminpages/AdminHome';
import AdminLayout from './components/AdminLayout';
import AdminProjects from './adminpages/AdminProjects';
import AdminInvoices from './adminpages/AdminInvoices';
import AdminPayments from './adminpages/AdminPayments';
import AdminProfile from './adminpages/AdminProfile';
import AdminTickets from './adminpages/AdminTickets';
import AdminFeedbacks from './adminpages/AdminFeedbacks';
import AdminErrorPage from './adminpages/AdminErrorPage';

const USER_TYPES = {
  ADMIN: 'ADMIN',
  USER: 'USER'
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for admin dashboard */}
        <Route path='/jsquarecrmnjadmin' element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="invoices" element={<AdminInvoices />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="tickets" element={<AdminTickets />} />
          <Route path="feedbacks" element={<AdminFeedbacks />} />
          <Route path='*' element={<AdminErrorPage />} />
        </Route>

        {/* Route for users */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
