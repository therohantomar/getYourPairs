import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
const Signin = () => {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =useAuth0();

    if(error){
        return(<h1>there was an error{error}</h1>)
    }

    if(user){
        return(<h1>{user}</h1>)
    }
    if(isAuthenticated){
        return (<div>true</div>)
    }


  return (
    <div>
      <button onClick={()=>loginWithRedirect()}>login</button>
    </div>
  )
}

export default Signin
