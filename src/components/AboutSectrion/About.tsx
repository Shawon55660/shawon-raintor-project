import React from 'react';
import SecondaryButton from '../button/SeconddaryButton';
import Aboutcard from './AboutCard';



const About = () => {
    return (
    <div className="bg-[url('/third-bg.jpg')] bg-cover bg-center   bg-transparent  ">
        <div className='flex justify-end items-center pt-[100px] pb-[30px] w-full   md:w-10/12  lg:w-8/12 mx-auto'>

     {/* part 1  */}
            <SecondaryButton text='About'textColor='text-black' borderColor='border-black'></SecondaryButton>
           
        </div>
        <div className='flex  justify-end items-center font-bold text-3xl lg:text-6xl  md:w-10/12  lg:w-8/12 leading-[70px]  lg:leading-[150px] mx-auto'>
                <h1 className='text-right'>I’ve been  <span className='bg-[#000000] text-white rounded-lg px-2'>Developing</span> Websites since  <span className='bg-[#000000] text-white rounded-lg px-2'>2013</span></h1>
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
                    <div className='lg:absolute lg:bottom-0 '><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='CSS WINNER' textColor='text-black'></Aboutcard></div>
                    <div className='lg:absolute lg:bottom-[67px] lg:rotate-[16deg] lg:left-28'><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='"Awwwards' textColor='text-black'></Aboutcard></div>
                    <div className='lg:absolute lg:bottom-2 lg:left-[300px] lg:rotate-[-8deg] '><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='/thoughtworks' textColor='text-black'></Aboutcard></div>
                     <div className='lg:absolute lg:left-[470px]  lg:bottom-[92px]'><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Aboutcard></div>
                    <div className='lg:absolute lg:left-[531px] lg:bottom-0'><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='AUTODESK' textColor='text-black'></Aboutcard></div>
                   
                    <div className='lg:absolute  lg:bottom-[41px] lg:rotate-[28deg] lg:right-22'><Aboutcard bgColor='bg-transparent' borderColor='border-black' text='CSSDesignAwards' textColor='text-black'></Aboutcard></div>
                
                  
                </div>
            </div>
     
    </div>
    );
};

export default About;