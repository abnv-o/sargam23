import React from "react";
import { Link } from "react-router-dom";
import lit from "../images/literature.png"
import music from"../images/musical-note.png"
import theater from "../images/theatre.png"
import fine from "../images/fine-arts.png"
import dance from "../images/dancing.png"


function Events() {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700 itim-regular tracking-widest">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
      </style>
      <h1 className="text-3xl py-4 text-white tracking-widest">EVENT</h1>
     
     <div className="flex flex-col items-center p-8 gap-8 bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 lg:flex lg:flex-row">
      <div className="flex flex-col justify-center  items-center w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={lit} alt="" className="h-12 px-2 pt-1"  />
        <h1 className="text-white p-2 mb-3">Literature</h1>
      </div>

      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-white hover:bg-black  lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={music} alt="" className="h-12 px-2 pt-1"  />
        <h1 className="text-white p-2 mb-3">Music</h1>
      </div>

      <div className="flex flex-col justify-center  items-center w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={fine} alt="" className="h-12 px-2 pt-1"  />
        <h1 className="text-white p-2 mb-3">Finearts</h1>
      </div>

      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-white hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={dance} alt="" className="h-12 px-2 pt-1 "  />
        <h1 className="text-white p-2 mb-3">Dance</h1>
      </div>

      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={theater} alt="" className="h-12 px-2 pt-1 "  />
        <h1 className="text-white p-2 mb-3">Theater</h1>
      </div>


      </div>

      </div>
  );
}

export default Events;
