"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SecondaryButton from '../button/SeconddaryButton';
import WorkCard from './WorkCard';



const WorkProcess = () => {

    //use for Animation 
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <section data-aos="fade-up" className='bg-[#141414] py-[40px] rounded-md px-[40px]'>

            {/* header section start here  */}
            <div className='lg:flex gap-32 pt-12 justify-start items-center'>
                <SecondaryButton text='Work Process' borderColor='border-white' textColor='text-white'></SecondaryButton>
                <h2 className='text-3xl lg:text-6xl pt-8 lg:pt-0  lg:text-center  text-white'>My Work Process</h2>
            </div>
            {/* header section end here  */}

            {/* card section start here  */}
            <div className='lg:grid grid-cols-2 gap-6 ' >
                {/* work card 1  */}
                <WorkCard text='We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.' button='Discovery'></WorkCard>
                {/* work card 2  */}
                <WorkCard text="Every end-to-end project of ours
begins with a tEspoke pre-build
strateu. From brand ID consultation
to in-depth ccxle reviews we're here
to set the stage for success." button='Strategy'></WorkCard>
                {/* work card 3  */}
                <WorkCard text="After we have a comprehensive
understanding of your brand, we'll be
ready to move onto design. Each page
or will be designed, reviewed,
and given your stamp of approval." button='Design'></WorkCard>
                {/* work card 4  */}
                <WorkCard text="Whether we've just finished designing your new site or you'rehanding off finished designs for us todevelop in Webflow, we're here toapply our trusted development
process to your poject.
" button='Build'></WorkCard>
            </div>
            {/* card section end here  */}

        </section>
    );
};

export default WorkProcess;