import React, { useEffect } from 'react'
import Image from './Image'
import Singleblog from './Singleblog'
import Recomended from './Recomended'
import Bannar from './Bannar'
import Togglefaq from './Togglefaq'

const SinglePage = () => {
useEffect(()=>{
  window.scrollTo(0,0);
},[]);
const data ={
  name:"Langtang valley",
}

  return (
    <>
    <Image {...data}/>
    <Singleblog />
    <Recomended />
    <Bannar />
    <Togglefaq />
    
    
    

    
    </>
  )
}

export default SinglePage
