import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {FaInstalod} from "react-icons/fa"


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
  
  console.log(navlist);


const Navbar = () => {

 

  return (
    <>
      <nav className="  flex h-28  w-full justify-evenly items-center  bg-beige  ">
        <motion.div 
        initial={{x:"-100%"}}
        whileInView={{x:"0%"}}
        className="logo cursor-pointer w-1/2 sm:w-52 ">
          <FaInstalod className=" w-8 h-8" />PreRnA
        </motion.div>


          {/* <GiHamburgerMenu onClick={open}  className="w-8 h-8 sm:hidden "/> */}

        <ul  className=" bg-beige  cursor-pointer  sm:text-lg  space-x-8  ">
          {/* <GrClose onClick={close} className ="w-8 h-8"/> */}

         { navlist.map((item,i)=>{
          return(  
            <Link to={`${item.path}`}  className="">{`${item.name}`}</Link>
          )
         })}
          
         
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
