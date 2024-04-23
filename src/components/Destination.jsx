import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";

const Destination = () => {
  return (
    <section>
    <div className='destination my-14  mx-6 '>
    <div className=' flex flex-col  items-center'>
    <h1 className='text-3xl'>Popular Destination</h1>
    <p>Tours give youthe opportunity to a see a lot, within a time frame.</p>
    </div>
      <div className='w-full my-10 justify-center'>
    <div className='first-description  grid grid-cols-2 gap-8 mx-16 '>
    <div className='description-txt  w-full '>
    <h2 className='text-3xl my-10'>Langtang valley </h2>
    <p>At Himalayan Fair Reisen, safety is paramount. Our guides are trained in wilderness first aid and possess the expertise to navigate the rugged Himalayan terrain safely. Moreover, we prioritize responsible tourism, . Whether you dream of standing atop the world's highest peaks, immersing yourself in the vibrant cultures of Himalayan villages, or simply escaping the hustle and bustle of daily life, Himalayan Fair Reisen is here to transform your dreams into reality. Join us on an unforgettable adventure and discover the enchanting beauty of the Himalayas with Himalayan Fair Reisen. With our dedicated team of experienced guides and a passion for exploration, we're committed to providing personalized and immersive adventures that cater to all levels of trekkers.</p>
    <div className=' rounded-2xl w-[9.5rem]'>
    <NavLink className="" to="/singlepage">
    <span className='flex  items-center gap-2 w-[10rem]  rounded-2xl my-5'>
    <button className='text-xl  text-slate-700 hover:text-DarkRed underline  '>Explore more </button>
    
    <AiOutlineArrowRight className='bg-DarkRed text-white w-7 h-7 rounded-full hover:translate-x-3 duration-150' />
    </span>
    </NavLink>
    </div>

    </div>
    <div className='image  w-full  h-[25rem] my-10 '>
        <img className='w-[26rem] h-[15rem]' src='/public/image/langtangimg.jpeg' alt='image'/>
        <div className=' flex justify-end'>
        <img className='w-[15rem] ' src='/public/image/internbannerimg.jpeg' alt='image'/>
        </div>
        
    </div>

    </div>
    </div>
  





  


   
    </div>
      
    </section>
  )
}

export default Destination
