import React from 'react'

const Completetask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-emerald-800 rounded-2xl p-4 shadow-lg text-white">
  <div className="flex justify-between items-start">

  <div className="flex flex-col gap-2">
    <h3 className="bg-red-600 px-3 py-1 rounded-md text-sm font-semibold">
      {data.category}
    </h3>
    <button className="bg-emerald-200 hover:bg-emerald-400 text-green-900 px-3 py-1 text-sm rounded-md font-semibold shadow-md hover:shadow-lg transition">
      Completed
    </button>
  </div>

  <h4 className="font-bold text-right">{data.taskDate}</h4>
</div>

  <h2 className="mt-3 text-xl font-semibold">{data.taskTitle}</h2>
  <p className="mt-2 text-emerald-100 text-sm leading-snug">
    {data.taskDescription}
  </p>
</div>

  )
}

export default Completetask

