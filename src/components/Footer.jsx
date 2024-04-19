import {
   faDribbble,
   faTwitter,
   faSquareFacebook,
   faInstagram,
   faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { LiaCopyright } from "react-icons/lia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
   return (
      <div className=' bg-gray-100  px-10 md:px-13 py-16'>
         <section className='flex flex-col md:flex-row '>
            <div className=' w-full md:w-[20%]'>
               <nav className='font-title text-pink-600 font-regular text-[1.5rem] '>
                  dribbble
               </nav>
               <p className=' text-slate-800 font-semibold text-sm mt-3'>
                  Dribble is the world's leading community for creatives to
                  share, grow, and get hired{" "}
               </p>
               <div className='flex gap-3 mt-5'>
                  <FontAwesomeIcon icon={faDribbble} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faSquareFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faPinterest} />
               </div>
            </div>
            <div className='flex flex-row flex-wrap flex-1 gap-4 justify-normal md:justify-evenly mt-8 w-full md:w-[75%]   '>
               <div className='flex flex-col gap-2 col-span-1'>
                  <span className='font-bold '>For designers</span>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Go pro!
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Explore design work
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Design blog
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Overtime podcast
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Playoffs
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Weekly Warm-up
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Refer a Friend
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Code of conduct
                  </p>
               </div>
               <div className='flex flex-col gap-2 col-span-1 '>
                  <span className='font-bold'>Hire designer</span>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Post a job oppening
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Post a freelance project
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Search a designer
                  </p>
                  <span className='font-bold'>Brand</span>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Advertise with us
                  </p>
               </div>
               <div className='flex flex-col gap-2 col-span-1 '>
                  <span className='font-bold'>Company</span>{" "}
                  <p className='font-semibold text-slate-600 text-sm md:text-base '>
                     About
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base'>
                     Careers
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Support
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Media take
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Testimonials
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     API
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Tearm of service
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Privacy policy
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Cookie policy
                  </p>
               </div>

               <div className='flex flex-col gap-2 col-span-1'>
                  <span className='font-bold'>Directiories</span>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Design jobs
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Designers for hire
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Tags
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Places
                  </p>
                  <span className='font-bold'>Design assets</span>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Dribbble Marketplace
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Creative Market
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Fontspring
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Font Squirrel
                  </p>
               </div>
               <div className='flex flex-col gap-2 col-span-1'>
                  <span className='font-bold'>Designer Resource</span>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Freelancing
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Design Hiring
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Design Portfolio
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Design Education
                  </p>
                  <p className='font-semibold text-slate-600 text-sm md:text-base '>
                     Creative Process
                  </p>
                  <p className='font-semibold text-slate-600  text-sm md:text-base'>
                     Design Industry Trends
                  </p>
               </div>
            </div>
         </section>
         <div className='mt-10'>
            <div className='w-full border-t-2 border-gray-300 my-3 '></div>
            <div className='flex justify-between flex-col md:flex-row py-7 text-sm'>
               <div className='flex items-center gap-1'>
                  <LiaCopyright />
                  <p className=''> 2023 Dribbble. All right reserved.</p>
               </div>
               <div className='flex items-center gap-2 mt-3 md:mt-0'>
                  <span className='font-bold'>20,501,853</span>
                  <p> shots dribbbled</p>
                  <FontAwesomeIcon
                     icon={faDribbble}
                     fill='#d20062d0'
                     stroke='#D20062'
                     className='text-[#D20062]'
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
