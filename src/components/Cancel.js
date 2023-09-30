import React from 'react'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <h1 className='font-martian font-bold text-xl'>Your Transaction was Canceled</h1>
      <button className="btn btn-success my-10"><Link to="/">Buy More</Link></button>

    </div>
  )
}

export default Cancel
