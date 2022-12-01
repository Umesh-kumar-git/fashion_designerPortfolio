import React,{useRef} from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contect = () => {
 
  
 
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k7pimir', 'template_b49ub1j', form.current, 'ePp1eXk2OF8Fpk4nR')
        .then((result) => {
          toast.success("Email send")
        }, (error) => {
    
          toast.error(" Sending fail")
         
        });

      };
 
  return (
    <>
    <ToastContainer />
     <div className="div flex justify-center bg-beige w-full h-screen  ">
      <form ref={form} onSubmit={sendEmail} className=' flex flex-col   w-4/5 sm:w-1/2 space-y-8 mt-28'  >
        <input type="text" name='user_name'  placeholder='Name...' className=' placeholder:italic focus:outline-none w-4/5 sm:w-1/2' required />
        <input type="text" name='user_email' placeholder='Email' className='placeholder:italic focus:outline-none w-4/5 sm:w-1/2'  required />
        <textarea name="message" id="" cols="30" rows="10" placeholder='Messsage' className='placeholder:italic focus:outline-none ' required></textarea>
        <input type="submit" value="Send" className='bg-red p-4 bg-gray cursor-pointer ' />
      </form>
      <div className="location"></div>
     </div>
    </>
  )
}

export default Contect