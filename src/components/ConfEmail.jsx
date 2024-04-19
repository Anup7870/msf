import React, { useContext } from "react";
import email from "../assets/email.jpg";
import { MyContext } from "../Context";
import { Link } from "react-router-dom";
export default function ConfEmail() {
   const { formData } = useContext(MyContext);
   return (
      <div className=' w-[90%] md:w-[52%] m-auto text-center flex items-center flex-col py-20'>
         <h1 className=' font-extrabold text-2xl md:text-4xl'>
            Please verify your email
         </h1>
         <img src={email} alt='email' className='mt-2 h-24 md:h-auto' />
         <div className='flex flex-col gap-5'>
            <p className='text-slate-600 font-semibold text-base md:text-lg'>
               Please verify email address. We've sent a confirmation email to:
            </p>
            <span className=' font-extrabold text-base md:text-lg'>
               {formData.email}
            </span>
            <p className='text-slate-600 font-semibold text-base md:text-lg'>
               Click the confirmation link in that email to begin using
               Dribbble.
            </p>
            <p className='text-slate-600 font-semibold text-base md:text-lg'>
               Didn't receive the email? Check your Spam folder, it may have bee
               caughtby a filter. If you still don't see it, you can{" "}
               <span className='text-[#d20062d0] cursor-pointer'>
                  {" "}
                  resend the confirmation email.
               </span>
            </p>
            <p className='text-slate-600 font-semibold text-base md:text-lg'>
               Wrong email adress?{" "}
               <span className='text-[#d20062d0] cursor-pointer'>
                  <Link to='/'>Change it.</Link>
               </span>
            </p>
         </div>
      </div>
   );
}
