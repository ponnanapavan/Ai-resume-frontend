import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext } from 'react'
import PersonalDetail from './resumepreview/PersonalDetail'
import Summary from './resumepreview/Summary'
import Experience from './resumepreview/Experience'
import Education from './resumepreview/Education'
import Skills from './resumepreview/Skills'
import ProjectSection from './resumepreview/ProjectSection'

const ResumePreview = () => {
    const {resumedata,setResumeData}=useContext(ResumeContext) // here i am using context 
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumedata?.themeColor}}>
     
     <PersonalDetail resumedata={resumedata}/>

     <Summary resumedata={resumedata}/>

     <Experience resumedata={resumedata}/>

     <Education resumedata={resumedata}/>

     <ProjectSection resumedata={resumedata}/>

     <Skills resumedata={resumedata}/>

      
    </div>
  )
}

export default ResumePreview
