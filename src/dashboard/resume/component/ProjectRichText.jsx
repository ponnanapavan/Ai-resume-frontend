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
const ProjectRichText = ({index,richTextChange,defaultValue}) => {
 
    const [value,setValue]=useState(defaultValue);
    const {resumedata,setResumeData}=useContext(ResumeContext);
  
    

    async function generateAi(){
      
       
        const PROMPT=`${resumedata?.projectList[index].projectSummery} this is about my project depends on this add some of keywords to it and give html format 5-6 points only give about project`
        console.log(PROMPT)
        const result=await chatSession.sendMessage(PROMPT);
        const res=result.response.text();
        setValue(res)
        console.log(result.response.text());

    }
  return (
    <div>
    <div className='flex justify-between my-2' >
        <label className='text-xs'>Project Summey</label>
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

export default ProjectRichText
