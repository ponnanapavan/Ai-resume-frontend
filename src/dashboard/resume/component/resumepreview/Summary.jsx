import React from 'react'

const Summary = ({resumedata}) => {
  return (
    <div className='text-xs'> 
         <p>{resumedata?.summery}</p>
      
    </div>
  )
}

export default Summary
