import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import Employeedash from './components/Dashboard/employeedash'
import Admindash from './components/Dashboard/admindash'
import { setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/Authprovider'
const App = () => {

  const[user,setUser]=useState(null)
  const [loggedinuserdata,setloggedinuserdata]=useState(null)
  const [userdata,setuserdata]=useContext(AuthContext)
  useEffect((()=>{
    if(userdata){
      const loggedinuser=localStorage.getItem("loggedInUSer")
      if(loggedinuser){
        const userData=JSON.parse(loggedinuser)
        setUser(userData.role)
        setloggedinuserdata(userData.data)
      }
    }
  }),[userdata])

  const handlelogin= (email,password)=>{
    if(email=="admin@gmail.com" && password=='123'){
     setUser('admin')
     localStorage.setItem("loggedInUSer",JSON.stringify({role:'admin'}))
    }else if(userdata){
      const employee=userdata.find((e) => e.email === email && e.password === password)
     if (employee) {
  setUser('employee');
  setloggedinuserdata(employee);
  localStorage.setItem("loggedInUSer", JSON.stringify({ role: 'employee',data:employee }));
}

      

    }
      else{
      alert("invalid user")
    }

  }
  return (
    <>
    {!user?<Login handlelogin={handlelogin}/>:''}

    {user=='admin'?<Admindash Changeuser={  setUser}/>: (user=='employee'?<Employeedash Changeuser={  setUser} data={loggedinuserdata}/>:null) }
    </>
  )
}

export default App
