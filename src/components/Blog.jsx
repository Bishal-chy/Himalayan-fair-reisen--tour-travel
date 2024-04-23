import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdWalk } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";



const Blog = () => {
return (

<section >
<main className=' w-full  flex justify-center'>
{/* aboutus- text */}
<div className=''>
<div className=' grid grid-cols-2 mx-20 my-20 gap-5'>
<div className=''>
<div className='flex items-center'>
<span className='w-8 font-bold text-3xl text-red-500'><GrSubtract /></span>
<h3 className='text-red-500'>ABOUT HIMALAYAN FAIR RESIEN</h3>

</div>
<div>
<h1 className='text-4xl font-bold leading-snug'>
BEST TREKKING PARTNER FOR YOUR HOLIDAYS
</h1>
</div>
<div>
<p className='leading-loose'>At Himalayan Fair Reisen, safety is paramount. Our guides are trained in wilderness first aid and possess the expertise to navigate the rugged Himalayan terrain safely. Moreover, we prioritize responsible tourism, . Whether you dream of standing atop the world's highest peaks, immersing yourself in the vibrant cultures of Himalayan villages, or simply escaping the hustle and bustle of daily life, Himalayan Fair Reisen is here to transform your dreams into reality. Join us on an unforgettable adventure and discover the enchanting beauty of the Himalayas with Himalayan Fair Reisen. With our dedicated team of experienced guides and a passion for exploration, we're committed to providing personalized and immersive adventures that cater to all levels of trekkers.</p>
</div>
</div>

{/*image*/}
<div>
<div>
<img src='/public/image/internbannerimg.jpeg' alt='img'/>
</div>
</div>
</div>


{/* why choose us*/ }
<div className=''>
<div className='grid grid-cols-2   gap-5 mx-20  '>

{/* image section*/}
<div className='w-full '>
<div className='container flex justify-between w-full h-[575px] '>
<div className=''>
<img className='h-[575px] w-[100rem]  ' src='/public/image/chooseusimg.jpeg' alt='img'/>
</div>
<div className='bg-red-400    h-[575px] '>
<div className='flex flex-col  items-center w-[190px] py-6'>
<IoMdWalk className='text-6xl text-white' />
<h1 className='text-white text-2xl'>2560</h1>
<h2 className='text-white text-xl'>Satisfied clients</h2>
<hr className="border-white w-full mt-2"/>
</div>
<div className='flex flex-col items-center w-[190px] py-6'>
<GiWorld  className='text-6xl text-white'/>

<h1 className='text-white text-2xl'>2560</h1>
<h2 className='text-white text-xl'>Great Tours</h2>
<hr className="border-white w-full mt-2"/>

</div>
<div className='flex flex-col items-center  w-[190px] py-6'>
<FaHiking className='text-6xl text-white' />
<h1 className='text-white text-2xl'>2560</h1>
<h2 className='text-white text-xl'>Organized Trip</h2>

</div>



</div>
</div>
</div>

{/* text section*/}
<div>
<div className='w-full  h-[575px] px-1'>

<div className='flex items-center'>
<span className='w-8 font-bold text-3xl text-red-500'><GrSubtract /></span>
<h3 className='text-red-500'>AMONGST All</h3>
</div>
<div>
<h1 className='text-4xl font-bold leading-snug'>
　　　Why Choose Us?
</h1>
</div>
<div>
<p className='leading-loose'>At Himalayan Fair Reisen, safety is paramount. Our guides are trained in wilderness first aid and possess the expertise to navigate the rugged Himalayan terrain safely. Moreover, we prioritize responsible tourism, . Whether you dream of standing atop the world's highest peaks, immersing yourself in the vibrant cultures of Himalayan villages, or simply escaping the hustle and bustle of daily life, Himalayan Fair Reisen is here to transform your dreams into reality. Join us on an unforgettable adventure and discover the enchanting beauty of the Himalayas with Himalayan Fair Reisen. With our dedicated team of experienced guides and a passion for exploration, we're committed to providing personalized and immersive adventures that cater to all levels of trekkers.</p>
</div>


{/* check mark text section*/}

{/* first column*/}

<div className='flex '>

<div className='w-56'>
<div className='flex items-center py-3'>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3 '>Diverse Destinations</p>
</div>
<div className='flex items-center py-2 '>
<span className='text-red-600' ><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
<div className='flex items-center py-2'>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
<div className='flex items-center py-2'>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
</div>

{/*2nd column */}


<div className='w-56'>
<div className='flex items-center py-3'>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
<div className='flex items-center py-2 '>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
<div className='flex items-center py-2 '>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
<div className='flex items-center py-2 '>
<span className='text-red-600'><IoIosCheckmarkCircle /></span>
<p className='px-3'>Diverse Destinations</p>
</div>
</div>
</div>


</div>
</div>
</div>
</div>

{/* whatsup logo*/}

</div>









</main>

<div className=' mt-4 w-full flex justify-center items-center'>
<div className='  w-full px-20   mx-15 h-20 flex justify-end my-4 '>
<span className='text-4xl flex items-center justify-center h-14 w-14 rounded-full bg-DarkRed text-white'><IoLogoWhatsapp /></span>

</div>
</div>
</section>


)
}

export default Blog