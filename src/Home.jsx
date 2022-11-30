import React from 'react';
import Work from './Work';
import {BsInstagram} from "react-icons/bs"
import{HiOutlineMail} from "react-icons/hi"
const Home = () => {
  return (
    <>
    <div className="cover">
    <div className="wapper w-full bg-beige flex justify-start items-center ">
     <div className="div flex flex-col space-y-5 ml-3">
      <a href="#"><BsInstagram className=' w-8 h-8'/></a>
      <a href="#"><HiOutlineMail className='w-9 h-9'/></a>
     </div>
    <div className=" bg-fixed h-screen w-4/5 bg-contain bg-no-repeat bg-center" style={{"backgroundImage":`url("https://i.ibb.co/z5grjVb/bg.jpg")`}}>
    </div>
    </div>
    <div className="  h-96 bg-beige flex items-center ">
       <h1 className='text-8xl italic text-center '> I'm prerna. Stylist
       & Fashion Designer </h1>
 </div>
 <Work/>
  </div>
    </>
  )
}

export default Home