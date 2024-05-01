import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function Mkt() {
  return (
    <div className='w-full py-16 text-black px-4 bg-white'>
      <FaPlay className='text-blue-500 text-6xl cursor-pointer'/>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
      <div>
  <h1 className='font bold text-6xl mb-4'>WE'RE LEADING IN <br/> THE MARKET</h1>
  <p className='text-xl font bold text-gray-400 mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's <br/> standard dummy text ever since the 1500s</p>
  <h2 className='text-blue-500 text-xl mb-8'>We have 35+ years of experience. We offer <br/> marketing and consulting services</h2>
  <div class="mt-8">
  <div class="mb-4">
    <h1 class='font-bold text-black mb-2'>Consulting 88%</h1>
    <div class="w-full h-4 bg-gray-300 rounded-lg overflow-hidden">
      <div class="h-full bg-blue-500 width: 88%;"></div>
    </div>
  </div>
  <div class="mb-4">
    <h1 class='font-bold text-black mb-2'>Advices 68%</h1>
    <div class="w-full h-4 bg-gray-300 rounded-lg overflow-hidden">
      <div class="h-full bg-blue-500 width: 68%;"></div>
    </div>
  </div>


  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <FaPhone className='cursor-pointer text-blue-500 text-2xl' />
    </div>
    <div style={{ marginLeft: '10px' }}> {/* Adjust margin as needed */}
      <h1 className='text-gray-400 mb-2'>Have any questions? Give us a call</h1>
      <p className='text-black'>+92 666 888 0000</p>
    </div>
  </div>
</div>

</div>

    </div>
  )
}

export default Mkt
