import React from "react";

export default function Card({ card, checked, setChecked, value }) {
   return (
      <div
         className={`border-2  rounded-3xl px-0 md:px-6 py-7 text-center  ${
            checked ? " border-checked" : "border-gray-100"
         }`}>
         <div className={`w-[250px]  relative ${checked ? "-top-[80px]" : ""}`}>
            <img src={card.image} />
            <h2 className='font-bold text-2xl mt-3'>{card.title}</h2>
            {/* absolute */}
            <p
               className={`${
                  !checked ? "hidden" : "absolute font-semibold text-md mt-2"
               }`}>
               {card.description}
            </p>
         </div>
         <input
            onChange={() => {
               setChecked((prev) => !prev);
            }}
            checked={value}
            type='checkbox'
            name=''
            id=''
            className={`rounded-full w-7 h-7  mt-8 focus:ring-0 focus:ring-offset-0 ${
               checked ? " bg-checked" : "border-gray-300"
            } `}
         />
      </div>
   );
}
