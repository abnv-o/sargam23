import React, { useState, useEffect } from 'react';
// ... other imports
import heroim from "../images/Sargamwhiteplain.png";
import bgvd from "../images/bgvd.mp4";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = useState('SARGAM'); // Initial English text
  const malayalamText = 'സർഗ്ഗം '; // Replace with your Malayalam text

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(text === 'SARGAM' ? malayalamText : 'SARGAM'); // Toggle between texts
    }, 3000); // Animate every 3 seconds

    return () => clearInterval(intervalId);
  }, [text, malayalamText]);

  return (
    <div className='flex flex-row justify-between items-center p-8 relative'>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <video autoPlay loop muted className='w-full h-full object-cover'>
          <source src={bgvd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div>

      {/* left */}
      <div className='flex flex-col justify-center pl-24 z-10 '>
        <h1 className='text-[#FFD6A5] text-9xl font-bold animate-smooth-fade'>
          {text}
        </h1>
        <h1 className='text-[#FFFEC4] text-9xl animate-pulse font-bold pt-4'>24</h1>
        <h2 className='text-gray-400 text-2xl mt-4 '>Cochin University Arts Fest</h2>
        <div className='w-56 h-28 border-2  border-[#FFCF81] rounded-3xl mt-5 items-center justify-center pl-4 '>
          <h1 className='text-white text-2xl p-3 items-center justify-center'>February 29    March 1,2,3,4</h1>
        </div>
        <div className='mt-10   '>
          <Link to="/livescore">
            <button className='bg-white w-56 h-20 rounded-2xl text-black border-2  hover:bg-red-500 hover:border-red-400 flex justify-around items-center '>
              <div className='bg-red-400 w-5 h-5 rounded-md animate-spin'></div>
              <div className='tracking-widest text-2xl text-gray-700 '>LIVE SCORE </div>
            </button>
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="z-10 opacity-60 h-screen flex items-center">
        <img src={heroim} alt="" className='h-[60rem] w-[50rem]' />
      </div>
    </div>
  );
}

export default Hero;
