import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-rose-900 rounded-2xl p-4 shadow-lg text-white">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2 w-fit truncate">
          <h3 className="bg-amber-600 px-3 py-1 rounded-md text-sm font-semibold">
            {data.category}
          </h3>
          <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 text-sm rounded-md font-semibold transition">
            Failed
          </button>
        </div>
        <h4 className="font-bold w-[40%] text-right">{data.taskDate}</h4>
      </div>

      <h2 className="mt-3 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-rose-100 text-sm leading-snug">
        {data.taskDescription}
      </p>
    </div>
  )
}

export default FailedTask
