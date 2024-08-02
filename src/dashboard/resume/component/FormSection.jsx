import React, { useState } from 'react'
import PersonalDetail from './resumeforms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutGrid,ArrowLeft, Home } from 'lucide-react'
import Summery from './resumeforms/Summery'
import Experience from './resumeforms/Experience'
import Education from './resumeforms/Education'
import Skills from './resumeforms/Skills'
import { Link, Navigate } from 'react-router-dom'
import Project from './resumeforms/Project'


const FormSection = ({resumeId}) => {
    const [activeindex,setActiveIndex]=useState(1);
    const [enableNext,setEnableNext]=useState(false);
  return (
    <div>
        <div className='flex justify-between items-center'>
            <Link to={'/dashboard'}>
            <Button variant='outline'  className='flex gap-3' size='sm'> 
                <Home/> </Button>
            </Link>
            <div className='flex gap-3'>
                {activeindex >1 && <Button size='sm' onClick={()=>setActiveIndex(activeindex-1)}><ArrowLeft/></Button>}
                 <Button disabled={!enableNext} className='flex gap-3' size='sm' onClick={()=>setActiveIndex(activeindex+1)}>
                       Next 
                   <ArrowRight/></Button>
               
            </div>
        </div>
       {activeindex === 1 ? <PersonalDetail enableNext={(v)=>setEnableNext(v)} resumeId={resumeId}/> : null}

       {activeindex === 2 ? <Summery resumeId={resumeId}/> : null}

       {activeindex === 3 ? <Experience resumeId={resumeId} /> : null}

       {activeindex === 4 ? <Education resumeId={resumeId}/> : null}

       {activeindex === 5 ? <Skills resumeId={resumeId}/> : null}

       {activeindex === 6 ? <Project resumeId={resumeId}/> : null}

       {activeindex === 7 ? <Navigate to={'/my-resume/'+resumeId+'/view'}/> : null }
      
    </div>
  )
}

export default FormSection
