import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
const Signin = () => {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =useAuth0();

    if(isAuthenticated){
        return (
            <div className='flex items-center w-full gap-4 min-h-screen'>
            <img src={user?.picture} alt={user?.name} className='rounded-xl' />
             <button  className={`btn btn-secondary`} onClick={()=>logout()}>logout</button>
            </div>
          )
    }

 if(!isAuthenticated){
    return (
        <div className='flex items-center w-full gap-4 min-h-screen'>
        <h1 className='font-martian font-bold text-xl'>login in socials</h1>
        <button  className={`btn btn-secondary`} onClick={()=>loginWithRedirect()}>login</button>
        </div>
      )
 }
}

export default Signin
