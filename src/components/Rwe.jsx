import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Rwe() {
  return (
    <div className='bg-indigo-950'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center font-bold text-4xl text-white'>REAL WORLD EXPERIENCE</h1>
        <p className='text-center font-semibold text-gray-400 mt-2'>The best business consulting firm you can count on!</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
          {/* Card 1 */}
          <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
            <div className='pl-4'>
              <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH MANAGEMENT</h1>
              <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4'>Read more</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
            <div className='pl-4'>
              <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH MANAGEMENT</h1>
              <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4'>Read more</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 rounded-lg hover:scale-105 duration-300 bg-black relative'>
            <div className='pl-4'>
              <h1 className='text-3xl md:text-xl font-bold text-white'>WEALTH MANAGEMENT</h1>
              <p className='text-lg md:text-xs font-bold mb-1 text-gray-400 py-2 px-4'>Read more</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className='flex justify-center items-center mt-8'>
          <h1 className='text-white text-center'>MEET THE PARTNERS</h1>
        </div>

        {/* Arrow Navigation */}
        <div className='flex justify-center items-center mt-1'>
          <FaArrowLeft className='text-blue-500 text-xl cursor-pointer mr-8'/>
          <FaArrowRight className='text-blue-500 text-xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Rwe;
