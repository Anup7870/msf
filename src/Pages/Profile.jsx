import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";

export default function Profile() {
   return (
      <div className='w-full px-8 py-7'>
         <nav className='font-title text-pink-600 font-regular text-[1.5rem]'>
            dribbble
         </nav>
         <div className='w-full md:w-[60%] m-auto  mt-8'>
            <h1 className='font-bold text-4xl md:text-5xl'>
               Welcome! Let's create your profile
            </h1>
            <p className='mt-5 text-slate-500 font-medium md:font-semibold text-lg'>
               Let other get to know you better! You can do these later
            </p>
            <section>
               <ImageUpload />
            </section>
         </div>
      </div>
   );
}
