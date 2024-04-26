import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
   const [nav, setNav] = useState(false)

   const handleNav = () => {
    setNav(!nav)
   }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text -3xt font-bold text-[green]'>CreativeLogo</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>SERVICES</li>
            <li className='p-4'>PAGES</li>
            <li className='p-4'>CASE SHOP</li>
            <li className='p-4'>BLOG</li>
            <li className='p-4'>CONTENT</li>
        </ul>

        <di onClick={handleNav} className='block md:hidden'>
           {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size = {20} />}
        </di>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-#424442 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        
          <ul className='pt-14 uppercase p-4 cursor-pointer'>
            <li className='p-4 border-b border-gray-600'>HOME</li>
            <li className='p-4 border-b border-gray-600'>SERVICES</li>
            <li className='p-4 border-b border-gray-600'>PAGES</li>
            <li className='p-4 border-b border-gray-600'>CASE SHOP</li>
            <li className='p-4 border-b border-gray-600'>BLOG</li>
            <li className='p-4 border-b border-gray-600'>CONTENT</li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar