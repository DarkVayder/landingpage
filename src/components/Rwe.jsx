import React from 'react';
import { FaArrowLeft, FaArrowRight, FaYCombinator } from "react-icons/fa";

function Rwe() {
  return (
    <div className='w-full bg-indigo-950 py-16 px-4'>
      <div>
        <h1 className='text-center font-bold text-4xl text-white'>REAL WORLD EXPERIENCE</h1>
        <p className='text-center font-semibold text-gray-400'>The best business consulting firm you can count on!</p>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full py-3rem h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
          <div className='pl-4'>
            <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH <br/> MANAGEMENT</h1>
            <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4 '>Read more</p>
            <div className="absolute right-8 ">
              <FaYCombinator className='text-blue-500 text-6xl'/>
            </div>
          </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
          <div className='pl-4'>
            <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH <br/> MANAGEMENT</h1>
            <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4 '>Read more</p>
            <div className="absolute right-8 ">
              <FaYCombinator className='text-blue-500 text-6xl'/>
            </div>
          </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
          <div className='pl-4'>
            <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH <br/> MANAGEMENT</h1>
            <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4 '>Read more</p>
            <div className="absolute right-8 ">
              <FaYCombinator className='text-blue-500 text-6xl'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <h1 className='text-white text-center'>MEET THE PARTNERS</h1>
      </div>
      <div className='flex justify-center items-center mt-1'>
        <FaArrowLeft className='text-blue-500 text-xl cursor-pointer mr-8'/>
        <FaArrowRight className='text-blue-500 text-xl cursor-pointer' />
      </div>
    </div>
  )
}

export default Rwe;
