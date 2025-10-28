import React from 'react'
import { AuthContext } from '../../context/Authprovider';
import { useContext } from 'react';
const NewTask = ({data}) => {
   const [userdata, setuserdata] = useContext(AuthContext);
const updateTaskStatus = (statusType) => {
   
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUSer"));
    const currentEmp = loggedIn?.data;

 


    const updatedEmployees = userdata.map((emp) => {
      if (emp.id === currentEmp.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle) {
            if (statusType === "accept") {
              return { ...task, active: true, newTask: false,failed:false };
            } else if (statusType === "reject") {
              return { ...task, active: false, newTask: false,failed:true };
            }
          }
          return task;
        });

        const newCounts = {
          active: updatedTasks.filter(t => t.active).length,
          newTask: updatedTasks.filter(t => t.newTask).length,
          completed: updatedTasks.filter(t => !t.active && !t.failed && !t.newTask).length,
          failed: updatedTasks.filter(t => t.failed).length
        };

        return { ...emp, tasks: updatedTasks, taskCounts: newCounts };
      }
      return emp;
    });

  
    setuserdata(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    const updatedCurrentEmp = updatedEmployees.find(e => e.id === currentEmp.id);
    localStorage.setItem("loggedInUSer", JSON.stringify({ role: "employee", data: updatedCurrentEmp }));


  };
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-indigo-700 rounded-2xl p-4 shadow-lg text-white hover:shadow-xl transition">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-900 px-3 py-1 rounded-md text-sm font-semibold">
         {data.category}
        </h3>
        <h4 className="font-bold text-indigo-100">{data.taskDate}</h4>
      </div>

      {/* Title & Description */}
      <div className="mt-3">
        <h2 className="text-xl font-semibold">{data.taskTitle}</h2>
        <p className="mt-2 text-indigo-50 text-sm leading-snug">
          {data.taskDescription}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between mt-5 ">
        <button className="bg-emerald-800 hover:bg-emerald-500 text-white px-3 py-1 text-sm rounded-md font-semibold transition shadow-lg" onClick={() => updateTaskStatus("accept")}>
          Accept
        </button>
        <button className="bg-red-600 hover:bg-rose-500 text-white px-3 py-1 text-sm rounded-md font-semibold transition shadow-lg" onClick={() => updateTaskStatus("reject")}>
          Reject
        </button>
      </div>
    </div>
  )
}

export default NewTask
