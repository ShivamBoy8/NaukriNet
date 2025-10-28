import React, { useState } from 'react'
import { useEffect } from 'react'
import { setLocalStorage } from '../utils/localstorage'
const Header = (props) => {
  const [username,setUsername]=useState('')
  useEffect(() => {
    if (!props.data) {
      setUsername('Admin')
    } else {
      setUsername(props.data.name)
    }
  }, [props.data])

const logoutuser = () => {
  localStorage.removeItem('loggedInUSer'); 
  props.Changeuser(''); 
}

  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl'>Hello<br/><span className='font-bold text-3xl text-blue-500 '>{username}👋</span></h1>
      <button onClick={logoutuser} className='bg-blue-600 px-3 py-2 border border-none rounded-xl font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
