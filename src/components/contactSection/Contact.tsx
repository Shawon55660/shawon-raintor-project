"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SecondaryButton from '../button/SeconddaryButton';
import PrimaryButton from '../button/PrimaryButton';
import Form from './Form';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="dark:bg-black dark:bg-none bg-[url('/second-bg.png')]  bg-center bg-cover  ">
      {/* divide 2 section with grid  */}
      <div className='lg:grid grid-cols-12 py-8 lg:py-12 px-[40px]'>
        {/* first section with 8 cols  */}
        <div className='col-span-8'>
          {/* reuseable SecondaryButton  */}
          <SecondaryButton text='Contact' textColor='text-black' borderColor='border-black'></SecondaryButton>
          <div className='flex items-center font-bold text-3xl lg:text-6xl  lg:py-8 py-4 lg:leading-[100px] leading-[60px] justify-between'>
            <h1 className='dark:text-white'>Interested in  together? <span className='bg-[#000000] dark:text-black dark:bg-white text-white rounded-lg px-2'>work</span>  </h1>

          </div>
          <p className='lg:w-9/12 pr-12 dark:text-white leading-7'>We start every new client interaction with an in-depth discovery call where
            we get to know each other</p>
          {/* reuseable PrimaryButton  */}
          <div className='pt-8'>
            <PrimaryButton logo={<IoCall />} text='Schedule a Call'></PrimaryButton>

          </div>
        </div>
        {/* second sectio with 4 cols  */}
        <div className='col-span-4  bg-[#000000] rounded-xl my-4 lg:m-4 p-6 dark:border dark:border-white'>
          {/* login from start  */}

         <Form></Form>
         {/* login from end  */}
          

        </div>

      </div>

    </section>
  );
};

export default Contact;