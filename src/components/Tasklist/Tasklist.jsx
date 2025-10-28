import React from 'react'
import Accepttask from './accepttask'
import Newtask from './newtask'
import Completetask from './completetask'
import Failedtask from './failedtask'
const Tasklist = ({data}) => {
 console.log(data.id)
  return (

  <>
  
    <div id='tasklist' className=' h-[50%] flex w-full overflow-x-auto gap-5 py-5 mt-10 flex-nowrap'>
        {
        data.tasks.map((e,idx)=>{
          if(e.active && !e. newTask) return  <Accepttask key={idx} data={e} />
          if(e. newTask) return <Newtask key={idx} data={e}/>
          if(!e.active && e.failed && !e.Newtask) return   <Failedtask key={idx} data={e}/>
          if(!e.active && !e.failed) return  <Completetask key={idx} data={e}/>
        })
      }

       {/* <Accepttask/>
       <Newtask/>
       <Completetask/>
       <Failedtask /> */}
       
      
    </div>
  </>
  )
}

export default Tasklist
