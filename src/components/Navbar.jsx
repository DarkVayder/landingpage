import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-green cursor-pointer">CreativeLogo</h1>
        <ul className="hidden md:flex ml-8 space-x-4 cursor-pointer">
          <li className="p-2 text-sm">HOME</li>
          <li className="p-2 text-sm">SERVICES</li>
          <li className="p-2 text-sm">PAGES</li>
          <li className="p-2 text-sm">CASE SHOP</li>
          <li className="p-2 text-sm">BLOG</li>
          <li className="p-2 text-sm">CONTENT</li>
        </ul>
      </div>

      <ul className={`flex items-center space-x-4 cursor-pointer ${nav ? 'hidden' : 'md:flex'}`}>
        <li className={`p-2 cursor-help ${nav ? 'hidden md:block' : 'hidden'}`}>
          <CiSearch aria-label="Search" />
        </li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={`fixed left-0 top-0 w-[60%] bg-gray-900 ${nav ? 'border-r border-gray-700 bg-inherit ease-in-out duration-500' : 'left-[-100%]'}`}>
        <ul className="pt-14 uppercase p-4 cursor-pointer">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">SERVICES</li>
          <li className="p-4 border-b border-gray-600">PAGES</li>
          <li className="p-4 border-b border-gray-600">CASE SHOP</li>
          <li className="p-4 border-b border-gray-600">BLOG</li>
          <li className="p-4 border-b border-gray-600">CONTENT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
