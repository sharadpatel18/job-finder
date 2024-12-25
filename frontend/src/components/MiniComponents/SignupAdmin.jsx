import React,{useEffect, useState} from 'react'

const SignupAdmin = ({handleAdminData}) => {
    const [companyName , setCompanyName] = useState("");
    const [companyCapacity , setCompanyCapacity] = useState(0);
    const [companyLocation , setCompanyLocation] = useState("");

    useEffect(()=>{
        handleAdminData({companyName:companyName , companyCapacity:companyCapacity , companyLocation:companyLocation})
    },[companyCapacity,companyName,companyLocation]);
    
  return (
    <div className='flex justify-center items-center flex-col'>
          <div className="name">
            <input type="text" placeholder="enter company name" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
          </div>
          <div className="email">
            <input type="number" placeholder="enter company capacity" value={companyCapacity} onChange={(e)=>setCompanyCapacity(e.target.value)}/>
          </div>
          <div className="password">
            <input type="text" placeholder="enter company location" value={companyLocation} onChange={(e)=>setCompanyLocation(e.target.value)}/>
          </div>
    </div>
  )
}

export default SignupAdmin