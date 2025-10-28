import React, { useState ,useContext} from 'react'
import { AuthContext } from '../../context/Authprovider'
const Login = ({handlelogin}) => {
   const[email,setemail]=useState('')
     const[pass,setpass]=useState('')
     const [userdata] = useContext(AuthContext)
     


    const Submithandler=(e)=>{
         handlelogin(email,pass)
        e.preventDefault()
       
        setemail('')
        setpass('')
    }

      const handleSelect = (e) => {
    const selectedEmail = e.target.value
    const selectedEmp = userdata.find(emp => emp.email === selectedEmail)
    if (selectedEmp) {
      setemail(selectedEmp.email)
      setpass(selectedEmp.password)
    }
  }

  return (
    <div className='flex h-screen w-screen flex-col bg-gray-950 justify-center'>
      
      <div className=' w-full h-[30%] p-9 text-white flex justify-center flex-col'>
        <h1 className='text-6xl font-medium mb-2 tracking-wide'>Hello!</h1>
        <h3 className='text-2xl tracking-wide'>Welcome to organization</h3>
      </div>
      <div className='border-2 border-none  w-full h-[70%] bg-gray-200 rounded-t-4xl p-9'>
       
        <form className='flex flex-col justify-center items-center'
        onSubmit={(e)=>{
            Submithandler(e)
        }}
        >
           <h2 className='text-gray-900 w-[70%] font-bold text-3xl mb-6 mt-4'>Login</h2>
            <input
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
             required 
             className='text-gray-500 font-semibold  border border-2  outline-none placeholder:text-gray-500 mb-4 py-2 px-4 border-none bg-white rounded-2xl shadow-gray-300 shadow-sm w-[70%]' type="email" placeholder='ad@gmail.com'/>
            <input
            value={pass}
            onChange={(e)=>{
              console.log(userdata)
                setpass(e.target.value)
            }}
             required
               className='text-gray-500 font-semibold shadow-gray-300 shadow-sm w-[70%] border border-2  outline-none placeholder:text-gray-500 py-2 px-4 border-none bg-white rounded-2xl mb-6 ' type='password' placeholder='123'></input>
            <button className='text-white font-semibold shadow-gray-300 shadow-sm py-2 px-4 bg-gray-900 w-[70%] rounded-2xl'>Log in</button>
           
        </form>
        <div className='mt-4 flex flex-col justify-center items-center '>
          <select
            className="text-sm py-2 px-4  border-2 w-[70%] rounded-xl outline-none bg-gray-800 text-white"
            value={email}
            onChange={handleSelect}
          >
            <option value="" >-- Choose Employee --</option>
            {userdata?.map((emp, index) => (
              <option className="text-white" key={index} value={emp.email}>
                {emp.name}
              </option>
            ))}
          </select>
          <button   className="mt-2 text-sm py-2 px-4  border-2 w-[70%] rounded-xl outline-none bg-gray-800 text-white text-left" onClick={
            () => {
          setemail("admin@gmail.com")
          setpass("123")
        }}
         >-- Choose Admin --</button>
        </div>
      </div>
    </div>
  )
}

export default Login
