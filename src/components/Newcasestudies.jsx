import React from 'react';
import car from '../asset/car.png';

function Newcasestudies() {
  return (
    <div className='w-full py-[15rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
     
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
          <img className='w-20 mx-auto mb-2 bg-white' src={car} alt='' />
          <p className='text-lg md:text-xl font-bold text-center mb-2'>THOUGHT LEADERSHIP</p>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>BUSINESS GROWTH</h1>
        </div>

        
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
          <img className='w-20 mx-auto mb-2 bg-white' src={car} alt='' />
          <p className='text-lg md:text-xl font-bold text-center mb-2'>THOUGHT LEADERSHIP</p>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>BUSINESS GROWTH</h1>
        </div>

        
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
          <img className='w-20 mx-auto mb-2 bg-white' src={car} alt='' />
          <p className='text-lg md:text-xl font-bold text-center mb-2'>THOUGHT LEADERSHIP</p>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>BUSINESS GROWTH</h1>
        </div>
      </div>
    </div>
  );
}

export default Newcasestudies;
