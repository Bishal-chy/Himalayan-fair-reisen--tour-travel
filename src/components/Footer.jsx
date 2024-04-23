import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Gototop from './Gototop';





const Footer = () => {
  return (

    <footer className=' '>
      {/* footer section */}
     
      <div className='relative h-[45rem] bg-gradient-to-t w-full from-black to-white'>
             <img className='h-[45rem] w-full opacity-35' src='/public/image/2ndfooterimg.jpeg'/>

               
                
                <div className=' absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  grid  grid-cols-3 '>
                {/* 1st column*/}
                <div className=' w-full '>
                <div className='ml-20  '>
                    <div className='flex items-center  h-28'>
                        <img className='w-[190px] h-[160px] justify-center' src='/public/image/internfooterlogo.png' />
                        <h1 className='w-36 font-bold text-red-500'>HIMALAYAN FAIR REISEN PVT.LTD</h1>
                    </div>
                    
                    <p className=' w-full text-slate-200  leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo this is some dummy text.</p>
                
                </div>
    
                <div className='flex justify-end py-8'>
                <div className='flex items-center gap-2 w-32  text-blue-900 hover:text-red-500 cursor-pointer'>
                    
                    <p className='font-bold '>Read More</p>
                    <span><FaArrowRightLong /></span>
                </div>
                </div>

                <div>
                    <p className='font-bold px-20 pt-8 text-gray-400'>ASSOCIATED WITH</p>
                </div>
                <span className='flex gap-5 px-20 pt-6'>
                    <img className='w-[67px] h-[56px]' src='/public/image/minfooterlogo.png' />
                    <img className='w-[67px] h-[56px]' src='/public/image/minifooter2.png' />
                    <img className='w-[67px] h-[56px]' src='/public/image/minifooter3.png' />
                </span>
                </div>


                {/* second column*/}
                <div className='quicks  '>
                <div className='flex gap-10 pl-[10rem] '>
                <div className=' flex flex-col items-center'>
                    <h1 className='font-bold py-8'>QUICKS LINKS</h1>
                    <p className='py-3 hover:text-DarkRed text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>About Us</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer' >Our Team</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Contact Us</p>
                    <p className='py-3  hover:text-DarkRed   text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Gallery </p>
                    <p className='py-3  hover:text-DarkRed   text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Blogs</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200  hover:translate-x-2 duration-300 cursor-pointer'>Holiday Types</p>

                </div>
                <div className=' flex flex-col items-center pl-8'>
                    <h1 className='font-bold py-8'>DESTINATIONS</h1>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Mt.Everest</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer' >Lhotse</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Makalu</p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Dorje Lkhapa </p>
                    <p className='py-3  hover:text-DarkRed  text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Mera Peak</p>
                    <p className='py-3  hover:text-DarkRed text-slate-200 hover:translate-x-2 duration-300 cursor-pointer'>Ama Dublam</p>

                </div>
                </div>
                </div>


                {/* third column*/}
                <div className= 'about '>
                <div className=''>
                <div className='flex justify-end w-full px-44'>
                <h1 className='py-8  font-bold'>CONTACT US</h1></div>
                <div className=''>
                <div className=''>
                <div className='flex px-20  justify-end   w-full items-center py-3 gap-4'>
                    <span className='text-2xl flex items-center justify-center h-8 w-8 rounded-full bg-DarkRed  text-white'><FaLocationDot /></span>
                    <p className=' text-slate-200'>Maitedevi, kathmandu nepal</p>
                </div>

                <div className='flex px-20 justify-end items-center w-full py-3 gap-3'>
                    
                    <span className='text-2xl flex items-center justify-center h-8 w-8 rounded-full bg-DarkRed text-white'><MdEmail /></span>
                    <p className=' text-slate-200'>himalayanfair@example.com</p>
                     </div>

                     <div className='flex justify-end px-20   w-full    py-2  '>
                    <div className=' w-[18rem] pl-7  flex'>
                    <span className='text-xl   flex items-center justify-center h-8 w-8 rounded-full bg-DarkRed text-white mr-4 '><FaPhone /></span>
                    <p className=' text-slate-200'>+977 94357945743,</p>
                    </div>
                     </div>



                </div>
                </div>
                </div>

                <div className=' flex justify-end px-20  py-5'>
                <div>
                 <h1 className='font-bold  '>RECOMMENDED ON</h1>
                 <img className='w-64 py-3' src='/public/image/minifooterimg4.png'/>
                        
                     </div>
                     </div>
                </div>
                

                
               
               {/* footer bootom section*/}

               <div className=' w-screen '>
     

               <hr className="border-white w-full mt-10"/>

                <div className='absolute top-[530px]  items-center    flex  justify-between w-full'>
                 
                 {/*copyright*/}
                    <div>
                        <p className='text-gray-400 px-20'>&copy;SHERPAK EXPEDITIONS, {new Date().getFullYear()}. POWERED BY: <span className='text-red-500 text-xl'>Vrit Tech</span></p>
                    </div>

                    {/* socail-media icons*/}
                    <div className='flex gap-5 px-20  text-3xl'>

                <a href='' className='text-2xl flex items-center justify-center h-10 w-10 rounded-full bg-DarkRed text-white hover:bg-blue-600'><FaFacebook /></a>
                     <a href='' className='text-2xl flex items-center justify-center h-10 w-10 rounded-full bg-DarkRed text-white  hover:bg-gradient-to-t from-yellow-400 via-red-500 to-blue-500'><RiInstagramFill /></a>
                     <a href='' className='text-2xl flex items-center justify-center h-10 w-10 rounded-full bg-DarkRed text-white hover:bg-green-800'><FaTripadvisor /></a>
                     <a href='' className='text-2xl flex items-center justify-center h-10 w-10 rounded-full bg-DarkRed text-white hover:bg-blue-700'><FaTwitter /></a>
                    </div>
                </div>

                </div>
                </div>

                

                </div>
                
        
            

    

                

                
                
    </footer>
  )
}

export default Footer
