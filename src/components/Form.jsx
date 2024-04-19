import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Context.js";
export default function Form({
   setIsError,
   isError,
   setErrorMessage,
   errorMessage,
}) {
   //const data = {
   //  name: "",
   //username: "",
   //email: "",
   //   password: "",
   // }
   const { formData, setFormData } = useContext(MyContext);
   const [emailError, setEmailError] = useState(null);
   const navigate = useNavigate();
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         formData.name === "" &&
         formData.username === "" &&
         formData.email === "" &&
         formData.password === ""
      ) {
         setIsError(true);
         setEmailError(true);
         setErrorMessage("Please fill all the field");
         return;
      }
      if (
         formData.email === "" ||
         !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      ) {
         setIsError(true);
         setErrorMessage("Please fill the Email or check the email format");
         setEmailError(true);
         return;
      }

      setIsError(false);
      setErrorMessage("");
      setEmailError(false);
      console.log(formData);
      navigate("/profile");
   };
   return (
      <div>
         <form action='' className='mt-4'>
            <div className='gap-5 flex flex-col'>
               <div className='flex flex-col  md:flex-row justify-between'>
                  <div className='flex flex-col '>
                     <span className=' font-semibold  '>
                        {isError && formData.name === "" && (
                           <FontAwesomeIcon
                              icon={faTriangleExclamation}
                              style={{ color: "#da1616" }}
                           />
                        )}
                        Name
                     </span>
                     <input
                        type='text'
                        name='name'
                        value={formData.name}
                        className={`bg-gray-100 border-none rounded-md font-normal ${
                           isError &&
                           formData.name === "" &&
                           "bg-red-200 text-red-600"
                        }`}
                        onChange={handleChange}
                     />
                  </div>
                  <div className='flex flex-col '>
                     <span className=' font-bold text-md flex items-center gap-1 '>
                        {isError && formData.username === "" && (
                           <FontAwesomeIcon
                              icon={faTriangleExclamation}
                              style={{ color: "#da1616" }}
                           />
                        )}
                        Username
                     </span>
                     <input
                        type='text'
                        value={formData.username}
                        name='username'
                        onChange={handleChange}
                        className={`bg-gray-100 border-none rounded-md font-normal ${
                           isError &&
                           formData.username === "" &&
                           "bg-red-200 text-red-600"
                        }`}
                     />
                  </div>
               </div>
               <div className='flex flex-col '>
                  <span className=' font-semibold  '>
                     {isError && emailError && (
                        <FontAwesomeIcon
                           icon={faTriangleExclamation}
                           style={{ color: "#da1616" }}
                        />
                     )}
                     Email
                  </span>
                  <input
                     name='email'
                     type='text'
                     value={formData.email}
                     onChange={handleChange}
                     className={`bg-gray-100 border-none rounded-md font-normal ${
                        isError && emailError && "bg-red-200 text-red-600"
                     }`}
                  />
               </div>
               <div className='flex flex-col '>
                  <span className=' font-semibold  '>
                     {isError &&
                        formData.password === "" &&
                        formData.password.length < 6 && (
                           <FontAwesomeIcon
                              icon={faTriangleExclamation}
                              style={{ color: "#da1616" }}
                           />
                        )}
                     Password
                  </span>
                  <input
                     type='password'
                     name='password'
                     value={formData.password}
                     onChange={handleChange}
                     className={`bg-gray-100 border-none rounded-md font-normal ${
                        isError &&
                        formData.email === "" &&
                        "bg-red-200 text-red-600"
                     }`}
                     placeholder='6+ character'
                  />
               </div>
               <div className='flex gap-2'>
                  <input
                     type='checkbox'
                     name=''
                     id=''
                     className=' border border-gray-400 outline-none'
                  />
                  <p className=' font-light text-sm text-slate-500'>
                     Creating an account means you're okay with our
                     <a href='#' className=' text-blue-600'>
                        Tearm and Service, Privacy, Policy,
                     </a>{" "}
                     and our default <a href='#'>Notification Settings</a>.
                  </p>
               </div>
            </div>

            <button
               type='submit'
               onClick={handleSubmit}
               className=' bg-[#d20062d0] hover:bg-[#D20062] text-white px-8 py-2 rounded-lg mt-8'>
               Create Account
            </button>
            <div className='md:hidden block text-left font-semibold text-sm font-main mt-7'>
               Already a member?{" "}
               <a href='#' className='text-blue-500'>
                  Login
               </a>
            </div>
            <p className=' font-extralight text-xs text-slate-500 mt-8'>
               This site is protected by reCAPTCHA and the google{" "}
               <span className='text-blue-600'>Privacy Policy</span> and{" "}
               <span className='text-blue-600'>Term and Service</span> apply
            </p>
         </form>
      </div>
   );
}
