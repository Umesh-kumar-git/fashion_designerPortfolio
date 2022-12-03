import React from "react";
import Card from "./workcard/Card";

const Ary =[
  {
  img:"https://i.ibb.co/51tKxvG/pexels-th-c-l-h-u-1390600.jpg",
  title:"Red Dreams",
  descrip:`Lorem ipsum dolor sit amet consectetur adipisicing elit
  . Aperi possimus ad debitis, vitae 
  alias in non dicta voluptates
   obcaecatimagni eius iusto similique minima`,

},
{
  img:"https://i.ibb.co/3zCkgg7/pexels-abir-hasan-1857375.jpg",
  title:" White Dreams",
  descrip:` Lorem ipsum dolor sit amet consectetur adipisicing elit
  . Aperi possimus ad debitis, vitae 
  alias in non dicta voluptates
   obcaecatimagni eius iusto similique minima `,

},
{
  img:"https://i.ibb.co/N3Gr3Pp/pexels-andrea-piacquadio-3769160.jpg",
  title:" green Dreams",
  descrip:`Lorem ipsum dolor sit amet consectetur adipisicing elit
  . Aperi possimus ad debitis, vitae 
  alias in non dicta voluptates
   obcaecatimagni eius iusto similique minima`,

},
]

const Work = () => {

  
  return (
    <>
      <div className="collection h-min-full bg-gray ">
        <div className="h-20 sm:h-40  bg-skin flex items-center justify-center  ">
          <p className="text-4xl text-center  ">P/V Collection</p>
        </div>

        {
          Ary.map((items ,i)=>{
            return(  
            <Card item ={items} key={i} />

             )

          })
        }
        
      </div>
    </>
  );
};

export default Work;
