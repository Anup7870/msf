import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import Options from "./Pages/Options";
import Confirmation from "./Pages/Confirmation";
import { useState } from "react";
// import Context from "./Context.js";
import { MyContext } from "./Context.js";
export default function App() {
   const [formData, setFormData] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
      avatar: null,
      location: "",
      opt1: false,
      opt2: false,
      opt3: false,
   });
   return (
      <MyContext.Provider value={{ formData, setFormData }}>
         <div className='w-full h-screen'>
            <Routes>
               <Route path='/' element={<Details />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/options' element={<Options />} />
               <Route path='/confirm' element={<Confirmation />} />
            </Routes>
         </div>
      </MyContext.Provider>
   );
}
