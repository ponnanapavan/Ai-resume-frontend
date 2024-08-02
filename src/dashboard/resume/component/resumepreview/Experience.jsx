import React from 'react';

const Experience = ({ resumedata }) => {
 
  return (
    <div className='my-6'>
      <h2 className='text-left font-bold text-2xl mb-2'>Experience:</h2>
      <hr className='border-[1.6px] my-2'/>

      {resumedata?.experienceList && resumedata.experienceList.map((experience, index) => (
        <div key={index} className="mb-4">
          <h2 className='text-md font-bold'>{experience.title}</h2>
          <h2 className='text-xs flex justify-between'>{experience.companyName},
            {experience.city},
            {experience.state}
            <span className='text-xs font-semibold'>
              {experience.startDate ? new Date(experience.startDate).toISOString().split('T')[0] : 'N/A'} -
              {experience.endDate ? new Date(experience.endDate).toISOString().split('T')[0] : 'N/A'}
            </span>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: experience?.workSummery }}></div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
