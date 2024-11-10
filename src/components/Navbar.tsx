import Link from 'next/link';
import React from 'react'
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-lg'>
            </div>
            
            <ul className='gap-10 lg:gap-16 hidden md:flex font-bold'>
                <li className='menulink'><Link href={"/"}>Home</Link></li>
                <li className='menulink'><Link href={"/about"}>About Me</Link></li>
                <li className='menulink'><Link href={"/projects"}>My Projects</Link></li>
                <li className='menulink'><Link href={"/contact"}>Contact Me</Link></li>
            </ul>
            <LuMenu className='md:hidden' size={30}/>
        </div>
    </div>
  )
}

export default Navbar;