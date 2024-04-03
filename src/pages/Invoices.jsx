import React from 'react'
import Headerv1 from '../components/Headerv1'
import { Link } from 'react-router-dom'

const Invoices = () => {
  return (
    <div>
      <Headerv1>Invoices</Headerv1>
      <div className="invoice-content text-center">
        <h2>Currently invoices are not available</h2>
        <h2 className='pt-5'>Sorry for inconvenience</h2>
        <Link to='/'><button className='btn btn-primary my-5'>Go Back</button></Link>
      </div>
    </div>
  )
}

export default Invoices