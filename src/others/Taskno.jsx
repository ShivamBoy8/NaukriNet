import React from 'react'

const Taskno = ({data}) => {
  return (
    <div className=' mt-10 grid gap-5
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        w-full'>
      <div className="rounded-xl py-6 px-9 bg-indigo-700 text-white shadow-md flex flex-col justify-center">
  <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
  <h2 className="text-xl font-semibold">New Task</h2>
</div>


       <div className="rounded-xl y-6 px-9 bg-sky-700 text-white shadow-md flex flex-col justify-center">
    <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
    <h2 className="text-xl font-semibold">Active Task</h2>
  </div>

  <div className="rounded-xl py-6 px-9 bg-emerald-800 text-white shadow-md flex flex-col justify-center">
    <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
    <h2 className="text-xl font-semibold">Completed Task</h2>
  </div>

  <div className="rounded-xl  py-6 px-9 bg-rose-900 text-white shadow-md flex flex-col justify-center">
    <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
    <h2 className="text-xl font-semibold">Failed Task</h2>
  </div>
    </div>
  )
}

export default Taskno
