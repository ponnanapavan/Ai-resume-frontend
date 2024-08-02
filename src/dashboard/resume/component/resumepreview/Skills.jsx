import React from 'react'

const Skills = ({resumedata}) => {
   
  return (
    <div className='my-6'>
        <h2 className='text-left font-bold text-2xl mb-2'>Skills:</h2>
        <hr className='border-[1.6px] my-2'/>

        <div className='grid grid-cols-2 gap-4 my-4'>
            {resumedata?.skill && resumedata?.skill.map((skills,index)=>(
                <div key={index} className='flex items-center justify-between'>
                    <h2 className='text-xs font-bold'>{skills?.name}</h2>
                    <div className='h-2 bg-gray-200 w-[130px]'>
                        <div className='h-2' style={{
                            backgroundColor:'red',
                            width:skills?.rating*20+'%'
                        }}></div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
