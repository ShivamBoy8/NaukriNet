import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider'

const Employeeslist = () => {
  const [userdata] = useContext(AuthContext)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {userdata.map((employee) => (
        <div
          key={employee.id}
          className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4"
        >
          {/* Profile Picture */}
          <img
            src={employee.profilePic}
            alt={employee.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800">{employee.name}</h2>

          {/* Designation */}
          <p className="text-gray-500 font-semibold mb-4">{employee.designation}</p>

          {/* Info Box */}
          <div className="w-full bg-white text-black rounded-lg p-4 text-left space-y-2">
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold mb-0.5">Department</p>
              <p className="text-gray-800 font-bold mb-1">{employee.department}</p>
            </div>
            <p className="text-gray-600 font-semibold mb-1">{employee.email}</p>
            <p className="text-gray-600 font-semibold mb-2">{employee.contact}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Employeeslist
