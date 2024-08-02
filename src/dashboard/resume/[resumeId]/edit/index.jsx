import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../component/FormSection';
import ResumePreview from '../../component/ResumePreview';
import { ResumeContext } from '@/context/ResumeContext';
import Dummy from '@/data/Dummy';
import { toast } from 'sonner';

const EditResume = () => {
    const params=useParams();
    console.log(params.resumeId)
    const [resumedata,setResumeData]=useState();

    useEffect(()=>{
     
    
    getResumeData();
    },[])

    async function getResumeData(){
     
      try{
        const response=await fetch(`https://ai-resumebuilder-backend.onrender.com/api/getResumeData/${params.resumeId}`, {
          method:'GET',
         })
            const res=await response.json();
            setResumeData(res.existResume[0]);

      }catch(err){
        toast(err.message);
      }

    }
  return (
    
    <ResumeContext.Provider value={{resumedata,setResumeData}}>
       <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-11'>
      
      <FormSection resumeId={params.resumeId}/>

      <ResumePreview/>
    </div>
    </ResumeContext.Provider>
   
  )
}

export default EditResume
