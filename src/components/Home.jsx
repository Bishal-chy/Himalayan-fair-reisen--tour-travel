import React from 'react'
import Destination from './Destination';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <main className=''>
    <div className="relative">
      <video className="w-full pt-0" autoPlay muted loop onLoadedData={() => setVideoLoaded(true)} >
        <source src="/public/image/heromp4.mp4" type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className={`absolute flex justify-center w-[60rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl ${videoLoaded ? 'block' : 'hidden'}`}>
        <div className="typing-animation">
          <h1 className='font-bold'>Be Prepared For The Mountains And <span className='text-slate-700'>Beyond!</span></h1>
          <div className=' flex justify-center mt-2'>
          <p className='text-lg text-slate-300'> Your Journey Your Story</p>
          </div>
          <div className=' mt-5 flex justify-center'>
          <button className='bg-transparent border border-white rounded-md hover:bg-slate-800 hover:scale-105  px-4 py-3'>Explore More</button>
          </div>
        </div>
        
      </div>
    </div>
    <Destination />
  </main>

  
  );
};




export default Home
