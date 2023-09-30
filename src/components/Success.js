import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <h1 className='font-martian text-xl font-bold'>Your Transaction is successfull</h1>
      <button className="btn btn-error my-10"><Link to="/">Shop More</Link></button>

    </div>
  )
}

export default Success
