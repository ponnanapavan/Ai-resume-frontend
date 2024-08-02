import React from 'react'

const PersonalDetail = ({resumedata}) => {
  return (
    <div>
        
        <h2 className=' text-3xl  text-center'>{resumedata?.firstName} {resumedata?.lastName}</h2>
        <h2 className='text-center text-sm font-meduim'>{resumedata?.jobTitle}</h2>
        <h2 className='text-center text-sm'>{resumedata?.address}</h2>
         <div className='flex justify-between'>
            <h2 className='text-xs font-normal'>{resumedata?.phone}</h2>
            <h2 className='text-xs font-normal'>{resumedata?.userEmail}</h2>
         </div>
        <hr className='border-[1.8px] my-2 '/>
    </div>
  )
}

export default PersonalDetail
