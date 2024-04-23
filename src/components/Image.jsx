import React from 'react'


const Image = (props) => {
  
  return (
    <section className=''>
    {/* about-us img */}
    <figure className='relative w-full h-full flex justify-center  bg-cyan-600'>
    <div className='w-full h-full'>
        <img className='h-[550px]  w-full opacity-50' src='/public/image/internimg.jpeg' alt='nature'/>
        
        <div className='absolute top-60 w-full flex justify-center  '>
        <div className=''>
            <h1 className='text-white opacity-70 text-5xl'>{props.name}</h1>
            </div>
        </div>
        </div>
    </figure>

    
      
    </section>
  )
}

export default Image