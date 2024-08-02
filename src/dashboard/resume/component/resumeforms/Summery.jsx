import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Brain, Loader2, LoaderCircle } from 'lucide-react'
import { chatSession } from './../../../../../service/AIModal'
const Summery = ({ resumeId }) => {
  const prompt="Job Title: {jobTitle}, Depends on job title give me summery for my resume with in 4-6 lines in array of objects with field {experienceLevel and summary  fields} with Experience level for freshers, Mid-Level, Experienced and remove non-whitespace character in text please give in array of objects "
  const { resumedata, setResumeData } = useContext(ResumeContext)
  const [summery, setSummery] = useState(resumedata?.summery || '');
  const [loading,setLoading]=useState(false);
  const [aisummery,setAiSummery]=useState([])

  useEffect(() => {
    summery&&setResumeData({
      ...resumedata,
      summery:summery
     })
      
    }
  , [summery]);//here when the summery is changed then i am storing in context

  const GenerateSummary=async()=>{// ai genrate summay
    const PROMPT=prompt.replace('{jobTitle}', resumedata?.jobTitle)


    const result=await chatSession.sendMessage(PROMPT);
 
    const aiResponse = await result.response.text();
    const outputString = aiResponse.replace(/```json|```/g, '');
  
      
      
    const sanitizedResponse = outputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
      const aiSummary = JSON.parse(sanitizedResponse);
     

        setAiSummery(aiSummary)

  }
     
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://ai-resumebuilder-backend.onrender.com/api/resumedetails/${resumeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ summery: summery })
      });
      const result = await response.json();
      console.log(result)
      if (!result.error) {
        toast('Summery is saved');
      } else {
        toast(result.error);
        return;
      }
      console.log(result);
    } catch (err) {
      toast(err.message);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Summery</h2>
      <p>Add Summery for your job role</p>
      <form className='mt-7' onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <label >Add Summery</label>
          <Button variant='outline' type='button' className='border-primary flex gap-3' onClick={()=>GenerateSummary()}> <Brain className='h-4 w-4'/>  Generate From AI</Button>
        </div>
        <Textarea className='mt-7' value={summery} onChange={(e) => setSummery(e.target.value)} />
        <div className='mt-3 flex justify-end'>
          {loading ? <Button type='submit'><LoaderCircle className='animate-spin'/></Button> : <Button type='submit'>Save</Button>}
        </div>
      </form>

      {aisummery && <div className='mt-9 flex flex-col hap-3 ' >
      <h2 className='font-bold text-lg'>Suggestion</h2>
      {aisummery?.map((item,index)=>(
        
        <div key={index} className='border bodrer-2-primary cursor-pointer p-5 my-3 rounded-lg' onClick={()=>setSummery(item.summary)}>
          <h2 className='font-bold text-xl'>{item.experienceLevel}:</h2>
            <p>{item?.summary}</p>
        </div>
      ))}
     </div>}
    </div>
  );
}

export default Summery;
