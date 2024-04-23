import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { useState } from 'react';


const Singleblog = () => {

const [activeTab, setActiveTab] = useState(1);

const tabs = [
{ id: 1, title: 'Overview', content: 'The Langtang Valley Trek in Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda' },
{ id: 2, title: 'Itineary', content: 'Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda ' },
{ id: 3, title: 'Trip Info', content: 'The Langtang Valley Trek in Nepal off captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda' },
{ id: 4, title: 'Weather', content: 'Weather information goes here Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda' },
{ id: 5, title: 'Equipments', content: 'Equipments information goes here in Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda' },
{ id: 6, title: 'Useful Info', content: 'Useful info goes here Trek in Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda' },
{ id: 7, title: 'Others', content: 'Other information goes here The Nepal offers adventurers a unique and captivating journey through some of the country\'s most breathtaking landscapes. Situated just north of Kathmandu, the Langtang region is renowned for its pristine alpine scenery, diverse flora and fauna, and vibrant local culture. The trek typically begins in the bustling town of Syabrubesi,   where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, , including the elusive red panda' }
];

const handleClick = (id) => {
setActiveTab(id);
};


const boldText = (text) => {
const parts = text.split("The Langtang Valley Trek");
return (
<span>
{parts[0]} <span className="font-bold">The Langtang Valley Trek</span> {parts[1]}
</span>
);
};












return (
<section className="  h-full  ">

<div>
<div className=' mx-20 my-20 mb-10 '>
{/* form text*/}
<div className='flex items-center'>
<span className='w-8 font-bold text-3xl text-red-500'><GrSubtract /></span>
<h3 className='text-red-500'>AMONGST All</h3>
</div>

{/* form heading text*/}
<h1 className='font-bold text-4xl'>Feel Free To Contact With Us</h1>
<div className='h-[35rem]  w-full  my-10 '>
<img className='h-[35rem] w-full ' src='/public/image/langtangimg.jpeg' alt='img' />
</div>



</div>

{/* paragraph section*/}

<div className=' mx-20 my-10 '>
{/* curve box */}
<div className='flex gap-5 -bottom-4  relative'>
{tabs.map(tab => (
<div
key={tab.id}
className={`bg-customBlue ${activeTab === tab.id ? 'bg-cyan-900':''} rounded-tr-full rounded-bl-full w-full h-10 flex justify-center cursor-pointer ${activeTab === tab.id ? 'text-white' : 'text-black'}`}
onClick={() => handleClick(tab.id)}
>

<p className={`py-2 ${tab.title === 'Useful Info' || tab.title === 'Equipments' ? 'px-7' : 'px-8'}`}>{tab.title}</p>
</div>
))}
</div>

{/* box section*/}
<div className='main-info w-full border shadow-xl -z-10'>
{/* paragraph section*/}
<div className='info h-[23rem] mx-20 mt-10 py-10'>
{tabs.map(tab => (
<div
key={tab.id}
className={`leading-10 ${activeTab === tab.id ? '' : 'hidden'}`}
>

<span>{tab.title === 'Overview' ? boldText(tab.content) : tab.content}</span>
</div>
))}
</div>
</div>
</div>
















</div>





</section>
)
}
   

export default Singleblog


