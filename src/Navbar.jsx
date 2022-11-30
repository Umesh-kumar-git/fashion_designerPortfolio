import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {FaInstalod} from "react-icons/fa"
const Navbar = () => {
  return (
    <>
      <nav className=" flex h-28 items-center  justify-evenly   w-full bg-beige  ">
        <motion.div 
        initial={{x:"-100%"}}
        whileInView={{x:"0%"}}
        className="logo cursor-pointer w-60 ">
          <FaInstalod className=" w-8 h-8" />PreRnA
        </motion.div>
        <ul className="flex justify-center space-x-10 cursor-pointer text-lg  font-light ">
          
            <Link to={"/"}  className=""> HOME</Link>
            <Link to={"/work"} className=""> WORK</Link>
            <Link to={"/about"}className="" > ABOUT ME</Link>
            <Link to={"/contect"}className="" >CONTECT ME</Link>
          
         
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
