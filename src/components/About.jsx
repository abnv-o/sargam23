import React from "react";
 
function About() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between  ">
      
  
      <div className="flex items-center justify-center pt-4 lg:w-1/2">
        <img src="images/about-img.png" alt="" className="p-4" />
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
      </style>
      <div className="flex flex-col items-center justify-center itim-regular text-center text-red-400 lg:w-1/2">
        <h1 className="text-2xl tracking-widest mb-3 text-white lg:m-2">
          ABOUT
        </h1>
        <p className="text-gray-300 p-3">
        The Cochin University Students Union's arts festival is pleased to announce the return of SARGAM for another year. The unique arts festival is centred around a lively group of more than 9000 students from CUSAT campuses (Thrikakkara, Lakeside, Pullincunnu) and other associated colleges. The festivities for the five-day festival begin on February 29 and last through March 4. Make sure to put February 29–March 4 on your calendars so you don't miss the fun! Will see you there, prepare to be amazed!
        </p>
      </div>
    </div>
  );
}

export default About;
