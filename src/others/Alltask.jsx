import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider'

const Alltask = () => {
  const [userdata,setuserdata]=useContext(AuthContext)
  return (

   <div className='mt-5 h-48'>
  {/* Header */}
  <div className='bg-blue-500 py-2 flex justify-between rounded px-8 mb-1.5 text-white font-semibold'>
    <h2 className='w-1/5 bg-blue-800 text-center py-1 px-2 rounded-l-sm'>Employee Name</h2>
    <h2 className='w-1/5 bg-blue-800 text-center py-1 px-2'>New Task</h2>
    <h2 className='w-1/5 bg-blue-800 text-center py-1 px-2'>Active Task</h2>
    <h2 className='w-1/5 bg-blue-800 text-center py-1 px-2'>Completed Task</h2>
    <h2 className='w-1/5 bg-blue-800 text-center py-1 px-2 rounded-r-sm'>Failed Task</h2>
  </div>

  {/* Body */}
  <div >
    {userdata.map((e, i) => (
      <div
        key={i}
        className={`flex justify-between px-8 py-2 mb-1.5 rounded ${
          i % 2 === 0 ? 'bg-blue-950 ' : 'bg-blue-900 '
        }`}
      >
        <h2 className='w-1/5 text-center font-medium text-white'>{e.name}</h2>
        <h3 className='w-1/5 text-center font-medium text-white '>{e.taskCounts.newTask}</h3>
        <h5 className='w-1/5 text-center font-medium text-white'>{e.taskCounts.active}</h5>
        <h5 className='w-1/5 text-center font-medium text-white'>{e.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-center font-medium text-white'>{e.taskCounts.failed}</h5>
      </div>
    ))}
  </div>
</div>

  )
}

export default Alltask
