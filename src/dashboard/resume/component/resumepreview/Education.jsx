import React from 'react'

const Education = ({resumedata}) => {
  console.log(resumedata)
  return (
           
       <div className='my-6'>
        <h2 className='text-left font-bold text-2xl mb-2'>Education:</h2>
        <hr className='border-[1.6px] my-2'/>

        { resumedata?.educationList &&  resumedata?.educationList.map((education,index)=>(
            <div className='my-5' key={index}>
                <h2 className='font-bold text-sm'>{education?.UniversityName}</h2>
                <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}

                <span className='text-xs font-semibold'>
  {new Date(education?.startDate).toLocaleDateString('en-CA')} - {new Date(education?.endDate).toLocaleDateString('en-CA')}
</span>
                </h2>

                <p className='text-xs'>{education?.description}</p>
               

            </div>
        ))}
        
    
    </div>
  )
}

export default Education
