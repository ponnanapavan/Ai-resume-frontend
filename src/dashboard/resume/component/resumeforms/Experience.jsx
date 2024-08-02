import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichText from '../RichText'
import { ResumeContext } from '@/context/ResumeContext'
var formData={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startData:'',
    endData:'',
    workSummery:''
}
const Experience = ({resumeId}) => {
    const [experienceList,setExperienceList]=useState([
        formData
    ])

       
    
    const {resumedata,setResumeData}=useContext(ResumeContext);
    console.log(resumedata)

    function handleChange(index,event){

        console.log(index)
        const newData=experienceList.slice();// new array will create with same data
        const {name,value}=event.target;
        newData[index][name]=value;
        setExperienceList(newData);

    }
        useEffect(()=>{
            resumedata&&setExperienceList(resumedata.experienceList) 
        },[])
    
    function addExperience(){
        var formData={
            title:'',
            companyName:'',
            city:'',
            state:'',
            startDate:'',
            endDate:'',
            workSummery:''
        }
        setExperienceList([...experienceList,formData]);
    }
    function removeExperience(){
        setExperienceList(experienceList=>experienceList.slice(0,-1));
    }

    function handleTextChange(event,name,index){
        const newData=experienceList.slice();// new array will create with same data
        
        newData[index][name]=event.target.value;
        setExperienceList(newData);

    }

       useEffect(()=>{
        console.log(experienceList);
           setResumeData({
            ...resumedata,
            experienceList:experienceList
           })
       },[experienceList])

       async function handleSubmit(){
        const response = await fetch(`http://localhost:4000/api/resumedetails/${resumeId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({experienceList})
          })
             const data=await response.json();
             console.log(data);

       }

  return (
   <div>
     <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Experience</h2>
    <p>Add Experience for your job role</p>
    <div>
        {experienceList?.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                        <label className='text-xs '>Position Title</label>
                        <Input name="title" defaultValue={item.title} onChange={(e)=>handleChange(index,e)}/>
                    </div>
                    <div>
                        <label className='text-xs '>Company Name</label>
                        <Input name="companyName" defaultValue={item.companyName} onChange={(e)=>handleChange(index,e)}/>
                    </div>
                    <div>
                        <label className='text-xs '>City</label>
                        <Input name="city" defaultValue={item.city} onChange={(e)=>handleChange(index,e)}/>
                    </div>
                    <div>
                        <label className='text-xs '>State</label>
                        <Input name="state"  defaultValue={item.state} onChange={(e)=>handleChange(index,e)}/>
                    </div>
                    <div>
                        <label className='text-xs '>Start Date</label>
                        <Input type='date' defaultValue={item.startDate} name="startDate" onChange={(e)=>handleChange(index,e)}/>
                    </div>
                    <div>
                        <label className='text-xs '>End Date</label>
                        <Input type='date' name="endDate" defaultValue={item.endData} onChange={(e)=>handleChange(index,e)}/>
                    </div>

                    <div className='col-span-2'>
                        <RichText index={index}  value={item?.workSummery} richTextChange={(e)=>handleTextChange(e,'workSummery', index)} />
                   </div>


 
                </div>
            </div>

        ))}
    </div>
    <div className='my-4 flex justify-between'>
        <div className='flex gap-4'>
        <Button variant='outline' onClick={addExperience}>+ Add More</Button>
        <Button variant='outline' onClick={removeExperience}>Remove</Button>
            </div>
        <Button onClick={handleSubmit}>Save</Button>
    </div>

      
    </div>
   </div>
  )
}

export default Experience
