import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeList = ({resume}) => {
   
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
        <div className='p-15 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200  flex items-center justify-center h-[300px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md  cursor-pointer'>
            <Notebook/>
        </div>
        <h2 className='text-center font-bold text-smś my-1'>{resume.resumeName}</h2>
      
    </Link>
  )
}

export default ResumeList
