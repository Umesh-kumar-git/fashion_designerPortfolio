import React from "react";
import { motion } from "framer-motion";

const Card = ({item}) => {
     
  return (
    <div id="wapper" className=" sm:h-screen bg-gray w-full flex  items-center justify-center mt-10 ">

    <div className="div w-3/4 h-full flex justify-center flex-col sm:flex-row  items-center">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className="w-full h-1/2 sm:w-1/2 sm:h-5/6"
      >
        <img
          src={`${item.img}`}
          className="w-4/5 h-4/5 ml-7 sm:ml-0 sm:h-full sm:w-full"
          alt="loding..."
        />
      </motion.div>
      <div className="detail w-full sm:w-1/2 text-center max-h-min  flex justify-center flex-col ">
        <p className=" text-xl font-semibold"> {`${item.title}`}</p>
        <p>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit
           obcaecatimagni eius iusto similique minima`}
        </p>
      </div>

    </div>
    </div>
    
  );
};

export default Card;
