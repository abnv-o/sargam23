import React from "react";
import { Link } from "react-router-dom";
import lit from "../images/literature.png"
import music from"../images/musical-note.png"
import theater from "../images/theatre.png"
import fine from "../images/fine-arts.png"
import dance from "../images/dancing.png"


function Events() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl py-4"><u>EVENTS</u></h1>
     
     <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-center  items-center bg-red-400 w-72 h-24 rounded-xl border-2 border-red-500 drop-shadow-lg ">
        <img src={lit} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Literature</h1>
      </div>

      <div className="flex flex-col justify-center  items-center bg-green-400 w-72 h-24 rounded-xl border-2 border-green-500 drop-shadow-lg ">
        <img src={music} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Music</h1>
      </div>

      <div className="flex flex-col justify-center  items-center bg-red-400 w-72 h-24 rounded-xl border-2 border-red-500 drop-shadow-lg ">
        <img src={fine} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Finearts</h1>
      </div>

      <div className="flex flex-col justify-center  items-center bg-green-400 w-72 h-24 rounded-xl border-2 border-green-500 drop-shadow-lg ">
        <img src={dance} alt="" className="h-12 px-2 pt-2 "  />
        <h1 className="text-white p-2 mb-3">Dance</h1>
      </div>
      </div>

      </div>
  );
}

export default Events;
