import React, { useState } from 'react'
import AdminHeader from '../../others/adminHeader'
import Createtask from '../../others/Createtask'
import Alltask from '../../others/Alltask'
import Employeeslist from '../../others/Employeeslist'

const Admindash = (props) => {
  const [view, setView] = useState('create') // 'create' or 'alltask'

   const scrollClass =
    view === 'create'
      ? '' // No scroll for create task
      : 'overflow-y-auto'
  return (
    <div className='flex flex-col p-5 h-[100vh] bg-gray-950 w-full'>
   
        <AdminHeader Changeuser={props.Changeuser} changeView={setView} />
      <div className={`flex-1 p-5 ${scrollClass}`}>
        {view === 'create' && <Createtask />}
        {view === 'alltask' && <Alltask />}
        {view === 'employees' && <Employeeslist />}
      </div>
     
      
    </div>
  )
}

export default Admindash
