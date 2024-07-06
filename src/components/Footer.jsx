import React from 'react';
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div className='bg-indigo-950'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300'>

        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-green cursor-pointer mb-8 text-gray-400">Creative Logo</h1>
          <div className='space-y-6 text-gray-400'>
            <p className='max-w-lg'>Welcome to our consultancy agency</p>
            <div className="flex items-center">
              <FaPhone className='text-blue-500 text-2xl mr-2'/>
              <span className="text-gray-400">+92 666 888 0000</span>
            </div>
            <div className="flex items-center">
              <MdOutlineMailOutline className='text-blue-500 text-2xl mr-2'/>
              <span className="text-gray-400">needourhelp@company.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className='text-blue-500 text-2xl mr-2'/>
              <span className="text-gray-400">66 Brooklyn Street, New York, USA</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className='text-white'>
          <h1 className="text-3xl font-bold text-green cursor-pointer mb-8 text-gray-400">EXPLORE</h1>
          <ul className='space-y-2 text-gray-400'>
            <li>About</li>
            <li>Meet our Team</li>
            <li>Case Studies</li>
            <li>Latest News</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-xl font-bold text-green cursor-pointer mb-4 text-gray-400">NEWSLETTER</h1>
          <p className='text-gray-400 mb-6'>Subscribe for our latest articles and resources</p>
          <div className='flex w-full max-w-md'>
            <input className='p-3 flex w-full rounded-md text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' placeholder='Enter Email' />
            <button className='bg-blue-500 text-white rounded-md ml-2 px-4 py-2 hover:bg-blue-700 transition duration-300 ease-in-out'>REGISTER</button>
          </div>
          <p className="text-sm text-gray-400 mt-2">We care about the protection of your data. Read our <a href="#" className='text-blue-500'>Privacy Policy</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-indigo-950 text-gray-300 py-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#"><FaFacebook className="text-2xl" /></a>
          <a href="#"><FaTwitter className="text-2xl" /></a>
          <a href="#"><FaInstagram className="text-2xl" /></a>
          <a href="#"><FaLinkedin className="text-2xl" /></a>
          <a href="#"><FaWhatsapp className="text-2xl" /></a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
