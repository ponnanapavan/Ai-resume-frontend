import { Button } from '@/components/ui/button';
import { ResumeContext } from '@/context/ResumeContext';
import { Brain } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { 
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    Editor,
    EditorProvider,
    HtmlButton,
    Separator,
    Toolbar,
  } from 'react-simple-wysiwyg';
import { chatSession } from '../../../../service/AIModal';
import { toast } from 'sonner';

const RichText = ({richTextChange, index}) => {
  console.log(index)
    const [value,setValue]=useState();
    const {resumedata,setResumeData}=useContext(ResumeContext);
    console.log(resumedata)
    

    async function generateAi(){
        if(!resumedata?.experienceList[index]?.title || !resumedata?.experienceList[index]?.companyName || !resumedata?.experienceList[index]?.workSummery){
            toast('Please ADD title , companyName , work Summary first');
            return;
        }
       
        const PROMPT=`I did ${resumedata?.experienceList[index]?.title} at ${resumedata?.experienceList[index]?.companyName} and my role is  ${resumedata?.experienceList[index]?.workSummery}depends up on  give 5 to 6 lines `
        console.log(PROMPT)
        const result=await chatSession.sendMessage(PROMPT);
        const res=result.response.text();
        setValue(res.replace('[', '').replace(']', ''))
        console.log(result.response.text());

    }

  return (
    <div>
        <div className='flex justify-between my-2' >
            <label className='text-xs'>Summey</label>
            <Button size='sm' variant='outline' className='flex gap-2 border-primary text-primary' onClick={generateAi}> <Brain className='h-4 w-4'/>Generate Ai</Button>
        </div>
         <EditorProvider>
      <Editor  value={value} onChange={(e)=>{
        setValue(e.target.value)
        richTextChange(e);
    }}>
      <Toolbar>
      <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          
          
        </Toolbar>
      </Editor>
    </EditorProvider>
      
    </div>
  )
}

export default RichText
