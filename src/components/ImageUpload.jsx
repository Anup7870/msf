import React, { useEffect, useContext } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import { useState } from "react";
import { faAngleRight, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context.js";
export default function ImageUpload() {
   const [image, setImage] = useState(null);
   const [deafultOpen, setDeafultOpen] = useState(false);
   const [location, setLocation] = useState(null);
   const [filled, setFilled] = useState(false);
   const { formData, setFormData } = useContext(MyContext);
   const navigate = useNavigate();
   useEffect(() => {
      if (formData.avatar || formData.location) {
         setFilled(true);
      } else {
         setFilled(false);
      }
      console.log(formData);
   }, [formData]);
   return (
      <div className='mt-8'>
         <h2 className=' font-bold text-2xl'>Add an avatar</h2>
         <div className='flex flex-col gap-8 items-center  md:items-start md:flex-row mt-6'>
            <input
               type='file'
               accept='image/png, image/jpeg'
               id='imageUplaod'
               className='hidden'
               onChange={(e) => {
                  setFormData((prev) => ({
                     ...prev,
                     avatar: URL.createObjectURL(e.target.files[0]),
                  }));
               }}
            />
            <div
               className={` w-44 h-44 rounded-full border-4 ${
                  !formData.avatar ? "border-dashed" : "border-none"
               } flex items-center justify-center `}
               onClick={() => document.getElementById("imageUplaod").click()}>
               {formData.avatar === null ? (
                  <BiSolidCameraPlus className='text-3xl text-slate-400' />
               ) : (
                  <img
                     src={formData.avatar}
                     alt='profile'
                     className='w-full h-full rounded-full'
                  />
               )}
            </div>
            <div className='w-auto'>
               <button
                  className='border-2 px-6 py-3 rounded-lg font-semibold'
                  onClick={() =>
                     document.getElementById("imageUplaod").click()
                  }>
                  Choose image
               </button>
               <div
                  className='font-semibold text-slate-400 text-sm mt-4 cursor-pointer'
                  onClick={() => setDeafultOpen(!deafultOpen)}>
                  <FontAwesomeIcon
                     icon={faAngleRight}
                     className={`ont-normal text-sm text-slate-500 ${
                        deafultOpen ? "rotate-90" : ""
                     } duration-75`}
                  />{" "}
                  Or choose one of our defaults
               </div>
               <div className='w-full'>
                  {deafultOpen && (
                     <div className='flex gap-6 overflow-auto mt-1'>
                        <img
                           className=' w-20 h-21 cursor-pointer'
                           src={avatar1}
                           alt=''
                           srcset=''
                           onClick={() => {
                              setFormData((prev) => ({
                                 ...prev,
                                 avatar: avatar1,
                              }));
                           }}
                        />
                        <img
                           className=' w-20 h-21 cursor-pointer'
                           src={avatar2}
                           alt=''
                           srcset=''
                           onClick={() => {
                              setFormData((prev) => ({
                                 ...prev,
                                 avatar: avatar2,
                              }));
                           }}
                        />
                        <img
                           className=' w-20 h-21 cursor-pointer'
                           src={avatar3}
                           alt=''
                           srcset=''
                           onClick={() => {
                              setFormData((prev) => ({ ...prev, avatar: 3 }));
                           }}
                        />
                        <img
                           className=' w-20 h-21  cursor-pointer'
                           src={avatar4}
                           alt=''
                           srcset=''
                           onClick={() => {
                              setFormData((prev) => ({
                                 ...prev,
                                 avatar: avatar4,
                              }));
                           }}
                        />
                     </div>
                  )}
               </div>
            </div>
         </div>
         <div className='w-full mt-12'>
            <h2 className=' font-bold text-2xl'>Add your location</h2>
            <input
               onChange={(e) => {
                  setFormData((prev) => ({
                     ...prev,
                     location: e.target.value,
                  }));
               }}
               type='text'
               value={formData.location}
               className='w-full font-semibold text-lg mt-5 border-t-0 border-r-0 border-l-0 border-gray-400 border-b-2 focus:ring-0 focus:ring-offset-0'
            />
         </div>
         <button
            type='submit'
            disabled={!filled}
            onClick={() => navigate("/options")}
            className={`   text-white px-20 py-2 rounded-lg mt-8 ${
               filled ? " bg-[#d20062d0] hover:bg-[#D20062]" : "bg-[#d200627a]"
            }`}>
            Next
         </button>
         {filled && (
            <p className='text-slate-500 ml-6 mt-2 font-semibold'>
               or Press RETURN
            </p>
         )}
      </div>
   );
}
