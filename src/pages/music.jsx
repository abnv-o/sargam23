import React from "react";

const music = () => {
  return (
    <div>
      {/* parent */}
      <div className="flex flex-col h-screen justify-center gap-5 p-20 bg-[#E1F0DA]">
        {/* top */}
        <div className="flex flex-row justify-around items-start p-10">
          
          {/* data */}
          <div className="flex flex-col justify-center items-center  bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
              <h1>LIGHT MUSIC(M/F)</h1>
              <h1>MAPPILAPPATTU(M/F)</h1>
              <h1>HINDUSTANI VOCAL(M/F)</h1>
              <h1>GAZAL(M/F)</h1>
              <h1>WESTERN VOCAL SOLO</h1>
              <h1>CLASSICAL MUSIC(M/F)</h1>
          </div>
          {/* data end */}

          {/* data */}
          <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
              <h1>STRINGED INSTRUMENTS</h1>
              <ul>
                <li>VEENA</li>
                <li>EASTERN STYLE</li>
                <li>WESTERN STYLE</li>
                <li>GUITAR</li>
              </ul>
          </div>
          {/* data end */}
        {/* data */}
        <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
              <h1>WIND INSTRUMENTS</h1>
              <ul>
                <li>EASTERN STYLE</li>
                <li>WESTERN STYLE</li>
              </ul>
          </div>
          {/* data end */}
      
        </div>

        {/* bottom */}
        <div className="flex flex-row justify-around items-start p-10">

          {/* data */}
        <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
              <h1>PERCUSSION INSTRUMENT</h1>
              <u1>
                <li>TABLA</li>
                <li>EASTERN STYLE</li>
                <li>WESTERN STYLE</li>
                <li>CHENDA</li>
            </u1>
          </div>
          {/* data end */}

            {/* data */}
        <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
              <h1>GANAMELA</h1>
              <h1>WESTERN VOCAL GROUP</h1>
              <h1>VANJIPATTU</h1>
              <h1>GROUP SONG</h1>
              <h1>FOLK SONG</h1>
              <h1>VRINDAVADYAM</h1>
          </div>
          {/* data end */}



        </div>
      </div>
    </div>
  );
};

export default music;