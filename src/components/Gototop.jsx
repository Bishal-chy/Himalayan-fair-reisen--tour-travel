{/*import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import styled from 'styled-components';


const Gototop = () => {
    const gototopbtn =()=> {
        window.scrollTo({top:0, left:0, behaviour:"smooth"})
    };
  return (
    <Wrapper>
    <div className='top-btn  flex justify-end  px-20' onClick={gototopbtn}>
    <div className='w-10 cursor-pointer bg-DarkRed rounded-full h-10 flex justify-center items-center'>
    <FaArrowUp className='text-white ' />

    </div>
      
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


`;

export default Gototop*/}



import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const Gototop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
    <div className="top-btn bg-orange-700  ">
      {showButton && (
        <div className='fixed bottom-32 right-14 z-50'>
        <div className='w-12 fixed cursor-pointer bg-DarkRed rounded-full h-12 flex justify-center items-center' onClick={goToTop}>
          <FaArrowUp className='arrow-icon text-white text-xl' />
        </div>
        </div>
      )}
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 .arrow-icon{
    animation: gototop 1.2s linear infinite alternate-reverse;
 }

 @keyframes gototop {

    0%{
        transform: translateY(-0.5rem);
    }
    100%{
        transform:translateY(0.6rem);
    }
    
 }

`;



export default Gototop;

