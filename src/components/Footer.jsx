import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className='bg-indigo-950'>
      <div className='max-w-[1240px] mx-auto py-16 grid grid-cols-3 gap-8 text-gray-300'>
        
        <div>
          <h1 className="text-3xl font-bold text-green cursor-pointer">Creative Logo</h1>
          <div className='w-full py-8 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className="lg:col-span-3">
                <h1 className='text-gray-200'>Welcome to our consultancy agency</h1>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaPhone className='text-blue-500 text-2xl mr-2'/>
                  <h1 className="text-white">+92 666 888 0000</h1>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className='text-blue-500 text-2xl mr-2'/>
                  <h1 className="text-white">needhelp@company.com</h1>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className='text-blue-500 text-2xl mr-2'/>
                  <h1 className="text-white">66 Broklyn Street New York. USA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className='text-white'>
          <h1 className="text-3xl font-bold text-green cursor-pointer mb-8">EXPLORE</h1>
          <ul className='space-y-2'>
            <li>About</li>
            <li>Meet our Team</li>
            <li>Case Studies</li>
            <li>Latest News</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Terms of use</li>
            <li>Privacy & Policy</li>
            <li>Help</li>
          </ul>
        </div>

      
        <div>
          <h1 className="text-3xl font-bold text-green cursor-pointer">NEWSLETTER</h1>
          <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
              <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-2xl text-xl font-bold mb-4'>Subscribe for our latest articles and resources</h1>
                <div className='flex-col sm:flex-row items-center justify-between w-full'>
                  <input className='p-3 flex w-full rounded-md text-black mb-4' type='email' placeholder='Enter Email' />
                  <button className='bg-blue-900 rounded-md font-medium w-[200px] ml-4 px-6 py-3'>REGISTER</button>
                </div>
                <p className="text-sm text-gray-400">We care about the protection of your data. Read our <span className='text-blue-500'>Privacy Policy</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-indigo-800 text-gray-300 py-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#"><FiFacebook className="text-2xl" /></a>
          <a href="#"><FiTwitter className="text-2xl" /></a>
          <a href="#"><FiInstagram className="text-2xl" /></a>
        </div>
        <p className="mt-4">&copy; 2021 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
