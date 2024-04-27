import React from 'react'
import { FaPlay } from "react-icons/fa6";

function Market() {
  return (
    <div className='w-full py-[3.5rem] px-4 bg-white'>
        <FaPlay className='text-blue-500 text-6xl cursor-pointer absolute left-70'/>
        <div className='absolute top-0 right-0'>
            <h1 className='font-bold text-6xl'>WE'RE LEADING IN <br/> THE MARKET</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's <br/> standard dummy text ever since the 1500s</p>
            <h2 className='text-blue-500 text-xl'>We have 35+ years of experience. We offer <br/> marketing and consulting services</h2>
        </div>
    </div>
  )
}

export default Market
