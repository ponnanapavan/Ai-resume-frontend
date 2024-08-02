import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react';

const ProjectSection = () => {
  const { resumedata } = useContext(ResumeContext);

  return (
    <div className='my-6'>
      <h2 className='text-left font-bold text-2xl mb-2'>Projects:</h2>
      <hr className='border-[1.6px] my-2' />
      {resumedata?.projectList.map((project, index) => (
        <div key={index}>
          <div className='flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <a href={project?.projectLink} target='_blank' rel='noopener noreferrer' className='text-md font-bold'>
                {project.projectName}
              </a>
              <span className='mx-1'>|</span>
              <p className='text-[12px] text-gray-500'>{project.projectTechStack}</p>
            </div>
            <div>
              <span className='text-xs font-bold'>
                {project.startDate ? new Date(project.startDate).toISOString().split('T')[0] : 'N/A'} -
                {project.endDate ? new Date(project.endDate).toISOString().split('T')[0] : 'N/A'}
              </span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: project.projectSummery }}></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
