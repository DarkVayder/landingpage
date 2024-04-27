import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Chat() {
  return (
    <div className='w-full py-[3.5rem] px-4 bg-gray-200'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full py-3rem h-[25rem] flex flex-col justify-center p-4 my-4 rounded-lg bg-inherit-200 relative'>
        <div className='text-left'>
        <h1 className='text-4xl font-bold mb-4'>WHAT ARE <br/> THEY TALKING <br/> ABOUT?</h1>
         <p>Trusted by more than 4,200 customers</p>
         <div className='flex  mt-5'>
            <FaArrowLeft className='text-2xl' />
            <FaArrowRight className='text-2xl' />
          </div>
      </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white-200 relative'>
          <div className='text-center'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h1 className='text-xl md:text-xl font-bold text-blue-500'>TODD HINGS</h1>
            <h2 className='text-xl md:text-xl font-bold text-gray-500'>Customer</h2>
          </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white-200 relative'>
          <div className='text-center'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h1 className='text-xl md:text-xl font-bold text-blue-500'>TODD HINGS</h1>
            <h2 className='text-xl md:text-xl font-bold text-gray-500'>Customer</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat