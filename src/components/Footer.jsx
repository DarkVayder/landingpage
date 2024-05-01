import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto mx-auto py-16 grid:gird-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className="text-3xl font-bold text-green cursor-pointer">CreativeLogo</h1>
        </div>
        <div>

        </div>
        <div>
        <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>Want tips and Tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
          <div className='flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email' />
            <button className='bg-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
          </div>
          <p>We care about the protection of your data. Read our <span className='text-blue-500'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Footer