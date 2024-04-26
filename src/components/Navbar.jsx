import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text -3xt font-bold text-[green]'>CreativeLogo</h1>
        <ul className='flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>SERVICES</li>
            <li className='p-4'>PAGES</li>
            <li className='p-4'>CASE SHOP</li>
            <li className='p-4'>BLOG</li>
            <li className='p-4'>CONTENT</li>
        </ul>
    </div>
  )
}

export default Navbar