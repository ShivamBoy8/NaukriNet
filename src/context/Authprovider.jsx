import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
export const AuthContext=createContext()
const Authprovider = ({children}) => {

  const[userdata,setuserdata]=useState(null)

  useEffect(()=>{
    setLocalStorage()
    const {employees}=getLocalStorage()
    setuserdata(employees)
  },[])
 
  return (
    <div>
      <AuthContext.Provider value={[userdata,setuserdata]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default  Authprovider
