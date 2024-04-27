import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { TiTick } from "react-icons/ti";

function QA() {
  return (
    <div className='w-full py-[3.5rem] px-4 bg-white'>
      <div>
        <h1 className='text-center font-bold text-4xl'>QUESTIONS ANSWERS</h1>
        <p className='text-center font-semibold text-gray-400'>We help our clients renew their business</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid gap-8'>
            <div className='flex items-center bg-gray-100 p-4 rounded'>
              <div>
                <h2 className='text-lg font-bold mb-2'>1. THINK AHEAD AND BOOST YOUR BUSINESS?</h2>
                <p className='text-gray-600'>There are many variations of passages the majority have suffered alteration in some form injected humor, or randomised words believable.</p>
              </div>
              <IoMdAdd className='text-blue-500 text-xl ml-auto cursor-pointer' />
            </div>
            <div className='flex items-center bg-gray-200 p-4 rounded'>
              <div>
                <h2 className='text-lg font-semibold mb-2'>2. HOW CONSULTANCY EXPERTS WORK?</h2>
              </div>
              <IoMdAdd className='text-blue-500 text-xl ml-auto cursor-pointer' />
            </div>
            <div className='flex items-center bg-gray-300 p-4 rounded'>
              <div>
                <h2 className='text-lg font-semibold mb-2'>3. WHAT IS THE BEST ADVICE FOR GROWTH?</h2>
              </div>
              <IoMdAdd className='text-blue-500 text-xl ml-auto cursor-pointer' />
            </div>
            <div className='flex items-center bg-gray-400 p-4 rounded'>
              <div>
                <h2 className='text-lg font-semibold mb-2'>4. HOW TO IMPROVE YOUR BUSINESS?</h2>
              </div>
              <IoMdAdd className='text-blue-500 text-xl ml-auto cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='max-w-[1240px] mx-auto mt-8 md:mb-0px '>
        <div className='bg-gray-200 p-4 rounded'>
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <TiTick className="mr-2 text-blue-500" />
        <p className='text-sm'>Nsecter cing elit</p>
      </div>
      <div className="flex items-center mb-2">
        <TiTick className="mr-2 text-blue-500" />
        <p className='text-sm'>Suspe ndissee suscipt sagitits leo.</p>
      </div>
      <div className="flex items-center mb-2">
        <TiTick className="mr-2 text-blue-500"/>
        <p className='text-sm'>Entum estibulum.</p>
      </div>
      <div className="flex items-center mb-2">
        <TiTick className="mr-2 text-blue-500" />
        <p className='text-sm'>If you are to use a passage</p>
      </div>
      <div className="flex items-center">
        <TiTick className="mr-2 text-blue-500" />
        <p className='text-sm'>Beta test</p>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
}

export default QA;
