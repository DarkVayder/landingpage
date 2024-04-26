import React from 'react';

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-4xl mx-auto mt-[-96px] h-screen flex flex-col items-center justify-center'>
        <div className="text-left mb-8">
          <p className="text-lg mb-4">WELCOME TO CODESHAPER</p>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
            CONSULTING <br /> FOR EVERY <br /> BUSINESS
          </div>
        </div>
        <button className='bg-[blue] w-[180px] rounded-md font-medium py-2 px-6'>DISCOVER MORE</button>
      </div>
    </div>
  );
}

export default Hero;
