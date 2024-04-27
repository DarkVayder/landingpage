import React from 'react';
import car from '../asset/car.png';

function Newcasestudies() {
  return (
    <div className='w-full py-[3.5rem] px-4 bg-white'>
      <div className='text-center'>
        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold mb-4'>NEW CASE STUDIES</h1>
        <p className='py-3rem pb-8'>We help our clients renew their business</p>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full py-3rem h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200 relative'>
          <div className='text-center'>
            <img className='w-8 h-8 mx-auto mb-2' src={car} alt='' />
            <p className='text-lg md:text-xl font-bold mb-1'>THOUGHT LEADERSHIP</p>
            <h1 className='text-3xl md:text-4xl font-bold'>BUSINESS GROWTH</h1>
          </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200 relative'>
          <div className='text-center'>
            <img className='w-8 h-8 mx-auto mb-2' src={car} alt='' />
            <p className='text-lg md:text-xl font-bold mb-1'>THOUGHT LEADERSHIP</p>
            <h1 className='text-3xl md:text-4xl font-bold'>BUSINESS GROWTH</h1>
          </div>
        </div>
        <div className='w-full h-[25rem] shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200 relative'>
          <div className='text-center'>
            <img className='w-8 h-8 mx-auto mb-2' src={car} alt='' />
            <p className='text-lg md:text-xl font-bold mb-1'>THOUGHT LEADERSHIP</p>
            <h1 className='text-3xl md:text-4xl font-bold'>BUSINESS GROWTH</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcasestudies;
