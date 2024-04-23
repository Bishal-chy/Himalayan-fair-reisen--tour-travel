

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from '../assets/images/bannerimg1.png';
import Image2 from '../assets/images/bannerimg2.png';
import { GrSubtract } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";


const Bannar = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
const slides = [Image1, Image2];

const {  isAuthenticated, user } = useAuth0();






const [showCommentBox, setShowCommentBox] = useState(false);


const [comment, setComment] = useState('');
{/* for test*/}
const [comments, setComments] = useState([]);
    {/*{ comment: 'Comment 1', userId: 'user1' },
{ comment: 'Comment 2', userId: 'user2' },*/}
    // Add userId for each comment
  




{/* end*/}

{/*const [comments, setComments] = useState([]);*/}
const [userProfile, setUserProfile] = useState('');
const [userName, setUserName] = useState('');
const [rating, setRating] = useState(0);
const [showLoadMore, setShowLoadMore] = useState(false);
console.log(userProfile);
console.log(userName);

const [showBookingForm, setShowBookingForm] = useState(false); // State for booking form visibility

{/* book form with detail*/}

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [country, setCountry] = useState('');
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [preferredDestination, setPreferredDestination] = useState('');
const [accommodationType, setAccommodationType] = useState('');
const [numRooms, setNumRooms] = useState(1);
const [numBedsPerRoom, setNumBedsPerRoom] = useState(1);
const [accommodationBudget, setAccommodationBudget] = useState('');




// Handle form submission
const handleSubmitbook = (e) => {
e.preventDefault();
// Perform any necessary validation here

// Prepare data for submission
const formData = {
name: name,
email: email,
country: country,
adults: adults,
children: children,
startDate: startDate,
endDate: endDate,
preferredDestination: preferredDestination,
accommodationType: accommodationType,
numRooms: numRooms,
numBedsPerRoom: numBedsPerRoom,
accommodationBudget: accommodationBudget
};

// Send formData to backend or perform any necessary actions
console.log(formData);

// in this section Optionally reset form fields after submission
setName('');
setEmail('');
setCountry('');
setAdults(1);
setChildren(0);
setStartDate('');
setEndDate('');
setPreferredDestination('');
setAccommodationType('');
setNumRooms(1);
setNumBedsPerRoom(1);
setAccommodationBudget('');
};








{/* end of detail form*/}


{/* slide*/}
useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
}, 3000);

return () => clearInterval(interval);
}, [slides.length]);
{/* ends of slide*/}




useEffect(() => {
 
  // Load comments from local storage if available
const storedComments = JSON.parse(localStorage.getItem('comments'));
if (storedComments) {
setComments(storedComments);
}
},[]);







useEffect(() => {
// Save comments to local storage 
localStorage.setItem('comments', JSON.stringify(comments));
}, [comments]);



useEffect(() => {
    // Set user profile and name if authenticated
    if (isAuthenticated) {
        setUserName(user.name);
        setUserProfile(user.picture);
    }
}, [isAuthenticated, user]);










const handleCommentChange = (event) => {
setComment(event.target.value);
};

const handleWriteReview = () => {
setShowCommentBox(true);
};



const handleSubmit = () => {
  if (comment.trim() !== '' ) {
    const newComment = {
      comment,
      userName: user.name,
      userProfile: user.picture,
      //rating: 0,
      rating,//*:
      date: new Date().toLocaleDateString(),
      userId: user.sub,
    };
    setComments([newComment, ...comments]);
    setComment('');
    setRating(0);//*:
    setShowCommentBox(false);//*:
    
  
  }
};



{/* delete comment all
const handleDeleteAllComments = () => {
  setComments([]);
};*/}

{/*const handleDeleteAllComments = () => {
  setComments([]);
  localStorage.removeItem('comments'); // Clear comments from local storage
};*/}







{/* delete icon*/}
const handleDelete = (index) => {
    // Check if the comment belongs to the currently authenticated user
    if (comments[index].userId === user.sub) {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    }
  }


const handleLoadMore = () => {
setShowLoadMore(true); // Set showLoadMore to true when clicked
};





{/* booking trip pop up*/}
const handleBookTrip = () => {
setShowBookingForm(true);
};



// Function to handle closing booking form
const handleCloseBookingForm = () => {
setShowBookingForm(false);
};




{/* end section of booking trip*/}




const visibleComments = showLoadMore ? comments : comments.slice(0, 3); // Show all comments if showLoadMore is true

return (
<Main className=' w-full overflow-hidden'>

{/* banner slider section*/}

<section className='mt-10 bg-blue-500'>
<div className=' relative h-[18rem]'>
<div className='image-container w-full h-full'>
{slides.map((slide, index) => (
<img
key={index}
src={slide}
alt={`Slide ${index + 1}`}
className={`slide ${index === currentSlide ? 'active' : ''} `}
/>
))}
</div>
<div className='text-overlay absolute w-[60rem] h-[10rem]'>
<h1 className='text-5xl text-white '>Unveiling the Mysteries of the Wild</h1>
<p className='mt-4 text-gray-200 text-lg'>Embark on Unforgettable Journeys</p>
<button className='mt-3 bg-DarkRed text-xl text-white px-9 py-3 rounded-md hover:bg-green-700' onClick={handleBookTrip} >Book This Trip</button>
</div>
</div>
</section>


{/* end of banner section*/}





{/* booking Trip form*/}
<div className='flex '>

{showBookingForm && (

<BookingFormContainer className=' w-[100rem] h-[80rem]'>
<div className='bg-white mx-[30rem] h-[40rem] w-[43rem] '>
<BookingForm className=' h-[30rem] mt-72'>
<div className='flex justify-end'>
<button className='text-Bluish hover:text-DarkRed text-3xl' onClick={handleCloseBookingForm}><IoCloseCircle />
</button>
</div>

<div className='flex justify-center text-3xl font-bold '>
<h1 className='mb-10 text-Bluish'>Fill Up Your Detail <hr className='border border-Bluish'/> </h1>
</div>



<form onSubmit={handleSubmitbook}>
<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<div className=' border ml-12 px-2 py-2 rounded-md border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
required className=''
/>
</div>
<div className=' px-2 py-2 rounded-md border border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
</div>

<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<div className=' border rounded-md ml-12 px-2 py-2 border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="adults">Adults:</label>
<input
type="number"
id="adults"
value={adults}
onChange={(e) => setAdults(parseInt(e.target.value))}
required
min="1" className='w-[10.9rem]'
/>
</div>
<div className=' border rounded-md px-2 py-2 border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="children">Children:</label>
<input
type="number"
id="children"
value={children}
onChange={(e) => setChildren(parseInt(e.target.value))}
required
min="0" className='w-[9.7rem]'
/>
</div>
</div>


<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<div className=' px-2 py-2 ml-12 rounded-md border border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="startDate">Start Date:</label>
<input
type="date"
id="startDate"
value={startDate}
onChange={(e) => setStartDate(e.target.value)}
required className='w-[9.2rem]'
/>
</div>
<div className=' px-2 py-2 rounded-md border border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="endDate">End Date:</label>
<input
type="date"
id="endDate"
value={endDate}
onChange={(e) => setEndDate(e.target.value)}
required className='w-[9.3rem]'
/>
</div>
</div>

{/* option list*/}
<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<select className=' w-[15.7rem] rounded-md text-gray-400 ml-12 px-2 py-2 border border-gray-300' value={accommodationType} onChange={(e) => setAccommodationType(e.target.value)} required>
<option value="">Select Accommodation Type</option>
<option value="Hostel">Hostel</option>
<option value="Hotel">Hotel</option>
<option value="Vacation Rental">Vacation Rental</option>
</select>
<select className=' px-2 py-2 w-[15.2rem] text-gray-400 rounded-md border border-gray-300' value={accommodationBudget} onChange={(e) => setAccommodationBudget(e.target.value)} required>
<option value=""> Accommodation Range</option>
<option value="Budget">Budget</option>
<option value="Mid-Range">Mid-Range</option>
<option value="Luxury">Luxury</option>
</select>
</div>

<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<select className=' px-2 py-2 ml-12 w-[15.6rem] text-gray-400 rounded-md border border-gray-300' value={country} onChange={(e) => setCountry(e.target.value)} required>
<option value="">Select Country</option>
<option value="Nepal">Nepal</option>
<option value="India">India</option>
<option value="China">China</option>

</select>

<select className=' w-[15.2rem] rounded-md text-gray-400 px-2 py-2 border border-gray-300' value={preferredDestination} onChange={(e) => setPreferredDestination(e.target.value)} required>
<option value="">Select Preferred Destination</option>
<option value="Kathmandu">Kathmandu</option>
<option value="Pokhara">Pokhara</option>
<option value="Chitwan">Chitwan</option>
<option value="Lumbini">Lumbini</option>
<option value="Delhi">Delhi(India)</option>
<option value="Mumbai">Mumbai(India)</option>
<option value="Chennai">Chennai(India)</option>
</select>
</div>



{/* end option list*/}






<div className='flex gap-[5rem] mb-4 h-10 items-center'>
<div className=' px-2 py-2 ml-12 border rounded-md border-gray-300 '>
<label className='pr-2 text-gray-400' htmlFor="numRooms">Number of Rooms:</label>
<input
type="number"
id="numRooms"
value={numRooms}
onChange={(e) => setNumRooms(parseInt(e.target.value))}
required
min="1" className='w-[5.6rem]'
/>
</div>
<div className=' px-2 py-2 border rounded-md border-gray-300'>
<label className='pr-2 text-gray-400' htmlFor="numBedsPerRoom">Number of Beds:</label>
<input
type="number"
id="numBedsPerRoom"
value={numBedsPerRoom}
onChange={(e) => setNumBedsPerRoom(parseInt(e.target.value))}
required
min="1" className='w-[6rem]'
/>
</div>
</div>

<div className='flex gap-[3rem] h-10 items-center'>
<button className= 'w-28 ml-[17.5rem] mt-4 text-Bluish border border-Bluish hover:bg-Bluish hover:text-white rounded-md py-2' type="submit">Submit</button>

</div>

<div className=' h-32 w-[43rem]'>
<div className=' flex justify-center '>
<h1 className='my-4 text-2xl font-bold text-Bluish'>Have A Wonderfull Trip</h1>
</div>
<div className='flex justify-center'>
<p className='text-gray-400'>Thanks For Visiting Us<hr className='border border-gray-400' /></p>
</div>

</div>



</form>










</BookingForm>
</div>
</BookingFormContainer>
)}

{/* end of section booking trip*/}

<div className=' w-full'>
<div className='  mx-20  my-20 mb-10 '>
<div className='flex  items-center'>
<span className='w-8 font-bold text-3xl text-red-500'><GrSubtract /></span>
<h3 className='text-red-500'>AMONGST All</h3>
</div>
<h1 className='font-bold text-4xl'>Feel Free To Contact With Us</h1>
</div>

<div className=" w-full mt-8 ">
<div className="flex  mx-20 justify-end">
<button className=" border border-Bluish hover:border-white hover:bg-Bluish focus:bg-Bluish focus:text-white text-Bluish hover:text-white px-6 py-2 rounded mr-2" onClick={handleSubmit}>
submit
</button>
<button className="hover:bg-Bluish border border-Bluish focus:bg-Bluish focus:text-white text-Bluish hover:text-white px-6 py-2 rounded" onClick={handleWriteReview}>
Write a Review
</button>
</div>

{showCommentBox && (
<div className="mt-4    mx-20 ">
<textarea
className=" w-full h-28  border rounded p-2 min-h-44 mb-2"
placeholder="Write your review..."
value={comment}
onChange={handleCommentChange}
></textarea>
  <div className="flex items-center mb-2">
<p className="mr-2">Rating:</p>
{[1, 2, 3, 4, 5].map((index) => (
<span key={index} className={`text-2xl cursor-pointer ${index <= rating ? 'text-DarkRed' : 'text-gray-300'}`} onClick={() => setRating(index)}>&#9733;</span>
))}
</div>
<button className=" text-white px-4 py-2 rounded mb-3 mx-2" onClick={handleSubmit}>
Submit
</button>
</div>
)}

<div className="mt-4">
{comments.length> 0 && visibleComments.map((commentObj, index) => (

<div key={index} className="border rounded mx-20   mb-4">
<div className="flex w-full h-40  border-black mb-2">
<div className='  flex  justify-start gap-2 '>
<div className=" w-[6rem]  h-28 flex justify-center items-center">
<img src={commentObj.userProfile} alt="User Profile" className="w-24 h-24 px-2  py-2 rounded-full " />
</div>
<div className=''>
<p className='  h-28 w-[71.5rem] pt-6'>{commentObj.comment}</p></div>
</div>
</div>
<div className=" flex ml-[7rem] justify-between mb-3 ">
<div className='w-full'>
<p className=" text-base text-gray-400">{commentObj.userName}</p>
{[...Array(commentObj.rating)].map((_, i) => (
<span key={i} className="text-DarkRed hover:text-DarkRed text-xl ">&#9733;</span>
))}
</div>
<div className='flex '>
<p className="text-sm pt-1 text-gray-400">{commentObj.date}</p>
{ isAuthenticated && comments[index].userId === user.sub && (
<button className="text-red-500 ml-2 h-5 pt-1 " onClick={() => handleDelete(index)}><MdDelete className='text-lg hover:text-DarkRed text-Bluish' /></button>
)}
 {/*necessary if need 
<button onClick={handleDeleteAllComments}>Delete All Comments</button>*/}


        






</div>
</div>
</div>
))}
</div>
</div>

{/*Tourist review section*/ }
<div className='  mx-20 h-52 border border-gray-300 rounded-md'>
<div className='w-full h-28 flex '>
<img className='rounded-full my-4 mx-3' src='/public/image/touristreviewimg.png' alt='img'/>
{/* comment section*/}
<div className=' w-full  '>
<div className=' w-full my-4 h-28 '>
<p className='mx-2 py-2 '>“OMG! I cannot believe that I have so much fun on my trip. It was super good and fantastic.”</p>
</div>
<div className=' flex  justify-between'>
<div className=' text-gray-400'>
<p className='mx-2'>Cameron Williamson</p>
<div className='flex gap-2 text-DarkRed my-2  '>
<FaRegStar />
<FaRegStar />
<FaRegStar />
<FaRegStar />
<FaRegStar />
</div>
</div>
<p className='text-gray-400 px-1'>16 Jan, 2024</p>

</div>
</div>
</div>


</div>




{!showLoadMore && (
<div className="flex justify-end   mt-4">
<button className="text-Bluish hover:text-DarkRed px-4  mx-20 py-2 rounded" onClick={handleLoadMore}>
Load More
</button>
</div>
)}
</div>
</div>




</Main>
);
};

const Main = styled.section`
.container {
position: relative;
max-width: 1550px;
}

.image-container {
position: relative;
overflow: hidden;
}

.slide {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
transition: opacity 1s linear;
}

.slide.active {
opacity: 1;
}

.text-overlay {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
}

//booking trip section










`;

const BookingFormContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
z-index: 9999;
background-color: rgba(0, 0, 0, 0.8); /* Dark background */




`;






const BookingForm = styled.div`
/* Your booking form CSS styling */

`;


  

export default Bannar
