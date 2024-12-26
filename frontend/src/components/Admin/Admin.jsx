import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const Navigate = useNavigate();
  return (
    <div className='flex'>
        <button className='p-5 bg-red-500 text-white text-2xl m-6' onClick={()=>Navigate('/createjob')}>Create Job</button>
    </div>
  )
}

export default Admin