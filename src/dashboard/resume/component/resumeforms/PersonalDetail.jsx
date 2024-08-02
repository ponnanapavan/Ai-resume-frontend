import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeContext } from '@/context/ResumeContext'
import { Loader2, LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from "sonner"

const PersonalDetail = ({ enableNext, resumeId }) => {
  const { resumedata, setResumeData } = useContext(ResumeContext)
  const [formdata, setFormData] = useState();
  const [loading, setLoading] = useState(false);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    enableNext(false)

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    setResumeData(prevResumeData => ({
      ...prevResumeData,
      [name]: value
    }));
  }

  const handleSave = async (e) => {
    enableNext(true)
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`https://ai-resumebuilder-backend.onrender.com/api/resumedetails/${resumeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      })
      const result = await response.json();
      if (!result.error) {
        toast('Personal details are saved')
      }
      console.log(result);

    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with your information</p>

      <form onSubmit={handleSave}>
        <div className='grid grid-cols-2 mt-5 gap-4'>
          <div>
            <label>First Name</label>
            <Input name="firstName" value={resumedata?.firstName} required onChange={handleChange} />
          </div>
          <div>
            <label>Last Name</label>
            <Input name="lastName" value={resumedata?.lastName} required onChange={handleChange} />
          </div>
          <div className='col-span-2'>
            <label>Job Title</label>
            <Input name="jobTitle" value={resumedata?.jobTitle} required onChange={handleChange} />
          </div>
          <div className='col-span-2'>
            <label>Address</label>
            <Input name="address" value={resumedata?.address} required onChange={handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <Input name="phone" value={resumedata?.phone} required onChange={handleChange} />
          </div>
          <div>
            <label>Email</label>
            <Input name="userEmail" value={resumedata?.userEmail} required onChange={handleChange} />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          {loading ? <Button type='submit'><LoaderCircle className='animate-spin' /></Button> : (
            <Button type='submit'>Save</Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail
