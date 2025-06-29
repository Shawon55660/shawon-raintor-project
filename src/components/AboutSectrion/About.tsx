"use client";
import React ,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SecondaryButton from '../button/SeconddaryButton';
import Aboutcard from './AboutCard';



const About = () => {
     useEffect(() => {
            AOS.init({
              duration: 800,
              once: false, 
            });
          }, []);
    return (
    <div data-aos="fade-up" className="dark:bg-black dark:text-white bg-[url('/third-bg.png')] bg-cover bg-center  ">
        <div className='flex justify-end items-center pt-[100px] pb-[30px] w-full   md:w-10/12  lg:w-8/12 mx-auto'>

     {/* part 1  */}
            <SecondaryButton text='About'textColor='text-black' borderColor='border-black'></SecondaryButton>
           
        </div>
        <div className='flex  justify-end items-center font-bold text-3xl lg:text-6xl  md:w-10/12  lg:w-8/12 leading-[70px]  lg:leading-[150px] mx-auto'>
                <h1 className='text-right'>I’ve been  <span className='bg-[#000000] dark:bg-white text-white dark:text-black  rounded-lg px-2'>Developing</span> Websites since  <span className='bg-[#000000] dark:bg-white text-white dark:text-black  rounded-lg px-2'>2013</span></h1>
            </div>
            <p className='lg:w-7/12 md:w-10/12 mx-auto text-center py-4'>
            We start every new client interaction with an in-depth discovery call where
we get to know each other and recommend the best course of
action.
            </p>
             {/* part 2 */}
            <div className='lg:grid grid-cols-12  py-4 lg:h-[250px]'>

                <p className='lg:col-span-4 pb-12 lg:pb-0 flex items-center font-bold justify-center'>PREVIOUSLY <br /> WORKED ON</p>
                <div className='flex flex-wrap gap-4 justify-around lg:block lg:col-span-8  relative'>
                    <div className=' dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute lg:bottom-0 '><Aboutcard  text='CSS WINNER' ></Aboutcard></div>
                    <div className='dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute lg:bottom-[67px] lg:rotate-[16deg] lg:left-28'><Aboutcard  text='"Awwwards' ></Aboutcard></div>
                    <div className='dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute lg:bottom-2 lg:left-[300px] lg:rotate-[-8deg] '><Aboutcard  text='/thoughtworks' ></Aboutcard></div>
                     <div className='dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute lg:left-[470px]  lg:bottom-[92px]'><Aboutcard  text='facebook' ></Aboutcard></div>
                    <div className='dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute lg:left-[531px] lg:bottom-0'><Aboutcard  text='AUTODESK' ></Aboutcard></div>
                   
                    <div className='dark:bg-white dark:text-black dark:rounded-full dark:border-white hover:text-white hover:bg-black transition-all hover:rounded-full lg:absolute  lg:bottom-[41px] lg:rotate-[28deg] lg:right-22'><Aboutcard  text='CSSDesignAwards' ></Aboutcard></div>
                
                  
                </div>
            </div>
     
    </div>
    );
};

export default About;