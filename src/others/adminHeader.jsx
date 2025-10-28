import React, { useState, useEffect } from 'react'

const AdminHeader = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!props.data) {
      setUsername('Admin')
    } else {
      setUsername(props.data.name)
    }
  }, [props.data])

  const logoutuser = () => {
    localStorage.removeItem('loggedInUSer')
    props.Changeuser('')
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 w-full h-auto sm:h-[14%] ">
      
      {/* Left Section — Always Left Aligned */}
      <div className="w-full sm:w-auto text-left">
        <h1 className="text-2xl">
          Hello<br />
          <span className="font-bold text-3xl text-blue-500">{username} 👋</span>
        </h1>
      </div>

      {/* Right Section */}
     <div className="flex text-xl flex-nowrap justify-center items-center gap-2 sm:gap-6 w-full sm:w-auto overflow-hidden sm:text-lg">
        <button 
          onClick={() => props.changeView('create')} 
          className="px-3 text-blue-400  font-bold underline underline-offset-6 decoration-white py-1 rounded-xl font-semibold"
        >
          Create
        </button>
        <button 
          onClick={() => props.changeView('alltask')} 
          className="px-3 text-blue-400  font-semibold underline underline-offset-6 decoration-white py-1 rounded-xl"
        >
          Status
        </button>
        <button 
          onClick={() => props.changeView('employees')} 
          className="px-3 text-blue-400  font-semibold underline underline-offset-6 decoration-white py-1 rounded-xl"
        >
          Employees
        </button>
        <button 
          onClick={logoutuser} 
          className="bg-blue-600 px-3 py-2 rounded-xl font-semibold"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default AdminHeader
