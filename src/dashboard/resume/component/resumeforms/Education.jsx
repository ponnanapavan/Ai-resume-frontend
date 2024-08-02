import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeContext } from '@/context/ResumeContext'
import { University } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

const Education = ({resumeId}) => {
    const {resumedata,setResumeData}=useContext(ResumeContext)
    const [educationList,setEducationList]=useState([{
        UniversityName:'',
        degree:'',
        major:'',
        startDate:'',
        endData:'',
        description:''
    }])
    function handleChange(event,index){
       
        const newEducation=educationList.slice();
        const {name,value}=event.target;
        newEducation[index][name]=value;
        setEducationList(newEducation)


    }
       useEffect(()=>{
         resumedata&&setEducationList(resumedata?.educationList)
       },[])
        useEffect(()=>{
            setResumeData({
                ...resumedata,
                educationList:educationList
            })
              
        },[educationList])

        
   async  function handleSubmit(){
    try{
          console.log(educationList)
           const response=await fetch(`http://localhost:4000/api/resumedetails/${resumeId}`, {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({educationList})
           })
              const res=await response.json();
              console.log(res);

    }catch(err){
        toast(err.message)
    }

    }

    function addEducation(){

        setEducationList([...educationList,
            {
            UniversityName:'',
            degree:'',
            major:'',
            startDate:'',
            endData:'',
            description:''
        } ])

    }

    function removeEducation(){
        setEducationList(educationList=>educationList.slice(0,-1))

    }
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Education</h2>
    <p>Add Your Education Detail</p>
    <div>
        {educationList?.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg '>
                    <div className='col-span-2'>
                        <label>UniversityName</label>
                        <Input name="UniversityName"  onChange={(e)=>handleChange(e,index)} defaultValue={item.UniversityName}/>
                    </div>
                    <div>
                        <label>Degree</label>
                        <Input name="degree"  defaultValue={item.degree} onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                        <label>Major</label>
                        <Input name="major" defaultValue={item?.major} onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                        <label>Start Date</label>
                        <Input type='date'  defaultValue={resumedata?.startDate}  name="startDate" onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    <div>
                        <label>End Date</label>
                        <Input type='date' defaultValue={resumedata?.endDate} name="endDate" onChange={(e)=>handleChange(e,index)}/>
                    </div>
                    
                </div>
              
            </div>
        ))}
    </div>
    <div className='my-4 flex justify-between'>
        <div className='flex gap-4'>
        <Button variant='outline' onClick={addEducation}>+ Add More</Button>
        <Button variant='outline' onClick={removeEducation}>Remove</Button>
            </div>
        <Button onClick={handleSubmit}>Save</Button>
    </div>


      
    </div>
  )
}

export default Education
