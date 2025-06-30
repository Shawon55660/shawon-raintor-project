import React from 'react';
import { BsSendFill } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Form = () => {
    return (
        <div>
             <form className=''>
            {/* name input section  */}
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-medium ">
                Enter your name
              </label>
              <input
                type="text"

                className="w-full px-4 mb-4  bg-transparent border-b border-gray-200 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4FF56]"

              />
            </div>
            {/* email inpput section  */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-medium ">
                Your email address
              </label>
              <input
                type="email"

                className="w-full px-4 mb-4  bg-transparent border-b border-gray-200 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4FF56]"

              />
            </div>
            {/* project details input section  */}
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-medium ">
                Describe your project
              </label>
              <input
                type="text"

                className="w-full px-4 mb-4  bg-transparent border-b border-gray-200 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4FF56]"

              />
            </div>
          </form>
          {/* other contact section start  */}

          <div className='flex justify-start items-center gap-4 py-4'>
            <button className='border-[1px] flex items-center gap-3 text-white bg-transparent py-1 text-sm pr-3 rounded-full '><span className='rounded-full flex items-center py-2 px-2 border-[1px]'><BsSendFill /></span> <span>Send</span></button>
            <span className='text-gray-100 text-sm text'>or</span>
            <button className='border-[1px] flex items-center gap-3 text-white bg-transparent py-1 text-sm pr-3 rounded-full '><span className='rounded-full flex items-center py-2 px-2 border-[1px]'><IoMail /></span> <span>Contact me</span></button>
          </div>

          {/* social login  */}
          <div className='flex items-center gap-4 py-8 justify-start text-white'>
            <p className='text-sm text-gray-400 '>
              @williamrey
            </p>
            <ul className='flex  justify-around gap-8 text-xl'>
              <li className=' text-gray-400 '><TfiLayoutLineSolid /></li>
              <li className=' '><FaFacebook /></li>
              <li className=' '><FaInstagram /></li>
              <li className=' '><FaTwitter /></li>



            </ul>
          </div>
        </div>
    );
};

export default Form;