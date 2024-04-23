import React from 'react'
import { useEffect } from 'react';

const Services = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <section>
    <div className='flex justify-center '>
    <img className='w-[70rem] h-[50rem] my-14' src='/public/image/errorimg.jpeg' 
      alt='img'/>
      </div>
    </section>
  )
}

export default Services
