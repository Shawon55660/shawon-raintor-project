import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-[#141414] py-[40px] text-white rounded-md px-[40px]'>
        <div className='lg:grid grid-cols-12 py-8'>
        <div className='col-span-6 '> <h2 className='uppercase text-xl font-extrabold text-[#C5FF41]'>devlop.me</h2></div>
        <div className='col-span-6'>
            <h2 className='lg:text-5xl text-4xl pt-8 lg:pt-0 lg:pb-4'>As You Can</h2>
            <div className='flex justify-between flex-wrap gap-12 w-11/12 pt-12'>
                <ul className='text-xs leading-8'>
                    <li className='text-gray-400 pb-6'>Say hello</li>
                    <li className=''>HELLO@DEVLOP.ME.COM</li>
                    <li>MAHBUBUL@ME.COM</li>
                </ul>
                <ul className='text-xs leading-7'>
                    <li className='text-gray-400 pb-6'>Menu</li>
                    <li className=''>HOME</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                </ul>
                <ul className='text-xs leading-7'>
                    <li className='text-gray-400 pb-6'>Social</li>
                    <li className=''>TWITTER</li>
                    <li className=''>INSTAGRAM</li>
                    <li>FACEBOOK</li>
                    <li>BEHANCE</li>
                    <li>DRIBBBLE</li>
                </ul>
                <ul className='text-xs leading-7'>
                    <li className='text-gray-400 pb-6'>Call</li>
                    <li className=''>+784549 4981 00</li>
                    <li>+8845 0100 211</li>
                </ul>

            </div>
        </div>
        </div>
        <div className='flex justify-between items-center text-sm text-gray-400 mt-16 pb-4'>
            <p className='text-white'>BESNIK</p>
            <p>© devlop.me 2022</p>
            <p>PRIVACY - TERMS</p>
        </div>
            
            
        </div>
    );
};

export default Footer;