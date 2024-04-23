import React from 'react'
import Form from './Form'
import Image from './Image'
import Googlemaps from './Googlemaps'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  const data ={
    name:"Contact",
  }
  return (
    <>
    <Image {...data} />
     <Form />
     <Googlemaps />
    </>
  )
}

export default Contact
