import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {FaInstalod} from "react-icons/fa";
import { useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import { useRef } from "react";

const navlist = [

      {
        name:"Home",
        path:"/"

      },
      {
        name:"Work",
        path:"/Work"

      },
      {
        name:"About me",
        path:"/about"

      },
      {
        name:"Contect me",
        path:"/contect"

      },
]
  
  // console.log(navlist);


const Navbar = () => {

  const [clicked, setclicked] = useState(false)
  // const hide = useRef()
  const  handler = ()=>{
    setclicked(!clicked)
  }

  return (
    <>
      <nav className="  sm:flex sm:h-24 h-20 w-full sm:justify-evenly sm:items-center bg-green  ">
        <motion.div 
        initial={{x:"-100%"}}
        whileInView={{x:"0%"}}
        className="logo cursor-pointer w-1/2   h-full ">
          <FaInstalod className=" w-8 h-8  " />PreRnA
        </motion.div>


       <div onClick={handler} className=" absolute top-5 text-3xl  right-4 sm:hidden">
      <i className= {clicked ? "fas fa-times" : "fa fa-bars"} > </i>
         </div> 

        <ul className= { clicked ? "sm:text-lg  z-50 absolute sm:static bg-green    w-full  min-h-min" : " absolute sm:static -top-full" }   >

         { navlist.map((item,i)=>{
          return(  
            <Link to={`${item.path}`} className=" block sm:inline-block p-3  text-center hover:bg-gray" key={i}>  {`${item.name}`}</Link>
          )
         })}
          
         
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
