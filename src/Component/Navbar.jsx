import React from 'react'
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu =()=>{
        setMenuOpen(!menuOpen);
    };
  return (
    <div className=' sticky top-0 z-50 overflow-hidden md:overflow-visible'>
      <nav className='md:flex md:justify-between md:items-center md:px-14'>
        <div className="logo flex justify-between items-center md:flex-none px-6 md:px-0 py-4 md:py-0">
           <img src="/images/logo.svg" className='w-36' alt="" />
           {
            menuOpen?(<RxCross2 className='md:hidden text-3xl text-white cursor-pointer' onClick={toggleMenu} />
            ):(<FaBars className='md:hidden text-3xl text-white cursor-pointer' onClick={toggleMenu} />)
           }
        </div>
        <ul className={`flex justify-center items-center md:bg-none flex-col gap-7 md:flex-row cursor-pointer py-10 md:py-0 md:bg-transparent ${menuOpen?'block':'hidden md:flex'}`}>
            <li><Link className='text-2xl md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in' to='/' spy={true} smooth={true} duration={300}>Home</Link></li>
             <li className=' group'><Link className='text-2xl md:text-xl flex items-center gap-0 text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in' to='/' spy={true} smooth={true} duration={300}><IoMdArrowDropdown size={32} className='text-white'/>Features</Link>
             
            <ul className='hidden group-hover:block absolute  md:w-24 md:h-24 md:px-0 px-32 top-48 md:top-6'>
              <li><Link className='text-lg md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in flex gap-2 py-2 md:py-2' to='/' spy={true} smooth={true}>Ai<span>Feauture</span></Link></li>
              <li><Link className='text-lg md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in flex gap-2 py-2 md:py-2' to='/' spy={true} smooth={true}>Ul<span>Feauture</span></Link></li>
              <li><Link className='text-lg md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in flex gap-2 py-2 md:py-2' to='/' spy={true} smooth={true}>MI<span>Feauture</span></Link></li>
              <li><Link className='text-lg md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in flex gap-2 py-2 md:py-2' to='/' spy={true} smooth={true}>Nl<span>Feauture</span></Link></li>
            </ul>
            </li>
            <li><Link className='text-2xl md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in' to='/' spy={true} smooth={true} duration={300}>Product</Link></li>
            <li><Link className='text-2xl md:text-xl text-white hover:text-yellow-400 md:hover:text-indigo-400 transition-all duration-300 ease-in' to='/' spy={true} smooth={true} duration={300}>Cliends</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
