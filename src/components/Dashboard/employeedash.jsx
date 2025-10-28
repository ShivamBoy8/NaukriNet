import React from 'react'
import Header from '../../others/Header'
import Taskno from '../../others/Taskno'
import Tasklist from '../Tasklist/Tasklist'
const Employeedash = (props) => {
  
  return (
    <div className='p-5 h-screen w-screen '>
      <Header Changeuser={props.Changeuser} data={props.data} />
      
     <Taskno  data={props.data}/>
      <Tasklist  data={props.data}/>
    </div>
  )
}

export default Employeedash
