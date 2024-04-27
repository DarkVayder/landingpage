import React from 'react';
import { SiTicktick } from "react-icons/si";
import { GoDash } from "react-icons/go";

function Rates() {
  return (
    <div className='w-full py-[3.5rem] px-4 bg-white'>
      <div className="flex items-center">
        <div className="mr-4">
          <SiTicktick className='text-blue-500 text-4xl' />
        </div>
        <div>
          <h1 className='font-bold text-xl'>HIGHEST SUCCESS RATES</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="mr-4">
          <SiTicktick className='text-blue-500 text-4xl' />
        </div>
        <div>
          <h1 className='font-bold text-xl'>WE BUILD EXPERIENCE</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's .</p>
        </div>
      </div>
      <div className='font-bold text-gray-500 flex flex-col items-end'>
        <p>There are many variations of passages of Lorem ipsum avaiable, <br/> but the majority have suffered alteration</p>
      
      <div className="flex items-center ">
          <GoDash className='text-blue-500 text-4xl ml-4' />
          <p className="text-gray-500">if you are going to use a passage</p>
        </div>
        <div className="flex items-center">
          <GoDash className='text-blue-500 text-4xl ml-4' />
          <p className="text-gray-500">Loren Ipsum you need to be surre</p>
        </div>
        <div className="flex items-center">
          <GoDash className='text-blue-500 text-4xl ml-4' />
          <p className="text-gray-500">There isnt anything embrapassing</p>
        </div>
        <div className="flex items-center">
          <GoDash className='text-blue-500 text-4xl ml-4' />
          <p className="text-gray-500">Hidden in the middle of the text</p>
        </div>
        </div>
    </div>
  );
}

export default Rates;
