import { Navbar } from "flowbite-react";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../Context.js";
import logo from "../assets/logo.png";
export default function Nav() {
   const [navOpen, setNavOpen] = useState(false);
   const [serachOpen, setSearchOpen] = useState(false);
   const { formData } = useContext(MyContext);
   return (
      <div>
         <nav className='border-b-2 p-2 md:p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4 space-x-4'>
               <div className='font-title text-black font-regular text-[1rem] md:text-[1.5rem]'>
                  dribbble
               </div>
               <ul className='hidden md:flex space-x-4 font-semibold text-medium text-slate-600 '>
                  <li>
                     <a href='#' className=''>
                        Inspiration
                     </a>
                  </li>
                  <li>
                     <a href='#' className=''>
                        Find work
                     </a>
                  </li>
                  <li>
                     <a href='#' className=''>
                        Learn Design
                     </a>
                  </li>
                  <li>
                     <a href='#' className=''>
                        Go pro
                     </a>
                  </li>
                  <li>
                     <a href='#' className=''>
                        Hire Designers
                     </a>
                  </li>
               </ul>
            </div>
            <div className='flex items-center space-x-4'>
               <div className='relative'>
                  <input
                     type='text'
                     placeholder='Search'
                     className={`pl-8 pr-4 py-2 rounded-lg 
                      w-28
                      sm:w-32 md:w-22 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-width duration-300`}
                     onfocus="this.style.width = '8rem';"
                     onblur="this.style.width = '4rem';"
                  />
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                           fill-rule='evenodd'
                           d='M13.293 14.707a1 1 0 001.414-1.414l-2.88-2.88a5 5 0 10-1.414 1.414l2.88 2.88a1 1 0 001.414 0z'
                           clip-rule='evenodd'
                        />
                     </svg>
                  </div>
               </div>
               <img
                  src={logo}
                  className='w-7 cursor-pointer'
                  alt=''
                  srcset=''
               />
               <img
                  src={formData.avatar}
                  alt='Avatar'
                  className='h-10 w-10 rounded-full cursor-pointer'
               />

               <button
                  onClick={() => {
                     setNavOpen((e) => !e);
                  }}
                  className='md:hidden block'
                  id='mobile-menu-btn'>
                  {navOpen ? (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-gray-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           stroke-width='2'
                           d='M6 18L18 6M6 6l12 12'
                        />
                     </svg>
                  ) : (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-gray-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           stroke-width='2'
                           d='M4 6h16M4 12h16M4 18h16'
                        />
                     </svg>
                  )}
               </button>

               <button className='hidden md:block  bg-[#d20062d0] hover:bg-[#D20062] text-white px-4 py-2 rounded-lg '>
                  Upload
               </button>
            </div>
         </nav>
         <div className={` ${navOpen ? "block" : "hidden"}`}>
            <ul className='bg-gray-100  p-2'>
               <li>
                  <a href='#' className='block py-2 px-4 hover:bg-gray-100'>
                     Home
                  </a>
               </li>
               <li>
                  <a href='#' className='block py-2 px-4 hover:bg-gray-100'>
                     About
                  </a>
               </li>
               <li>
                  <a href='#' className='block py-2 px-4 hover:bg-gray-100'>
                     Services
                  </a>
               </li>
               <li>
                  <a href='#' className='block py-2 px-4 hover:bg-gray-100'>
                     Contact
                  </a>
               </li>
               <button className='md:hidden block  bg-[#d20062d0] hover:bg-[#D20062] text-white px-4 py-2 rounded-lg '>
                  Upload
               </button>
            </ul>
         </div>
      </div>
   );
}
