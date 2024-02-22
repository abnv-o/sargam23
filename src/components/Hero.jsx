import React from 'react';
import heroim from "../images/hero.png";
import bgvd from "../images/bgvd.mp4";
import { Link } from 'react-router-dom';





const Hero = () => {
  return (
    <div className='flex flex-row justify-between items-center p-8 relative'>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <video autoPlay loop muted className='w-full h-full object-cover'>
          <source src={bgvd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* left */}
      <div className='flex flex-col justify-center pl-24 z-10 '>
        <h1 className='text-[#FFA447] text-9xl font-bold '>SARGAM</h1>
        <h1 className='text-[#FFCF81] text-9xl animate-bounce font-bold'>24</h1>
        <h2 className='text-gray-400 text-2xl mt-4 '>Cochin University Arts Fest</h2>
        <div className='w-[250px] h-[100px] border-2  border-[#FFCF81] rounded-3xl mt-5 items-center justify-center pl-4 '>
          <h1 className='text-white text-2xl p-3 items-center justify-center'>February 29    March 1,2,3,4</h1>
          
        </div>
        <div className='mt-10 ml-10'>
          
        <Link to="/livescore">  <button  className='bg-white w-44 h-14 rounded-2xl text-black border-2  hover:bg-red-500 hover:border-red-400 flex justify-evenly items-center gap-3'><div className='bg-red-500 w-2 h-2 rounded-full animate-ping '></div><div className='tracking-widest'>LIVE SCORE </div>  </button></Link>
        </div>
      </div>

      {/* right */}
      <div className="z-10 ">
        <img src={heroim} alt=""  />
      </div>
    </div>
  );
}

export default Hero;
