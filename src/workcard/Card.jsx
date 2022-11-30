import React from "react";
import { motion } from "framer-motion";

const Card = ({item}) => {
     
  return (
    <div className="wapper  h-screen items-center bg-red w-full flex justify-center ">

    <div className="div w-3/4 h-5/6 flex justify-center  ">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className=" w-1/2"
      >
        <img
          src={`${item.img}`}
          className=" h-full "
          alt="loding..."
        />
      </motion.div>
      <div className="detail w-1/2 flex justify-center flex-col ">
        <p className="text-4xl font-semibold"> {`${item.title}`}</p>
        <p>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Aperi possimus ad debitis, vitae 
          alias in non dicta voluptates
           obcaecatimagni eius iusto similique minima`}
        </p>
      </div>

    </div>
    </div>
    
  );
};

export default Card;
