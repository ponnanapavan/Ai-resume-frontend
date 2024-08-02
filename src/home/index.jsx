import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import ResumeFeatures from './components/ResumeFeatures'

const Home = () => {

  return (
    <div  >

        <Header/>
        <h1>vjnvfj</h1>
      <div className='w-full  flex justify-between '>
        <div className='p-20 '>
        <h5 className='text-2xl pl-2 text-blue-500'>AI Resume Builder</h5>
        <h1 className='text-8xl font-bold'>Build Your Best</h1>
        <h1 className='text-8xl font-bold'>Resume,Ever!</h1>
        <p className='text-2xl mt-7'>Make your resume stand out by quickly customizing</p>
        <p className='text-2xl '> it to each application and applying to more jobs</p>
         <div className='flex flex-col gap-2 mt-9 items-start'>
         <div className='flex gap-3'>
          <img src="./form.webp" alt="" className='h-[40px]' />
          <p className='text-2xl font-bold'>Simply Filling given forms we can make resume easily</p>
          </div>
          <div className='flex gap-2 pr-6'>
          <img src="./ai.jpg" alt="" className='h-[40px]' />
          <p className='text-2xl font-bold'>Build resume with help of Ai</p>
          
          </div>
         </div>
        </div>

        <div className='p-10 rounded-lg'>
          <img src="./resume.png" alt=""  className='h-[800px]' />
        
        </div>


      </div>

      <div className='w-full  flex justify-between p-20 items-center'>
        <div className='w-[45%]'>
          <h5 className='text-2xl'>Resume Builder</h5>
          <p className='text-6xl font-bold'>Quickly Create</p>
          <p className='text-6xl font-bold'>and Edit Resumes</p>
          <div className='w-[500px] mt-3'>
            <p className='text-2xl text-gray-500'>Add your information once by either uploading an existing resume or importing your LinkedIn profile to our free online AI-powered resume builder. Then, use our AI resume builder to select which work experiences to include in each resume.</p>
          </div>
        </div>
        <div className='w-[55%] flex  flex-col gap-5  '>
          <div className='flex justify-end '>
            <img src="./personal.png" alt="" className='w-[600px] h-[400px] rounded-lg' />
          </div>
          <div className='flex justify-start'>
            <img src="./personal.png" alt="" className='w-[600px] h-[400px] rounded-lg' />
          </div>
        </div>
      </div>

      <ResumeFeatures/>
   
       
       
    </div>
  )
}

export default Home
