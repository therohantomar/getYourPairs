import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import useScrollToTop from '../utility/hooks/useScrollToTop';
const Signin = () => {
     useScrollToTop()



    const { isLoading, isAuthenticated, user, loginWithRedirect, logout } =useAuth0();
     if(isLoading){
        return(
            <div className='flex flex-col items-center justify-center w-full gap-4 min-h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
            <h1>Authenticating......</h1>
            </div>
        )
     }
    if(isAuthenticated){
        return (
            <div className='flex flex-col items-center justify-center w-full gap-4 min-h-screen'>
            <img src={user?.picture} alt={user?.name} className='rounded-full' />
           <h1>name:{user?.name}</h1>
           <h1>name:{user?.email}</h1>
             <button  className={`btn btn-secondary`} onClick={()=>logout()}>logout</button>
            </div>
          )
    }

 if(!isAuthenticated){
    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 min-h-screen'>
        <h1 className='font-martian font-bold text-xl'>login in socials</h1>
        <button  className={`btn btn-secondary`} onClick={()=>loginWithRedirect()}>login</button>
        </div>
      )
 }
}

export default Signin
