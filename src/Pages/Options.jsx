import React, { useState, useEffect } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import Card from "../components/Card";
import { useContext } from "react";
import { MyContext } from "../Context.js";
export default function Options() {
   const navigate = useNavigate();
   const { formData, setFormData } = useContext(MyContext);
   const [checked1, setChecked1] = useState(false);
   const [checked2, setChecked2] = useState(false);
   const [checked3, setChecked3] = useState(false);
   const [isChecked, setIsChecked] = useState(false);
   useEffect(() => {
      setIsChecked(checked1 || checked2 || checked3);
      setFormData({
         ...formData,
         opt1: checked1,
         opt2: checked2,
         opt3: checked3,
      });
      console.log(formData);
   }, [checked1, checked2, checked3]);
   const cards = [
      {
         title: "I'm designer looking to share my work",
         description:
            "With over 7 million short fron a vast community of designers, Dribble is the leading source for design inpiration",
         image: card1,
         checked: checked1,
      },
      {
         title: "I'm looking to hire a designer",
         description:
            "Take the pain out of your search for the perfect designer by browsing the best work from the world's top talent.",
         image: card2,
         checked: checked2,
      },
      {
         title: "I'm looking for design inspiration",
         description:
            "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
         image: card3,
         checked: checked3,
      },
   ];
   return (
      <div className='w-full px-8 py-7'>
         <nav className='font-title  font-regular text-[1.5rem] flex gap-8'>
            <p className='text-pink-600'>dribbble</p>
            <div
               className='text-[.8rem] bg-gray-100 text-slate-500 flex items-center justify-center px-4 rounded-md cursor-pointer'
               onClick={() => navigate("/profile")}>
               <FontAwesomeIcon icon={faAngleLeft} />
            </div>
         </nav>
         <section className='w-full m-auto  mt-8 '>
            <div className='text-center'>
               <h1 className='font-bold text-3xl md:text-4xl'>
                  What bring you to Dribbble?
               </h1>
               <p className='mt-5 text-slate-500 font-medium md:font-semibold text-lg'>
                  Select the option that best discribe you. Don't worry, you can
                  explore other option later.
               </p>
            </div>
            <section className=' w-[75%] m-auto text-center mt-20'>
               <div className='flex flex-col md:flex-row gap-10   justify-between '>
                  <Card
                     value={formData.opt1}
                     card={cards[0]}
                     checked={checked1}
                     setChecked={setChecked1}
                  />
                  <Card
                     value={formData.opt2}
                     card={cards[1]}
                     checked={checked2}
                     setChecked={setChecked2}
                  />
                  <Card
                     value={formData.opt3}
                     card={cards[2]}
                     checked={checked3}
                     setChecked={setChecked3}
                  />
               </div>

               <div className='mt-10'>
                  <h3 className='font-bold'>
                     Anything else? You can submit multiple
                  </h3>
                  <button
                     type='submit'
                     disabled={!checked1 && !checked2 && !checked3}
                     onClick={() => navigate("/confirm")}
                     className=' bg-[#d20062d0] hover:bg-[#D20062] text-white px-8 py-2 rounded-lg mt-8'>
                     Create Account
                  </button>
                  {isChecked && (
                     <p className='text-slate-500 ml-0 mt-2 font-semibold'>
                        or Press RETURN
                     </p>
                  )}
               </div>
            </section>
         </section>
      </div>
   );
}
