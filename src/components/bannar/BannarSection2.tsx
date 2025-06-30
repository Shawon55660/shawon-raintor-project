'use client'
import { IoCall } from 'react-icons/io5';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import PrimaryButton from '../button/PrimaryButton';


const BannarSection2 = () => {
    return (
        // grid apply in this div 
        <div data-aos="fade-up" className='grid grid-cols-12 mt-8 '>

            {/* first part grid total 1-span start  */}
            <div className=' col-span-1 pr-1 lg:col-span-3 '>
                <div className='lg:flex items-center'>
                    <p className='lg:mr-[-20px] lg:ml-[15px] rotate-[-90deg]'>
                        @williamrey
                    </p>
                    <ul className='flex-col-reverse pb-8 justify-around   text-2xl'>

                        <li className='rotate-[-90deg] py-[8px]'><FaTwitter /></li>
                        <li className='rotate-[-90deg] py-[8px]'><FaInstagram /></li>
                        <li className='rotate-[-90deg] py-[8px]'><FaFacebook /></li>
                        <li className='rotate-[-90deg] py-[8px]'><TfiLayoutLineSolid /></li>
                    </ul>
                </div>

            </div>
            {/* first part grid total 1-span end  */}
            {/* second  part grid total 11-span start  */}
            <div className='col-span-11 lg:col-span-9'>
                <p className='w-full md:w-9/12 lg:w-7/11 leading-7' >Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                <div className='pt-12'>
                    <PrimaryButton logo={<IoCall />} text='Schedule a Call'></PrimaryButton>

                </div>
            </div>
            {/* second part grid total 11-span end  */}
        </div>

    );
};

export default BannarSection2;