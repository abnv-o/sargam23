import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://ufcgnfipctcnvcmpjehw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmY2duZmlwY3RjbnZjbXBqZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDE5MzUsImV4cCI6MjAyNDE3NzkzNX0.XDQoUK3jbozdUryLskOIO7WWYGhG5EVVeedgFdd59V0");

const Pointstable = () => {
  const [zoneData, setZoneData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('points').select('*');

      if (error) {
        throw error;
      }

      const processedData = {
        zone1: data.reduce((acc, row) => acc + row.zone1, 0),
        zone2: data.reduce((acc, row) => acc + row.zone2, 0),
        zone3: data.reduce((acc, row) => acc + row.zone3, 0),
        zone4: data.reduce((acc, row) => acc + row.zone4, 0),
        zone5: data.reduce((acc, row) => acc + row.zone5, 0),
        zone6: data.reduce((acc, row) => acc + row.zone6, 0),
        zone7: data.reduce((acc, row) => acc + row.zone7, 0),
        zone8: data.reduce((acc, row) => acc + row.zone8, 0),
      };

      setZoneData(processedData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Fetch data every 10 minutes
    const intervalId = setInterval(() => {
      fetchData();
    }, 10 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  

  



  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10'>
      <h1 className='text-6xl text-teal-500'>POINTS TABLE</h1>

      <div className='bg-[#2D9596] bg-opacity-60 rounded-xl w-7/12 h-4/6 py-4 flex flex-col justify-center gap-5'>
        
        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 1</h1>
        <h1>{zoneData.zone1}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 2</h1>
        <h1>{zoneData.zone2}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 3</h1>
        <h1>{zoneData.zone3}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 4</h1>
        <h1>{zoneData.zone4}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 5</h1>
        <h1>{zoneData.zone5}</h1>
        </div>


        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 6</h1>
        <h1>{zoneData.zone6}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 7</h1>
        <h1>{zoneData.zone7}</h1>
        </div>

        <div className='bg-[#265073] flex flex-row justify-around items-center bg-opacity-50 text-white text-3xl w-[1000px] h-32 mx-10 rounded-lg'> 
        <h1> Zone 8</h1>
        <h1>{zoneData.zone8}</h1>
        </div>

      
      </div>



    </div>
  )
}

export default Pointstable