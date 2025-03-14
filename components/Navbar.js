import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full p-5 bg-transparent text-white absolute top-0 z-50'>
            <span className='text-xl font-bold'>Bilal Logs</span>
            <ul className='flex space-x-5'>
                <Link className='hover:font-bold' href="/">Home</Link>
                <Link className='hover:font-bold' href="/blogs">Blogs</Link>
                <Link className='hover:font-bold' href="/about">About</Link>
                <Link className='hover:font-bold' href="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default Navbar
