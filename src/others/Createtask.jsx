import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/Authprovider';

const Createtask = () => {
  const [userdata, setuserdata] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const submithandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      taskDescription: description,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };

    if (!userdata) {
      console.error('No user data found');
      return;
    }

    const updatedData = userdata.map((emp) => {
      if (emp.name === assignTo) {
        const updatedTasks = [...(emp.tasks || []), newTask];
        const updatedCounts = {
          ...emp.taskCounts,
          newTask: emp.taskCounts.newTask + 1,
        };

        return { ...emp, tasks: updatedTasks, taskCounts: updatedCounts };
      }
      return emp;
    });

    setuserdata(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    // Clear inputs
    setTaskTitle('');
    setAssignTo('');
    setTaskDate('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="bg-blue-950 h-full mt-9 rounded-t-4xl p-5 flex justify-center items-center">
      <form
        onSubmit={submithandler}
        className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-[90%] gap-6"
      >
        {/* LEFT SIDE */}
        <div className="sm:w-1/2 w-full flex flex-col items-center sm:items-start">
          {/* Task Title */}
          <div className="w-4/5 mb-2">
            <h3 className="text-lg font-semibold text-blue-200 mb-1">
              Task Title
            </h3>
            <input
              className="text-sm py-1 px-2 w-full border-2 rounded outline-none bg-transparent border-gray-300"
              type="text"
              placeholder="Create UI"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="w-4/5 mb-2">
            <h3 className="text-lg font-semibold text-blue-200 mb-1">Date</h3>
            <input
              className="text-sm py-1 px-2 w-full border-2 rounded outline-none bg-transparent border-gray-300"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          {/* Assign To */}
          <div className="w-4/5 mb-2">
            <h3 className="text-lg font-semibold text-blue-200 mb-1">
              Assign To
            </h3>
            <select
              className="text-sm py-1 px-2 w-full border-2 rounded outline-none bg-transparent border-gray-300 text-white"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            >
              <option value="">-- Choose Employee --</option>
              {userdata &&
                userdata.map((emp, index) => (
                  <option className="text-black" key={index} value={emp.name}>
                    {emp.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Category */}
          <div className="w-4/5 mb-2">
            <h3 className="text-lg font-semibold text-blue-200 mb-1">
              Category
            </h3>
            <input
              className="text-sm py-1 px-2 w-full border-2 rounded outline-none bg-transparent border-gray-300"
              type="text"
              placeholder="dev, backend, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sm:w-1/2 w-full flex flex-col items-center sm:items-start">
          <div className="w-4/5 mb-2">
            <h3 className="text-lg font-semibold text-blue-200 mb-1">
              Description
            </h3>
            <textarea
              className="h-44 text-sm py-1 px-2 border-2 w-full rounded outline-none bg-transparent border-gray-300"
              placeholder="Describe the task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 py-3 font-semibold hover:bg-green-700 px-5 rounded-xl text-lg mt-4 w-4/5"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
