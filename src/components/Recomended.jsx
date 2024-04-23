
import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoCloudOutline } from "react-icons/io5";
import { PiMountainsFill } from "react-icons/pi";
import { GiRiceCooker } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { useState } from 'react';





const Recomended = () => {

{/* form section*/}

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = (event) => {
event.preventDefault();
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Email:", email);
console.log("Phone Number:", phoneNumber);
console.log("Message:", message);



setFirstName('');
setLastName('');
setEmail('');
setPhoneNumber('');
setMessage('');
}









return (
<section className=' w-full h-full  '>

<div className='  mx-20 h-[40rem] '>
{/* Glance styling box section */}
<div className=' w-[30rem]  border shadow-xl h-[40rem] pt-5 '>
<div className='bg-Bluish w-72 items-center h-16 flex justify-between '>
<h1 className='text-white font-bold ml-6 text-xl'>At a Glance</h1>
<div className='bg-white w-10 h-16 '
style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
>
</div>
</div>


{/* detail information with icons*/}
<div className=' w-[25rem] mx-7'>
{/* time duration icons */}
<div className='flex items-center mt-3 gap-4'>
<MdOutlineWatchLater className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Duration</p>
<p className='text-lg'>4 Hours</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>

{/* Trip Grade/*/}
<div className='flex items-center mt-3 gap-4'>
<IoStatsChart className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Trip Grade</p>
<p className='text-lg'>Easy</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* best season */}
<div className='flex items-center mt-3 gap-4'>
<IoCloudOutline className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Best Seasons</p>
<p className='text-lg'>Mar-Jul, Sep-Dec</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* max altitude*/}
<div className='flex items-center mt-3 gap-4'>
<PiMountainsFill className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Max Altitude</p>
<p className='text-lg'>5460m Khyangjang valley</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* meals */}
<div className='flex items-center mt-3 gap-4'>
<GiRiceCooker className='text-3xl text-Bluish'/>
<div>
<p className='text-gray-400'>Meals</p>
<p className='text-lg'>B, L, D during Trek</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* Nature of trip*/}
<div className='flex items-center mt-3 gap-4'>
<FaPersonHiking className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Nature Of Trip</p>
<p className='text-lg'>Mountain Skiing Tour</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* accomodation*/}
<div className='flex items-center mt-3 gap-4'>
<FaBed className='text-3xl text-Bluish' />
<div>
<p className='text-gray-400'>Accomodation</p>
<p className='text-lg'>Hotel, Resort</p>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


</div>
</div>
</div>

{/* recommendend Tours*/ }

<div className='flex gap-6'>
{/* flex for 1st column*/}
<div className=' w-[30rem]  ml-20 h-[45rem] mt-10 '>
{/* Glance styling box section */}
<div className=' w-[30rem] border shadow-xl h-[45rem] pt-5 '>
<div className='bg-Bluish w-72 justify-between items-center h-16 flex '>
<h1 className='text-white ml-6 font-bold text-xl '>Recommended Tours</h1>
<div className='bg-white w-10 h-16 '
style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
>
</div>
</div>


{/* detail information with icons*/}
<div className=' w-[25rem] pt-2 mx-7'>
{/* time duration icons */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2 '>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>

{/* Trip Grade/*/}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* best season */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* max altitude*/}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* meals */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>

</div>
</div>
</div>

{/* Map section 2nd column*/}

<div className='pl-1  w-full mr-20'>
<div className='w-full h-[45rem] mt-10 '>
<div className=' w-full border shadow-xl h-[45rem] pt-5 '>
<div className='bg-Bluish w-72 gap-4 items-center h-16 flex justify-between '>
<h1 className='text-white ml-6 font-bold text-xl '>Maps</h1>
<div className='bg-white w-10 h-16 '
style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
>
</div>
</div>

<div className='mx-5 my-5 h-[35rem] '>
<img className=' h-full w-full' src='/public/image/mapimg.png' alt='img'/>
</div>
</div>

</div>


</div>
</div>


{/* mini blog section and form section*/}

<div className='flex gap-6'>
{/* flex for 1st column*/}
<div className=' w-[30rem] ml-20 h-[45rem] mt-10 '>
{/* Glance styling box section */}
<div className=' w-[30rem] border shadow-xl h-[45rem] pt-5 '>
<div className='bg-Bluish w-72 justify-between items-center h-16 flex '>
<h1 className='text-white ml-6 font-bold text-xl '>Recommended Tours</h1>
<div className='bg-white w-10 h-16 '
style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
>
</div>
</div>


{/* detail information with icons*/}
<div className=' w-[25rem] pt-2 mx-7'>
{/* time duration icons */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2 '>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>

{/* Trip Grade/*/}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* best season */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* max altitude*/}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>


{/* meals */}
<div className='flex items-center mt-3 gap-4 cursor-pointer hover:bg-Bluish hover:text-white'>
<img className='w-24 h-20 ' src='/public/image/recommendimg.jpeg' alt='img'/>
<div>
<p className=' w-60 text-lg'>Everest Base camp kala pattar/ Lodge -trek</p>
{/* time icon with text 10 days */}
<div className='flex items-center gap-2 mt-2 mb-4 '>
<div className='w-20 h-4 flex items-center border-r-2 gap-2'>
<MdOutlineWatchLater className='text-Bluish' />
<p className='text-sm text-gray-400'>10 Days</p>
</div>
{/* Trip advisor logo section*/ }
<div className='w-32 h-4 flex items-center gap-2'>
<div className='w-6 h-4 overflow-x-hidden'>
<div className='w-20 '>
<img className='h-4 ' src='/public/image/minifooterimg4.png'/>
</div>
</div>
<p className='text-gray-400'>Guarantee</p>
</div>
</div>
{/* end of time icon and trip advisor section*/}

</div>
</div>
<hr className="border-t border-gray-400 flex-grow mt-2"></hr>

</div>
</div>
</div>

{/* form box*/}

<div className='pl-1  w-full mr-20'>
<div className='w-full h-[45rem] mt-10 '>
<div className=' w-full border shadow-xl h-[45rem] pt-5 '>
<div className='bg-Bluish w-72 gap-4 items-center h-16 flex justify-between '>
<h1 className='text-white ml-6 font-bold text-xl '>Make an inquiry</h1>
<div className='bg-white w-10 h-16 '
style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
>
</div>
</div>

{/* form section*/}


{/* form box*/}
<form onSubmit={handleSubmit} className='w-full  mt-5 h-[35rem]  '>
<div className='flex z-50 max-h-[30rem] gap-10'>
{/* first column*/ }
<div className=' w-full '>
{/* form input*/}
<div className='px-8'>
<div className='grid  grid-cols-2 gap-3'>

{/* first name*/}
<div className=''>
<div><label htmlFor="firstName">First Name:</label></div>

<div> <input
type="text"
id="firstName"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required className='border border-gray-400 w-full px-2 py-1 rounded'
/></div>
</div>

{/* last name*/}
<div>
<div><label htmlFor="lastName">Last Name:</label></div>
<div><input
type="text"
id="lastName"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required className='border border-gray-400 w-full px-2 py-1 rounded'
/></div>

</div>
</div>

{/* form input*/}
<div className='grid grid-cols-2 gap-3 py-2 '>
{/* email*/}
<div >
<div><label htmlFor="email">Email:</label></div>
<div><input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required className='border border-gray-400 w-full px-2 py-1 rounded'
/></div>
</div>
{/* phone number*/}
<div>
<div><label htmlFor="phoneNumber">Phone Number:</label></div>
<div><input
type="tel"
id="phoneNumber"
value={phoneNumber}
onChange={(e) => setPhoneNumber(e.target.value)}
required className='border border-gray-400 w-full px-2 py-1 rounded'
/></div>
</div>

</div>

{/* text area*/}
<div className='py-4 '>
<div><label htmlFor="message">Message:</label></div>
<div><textarea
id="message"
value={message}
onChange={(e) => setMessage(e.target.value)}
required className='border border-gray-400 min-h-[17rem] max-h-[19rem] w-full px-2 py-1 rounded '
/></div>
</div>

{/* submit button*/}
<div className='btn py-2'>
<button className='w-40 h-10 bg-DarkRed rounded-md text-lg text-white hover:bg-green-700 ' type="submit">Send Message</button>
</div>
</div>




</div>
</div>
</form>










{/* end of form section*/}

</div>


</div>


</div>
</div>
















</section>
)
}


export default Recomended

