import React from 'react'

const ResumeFeatures = () => {
  return (
    <div className='w-full  flex justify-between p-20 items-center'>
        <div className='w-[45%]'>
          <h5 className='text-2xl'>Resume Features</h5>
          <p className='text-6xl font-bold'>Customize and Enhance</p>
          <p className='text-6xl font-bold'>Your Resume with AI</p>
         
          <div className='w-[500px] mt-3'>
            <p className='text-2xl text-gray-500'>Make your job search more impactful with AI-generated resume summaries, achievements, and cover letters. Speed up your resume creation process with AI and write tailored content for each role to land your dream job faster.</p>
          </div>
        </div>
        <div className='w-[55%] flex  flex-col gap-5  '>
          <div className='flex justify-end '>
            <img src="./summery.png" alt="" className='w-[600px] h-[400px] rounded-lg' />
          </div>
          <div className='flex justify-start'>
            <img src="./summery.png" alt="" className='w-[600px] h-[400px] rounded-lg' />
          </div>
        </div>
      </div>
   
  )
}

export default ResumeFeatures
