import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import formImage from "../assets/formImage.jpg";
import Form from "../components/Form";
import { MyContext } from "../Context.js";
import { useContext } from "react";
export default function Details() {
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const { formData, setFormData } = useContext(MyContext);
   console.log(formData);
   return (
      <div className=' flex flex-col md:flex-row font-main'>
         <div className='hidden md:block bg-form h-screen w-[35%] bg-center bg-cover'></div>
         <div className='block md:hidden bg-form h-[34rem] w-full bg-center bg-cover'></div>
         <div className='w-full md:w-[75%] px-7 py-3'>
            <div className='hidden md:block text-right font-semibold text-sm font-main mt-2'>
               Already a member?{" "}
               <a href='#' className='text-blue-500'>
                  Login
               </a>
            </div>
            <div className='w-full md:w-[53%] m-auto mt-7'>
               <h1 className=' font-bold text-2xl md:text-4xl font-main '>
                  Sign up to Dribbble
               </h1>
               <div className='text-red-600 font-semibold text-sm h-16 flex items-center'>
                  {isError && (
                     <p className='ml-7'>
                        <ul className=' list-disc'>
                           <li>{errorMessage}</li>
                        </ul>
                     </p>
                  )}
               </div>
               <Form
                  isError={isError}
                  setIsError={setIsError}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
               />
            </div>
         </div>
      </div>
   );
}
