import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import ProjectRichText from '../ProjectRichText'
import { ResumeContext } from '@/context/ResumeContext'

const Project = ({resumeId}) => {
    const {resumedata,setResumeData}=useContext(ResumeContext)
    const [projectList,setProjectList]=useState([
        {
            projectName:'',
            projectTechStack:'',
            projectLink:'',
            startDate:'',
            endDate:'',
            projectSummery:''
        }
    ])

    function addProject(){
        setProjectList([
            ...projectList,
            {
                projectName:'',
                projectTechStack:'',
                projectLink:'',
                startDate:'',
                endDate:'',
                projectSummery:''
            }


        ])

    }
        useEffect(()=>(
            
            resumedata && setProjectList(resumedata?.projectList)

        ),[])

    function removeProject(){
        setProjectList((projectList)=>projectList.slice(0,-1))

    }

   async  function handleSubmit(){
        const response = await fetch(`https://ai-resumebuilder-backend.onrender.com/api/resumedetails/${resumeId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({projectList})
          })
             const data=await response.json();
             console.log(data);


    }

    function handleChange(e,index){
        const newProject=projectList.slice();
        const {name,value}=e.target;
        newProject[index][name]=value;
        setProjectList(newProject)
    }

     function handleTextChange(e,name,index){
        const newData=projectList.slice();// new array will create with same data
        
        newData[index][name]=e.target.value;
        setProjectList(newData);

     }
    useEffect(()=>(
       setResumeData({
       ...resumedata,
       projectList:projectList
       })

    ),[projectList])
  return (

          <div className='p-5 shadow-lg rounded-lg mb-2 border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Projects</h2>
    <p>Add Your Projects</p>
    <div>
        {projectList?.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                    <label >projectName</label>
                    <Input  defaultValue={item?.projectName} name='projectName' type='text' placeholder='enter projectName' onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                    <label >projectTechStack</label>
                    <Input defaultValue={item?.projectTechStack} name='projectTechStack' type='text' placeholder='enter techstack which you used' onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div className='col-span-2'>
                    <label >ProjectLink</label>
                    <Input defaultValue={item?.projectLink}  name='projectLink' type='text' placeholder='enter your project deployed Url' onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                    <label >StartDate</label>
                    <Input defaultValue={item?.startDate} name='startDate' type='date'  onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                    <label >EndDate</label>
                    <Input defaultValue={item?.endDate} name='endDate' type='date' onChange={(e)=>handleChange(e,index)} />
                    </div>
                    <div className='col-span-2'>
                        <ProjectRichText index={index} defaultValue={item?.projectSummery} richTextChange={(e)=>handleTextChange(e,'projectSummery', index)}/>
                    </div>
                </div>
                


            </div>

        ))}
    </div>

    <div className='my-4 flex justify-between'>
        <div className='flex gap-4'>
        <Button variant='outline' onClick={addProject}>+ Add More</Button>
        <Button variant='outline' onClick={removeProject}>Remove</Button>
            </div>
        <Button onClick={handleSubmit}>Save</Button>
    </div>

      
    </div>
  )
}

export default Project
