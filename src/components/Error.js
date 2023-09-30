import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
const Error = () => {
    const error=useRouteError()
  return (
    <div className='flex flex-col min-h-screen items-center  justify-center'>
    <h1 className='font-ubuntu text-4xl font-bold '>{error.status}</h1>
    <h1 className='font-ubuntu font-bold text-2xl'>{error.statusText}</h1>
    <h1 className='text-red-500'>{error.data}</h1>
    <button className='btn btn-neutral my-4'><Link to={"/"}>Go Back</Link></button>
      
    </div>
  )
}

export default Error
