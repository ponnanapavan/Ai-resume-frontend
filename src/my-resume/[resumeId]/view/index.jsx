
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeContext } from '@/context/ResumeContext'
import ResumePreview from '@/dashboard/resume/component/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { RWebShare } from "react-web-share";

const View = () => {
    const [resumedata,setResumeData]=useState()
    const {resumeId}=useParams();


    useEffect(()=>{
        getResumeData();
        },[])
    
        async function getResumeData(){
         
          try{
            const response=await fetch(`https://ai-resumebuilder-backend.onrender.com/api/getResumeData/${resumeId}`, {
              method:'GET',
             })
                const res=await response.json();
                console.log(res)
                setResumeData(res.existResume[0]);
    
          }catch(err){
            toast(err.message);
          }
    
        }
           function handleDownload(){
            window.print();

           }
  return (
    <ResumeContext.Provider value={{resumedata,setResumeData}}>
          <div id='no-print'>
        <Header/>

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
              <h2 className='text-2xl font-md text-center'>Congrats Your AI generated resume is ready !</h2>
              <p className='text-center'>Now you ready to download your resume and you can also share your resume with unique url </p>
            <div className='flex justify-between mx-44 my-10'>
                <Button onClick={handleDownload}>Download</Button>
                 <RWebShare
        data={{
          text: "Hello! Every One, This is my resume",
          url: 'https://ai-resume-frontend-pied.vercel.app/'+'/my-resume/'+resumeId+'/view',
          title:resumedata?.firstName+" "+resumedata?.lastName+"AIresume",
        }}
        onClick={() => console.log("shared successfully!")}
      >
         <Button>Share</Button>
      </RWebShare>
              
            </div>
            </div>
            
    </div>
    <div id='print-resume' className='my-14 mx-14 md:mx-20 lg:mx-36'>
                <ResumePreview/>
            </div>
      
    </ResumeContext.Provider>
  
  )
}

export default View
