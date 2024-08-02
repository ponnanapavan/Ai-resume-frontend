import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeContext } from '@/context/ResumeContext'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

const Skills = ({resumeId}) => {
    const [skillList,setSkillList]=useState([{
         name:'',
         rating:0
    }])

    const {resumedata,setResumeData}=useContext(ResumeContext);

    useEffect(()=>{
      setSkillList(resumedata?.skill)

    },[])

  
    function handlechange(index,name,value){
        const newSkills=skillList.slice();
       newSkills[index][name]=value;
       setSkillList(newSkills);

    }
       useEffect(()=>{
        console.log(skillList)
      setResumeData({
        ...resumedata,
        skill:skillList
      })
       },[skillList])

      function addSkill(){
       setSkillList([...skillList, {
        name:'',
        rating:''
       }])
      }
        function removeSkill(){
             setSkillList(skillList=>skillList.slice(0,-1));
        }
          async function handleSubmit()
          {
            try{
                const response=await fetch(`http://localhost:4000/api/resumedetails/${resumeId}`, {
                    method:'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({skill:skillList})
                   })
                      const res=await response.json();
                      console.log(res);

            }catch(err){
                toast(err.message)
            }

          }

  return (
    <div className='p-5 shadow-lg rounded-lg mb-2 border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Skills</h2>
    <p>Add Your Skills</p>
    <div>
        {skillList?.map((item,index)=>(
            <div className='flex justify-between border rounded-lg p-3 '>
                <div>
                    <label className='text-xs'>Name</label>
                    <Input defaultValue={item.name}  onChange={(e)=>handlechange(index, 'name', e.target.value)}/>
                </div>
                <Rating defaultValue={item.rating} style={{ maxWidth: 140 }} value={item?.rating} 
                onChange={(e)=>handlechange(index, 'rating', e)} />
            </div>
        ))}
    </div>
    <div className='my-4 flex justify-between'>
        <div className='flex gap-4'>
        <Button variant='outline' onClick={addSkill}>+ Add More</Button>
        <Button variant='outline' onClick={removeSkill}>Remove</Button>
            </div>
            <Button onClick={handleSubmit}>Save</Button>
    </div>

    </div>
  )
}

export default Skills
