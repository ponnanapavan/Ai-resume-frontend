import React, { useEffect, useState } from 'react'
import Resume from './components/Resume'
import { useUser } from '@clerk/clerk-react'
import ResumeList from './components/ResumeList';

const Dashboard = () => {
  const {user}=useUser();
  const [resumedata,setResumeData]=useState([])


  useEffect(()=>{
   console.log(resumedata)
  },[resumedata])

  useEffect(()=>{
    user&&getResumeData();// get the resume data  if the user data is present
  },[user])

  const getResumeData=async()=>{
      try{
             const response=await fetch(`https://ai-resumebuilder-backend.onrender.com/api/getResume/${user?.primaryEmailAddress?.emailAddress}`,{
              method:'GET'
             })
             const res=await response.json(); 
             setResumeData(res.existResume)
      }catch(err){
        console.log(err.message)
      }
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
     <h2 className='font-bold text-3xl'>My Resume</h2>
     <p>Start Creating AI resume for landing a job</p>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14'>
      <Resume/>
      {resumedata.length>0 &&resumedata.map((resume,index)=>(
         
               <ResumeList resume={resume} key={index}/>
      ))}
     </div>
    </div>
  )
}

export default Dashboard
