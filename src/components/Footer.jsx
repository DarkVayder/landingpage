import React from 'react';
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div className='bg-indigo-950'>
      <div className='max-w-[1240px] mx-auto py-16 grid grid-cols-3 gap-8 text-gray-300'>
        
        <div>
          <h1 className="text-3xl font-bold text-green cursor-pointer  text-gray-400">Creative Logo</h1>
          <div className='w-full py-8  px-4  text-gray-400'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className="lg:col-span-3">
                <h1 className='text-gray-200'>Welcome to our consultancy agency</h1>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaPhone className='text-blue-500 text-2xl mr-2 cursor-pointer'/>
                  <h1 className="text-gray-400">+92 666 888 0000</h1>
                </div>
                <div className="flex items-center mb-4">
                  <MdOutlineMailOutline className='text-blue-500 text-2xl mr-2 cursor-pointer'/>
                  <h1 className="text-gray-400">need our help?</h1>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className='text-blue-500 text-2xl mr-2 cursor-pointer'/>
                  <h1 className="text-gray-400">66 Broklyn Street New York. USA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className='text-white'>
          <h1 className="text-3xl font-bold text-green cursor-pointer mb-8 text-gray-400">EXPLORE</h1>
          <ul className='space-y-2  text-gray-400'>
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
  <h1 className="text-xl font-bold text-green cursor-pointer text-gray-400 mb-4">NEWSLETTER</h1>
  <div className='w-full py-8 px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
      <div className='lg:col-span-2 my-4'>
        <p className='text-xl font-bold mb-4 text-gray-400'>Subscribe for our latest articles and resources</p>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <div className="relative w-full">
            <input className='p-3 flex w-full rounded-md text-black mb-4 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' placeholder='Enter Email' />
            <button className='bg-inherit text-white rounded-md font-small absolute right-0 top-0 bottom-0 px-2 py-1 mr-3 hover:bg-blue-800 transition duration-300 ease-in-out'>REGISTER</button>
          </div>
        </div>
        <p className="text-sm text-gray-400">We care about the protection of your data. Read our <span className='text-blue-500'>Privacy Policy</span></p>
      </div>
    </div>
  </div>
</div>


      </div>


      <div className="bg-indigo-950 text-gray-300 py-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#"><FaFacebook className="text-2xl" /></a>
          <a href="#"><FaTwitter className="text-2xl" /></a>
          <a href="#"><FaInstagram className="text-2xl" /></a>
          <a href="#"><FaLinkedin className="text-2xl" /></a>
          <a href="#"><FaWhatsapp className="text-2xl" /></a>
        </div>
        <p className="mt-4">&copy; 2021 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
