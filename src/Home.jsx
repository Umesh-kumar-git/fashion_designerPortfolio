import React from 'react';
import Work from './Work';
import {BsInstagram} from "react-icons/bs"
import{HiOutlineMail} from "react-icons/hi"
const Home = () => {
  return (
    <>
    <div className="cover   ">
    <div className="wapper w-full  h-64 sm:h-screen  sm:bg-beige flex justify-center items-center ">
     <div className=" sm:flex flex-col space-y-5 mr-8 hidden ">
      <a href="https://www.instagram.com/vicky_codehub/"><BsInstagram className=' md:w-8 md:h-8'/></a>
      <a href="#"><HiOutlineMail className='md:w-9 md:h-9'/></a>
     </div>
    <div className=" sm:bg-fixed w-full sm:w-4/5 h-full   bg-cover  bg-no-repeat bg-center" style={{"backgroundImage":`url("https://i.ibb.co/z5grjVb/bg.jpg")`}}>
    </div>
    </div>
    <div className=" h-30 sm:h-80 bg-beige flex justify-center items-center ">
       <h1 className=' text-3xl  sm:text-6xl italic text-center '> I'm prerna. Stylist
       & Fashion Designer </h1>
 </div>
 <Work/>
  </div>
    </>
  )
}

export default Home