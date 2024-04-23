import React from 'react'
import Image from './Image'
import Blog from './Blog'
import { useEffect } from 'react'

const About = () => {
  const data ={
    name:"About",
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
    <Image {...data} />
    <Blog />
    
    </>
  )
}

export default About
