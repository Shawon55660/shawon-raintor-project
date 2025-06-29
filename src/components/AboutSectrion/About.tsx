import React from 'react';
import SecondaryButton from '../button/SeconddaryButton';



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
            {/* <div className='grid grid-cols-12 bg-red-400 py-4 h-[20vh]'>

                <p className='col-span-3 '>PREVIOUSLY WORKED ON</p>
                <div className='col-span-9 relative'>
                    <div className='absolute'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                    <div className='absolute top-[-4]] left-6'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                    <div className='absolute'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                    <div className='absolute'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                    <div className='absolute'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                    <div className='absolute'><Card bgColor='bg-transparent' borderColor='border-black' text='facebook' textColor='text-black'></Card></div>
                
                  
                </div>
            </div> */}
     
    </div>
    );
};

export default About;