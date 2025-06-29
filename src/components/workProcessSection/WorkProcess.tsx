import React from 'react';

import SecondaryButton from '../button/SeconddaryButton';
import WorkCard from './WorkCard';



const WorkProcess = () => {
    return (
        <div className=' bg-[#141414] py-[40px] rounded-md px-[40px] '>

            <div className='lg:flex gap-32 pt-12 justify-start items-center'>
                <SecondaryButton text='Work Process' borderColor='border-white' textColor='text-white'></SecondaryButton>
                <h2 className='text-3xl lg:text-6xl pt-8 lg:pt-0  lg:text-center  text-white'>My Work Process</h2>
            </div>
            <div className='lg:grid grid-cols-2 gap-6 ' >
                <WorkCard text='We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.' button='Discovery'></WorkCard>
                <WorkCard text="Every end-to-end project of ours
begins with a tEspoke pre-build
strateu. From brand ID consultation
to in-depth ccxle reviews we're here
to set the stage for success." button='Strategy'></WorkCard>
                <WorkCard text="After we have a comprehensive
understanding of your brand, we'll be
ready to move onto design. Each page
or will be designed, reviewed,
and given your stamp of approval." button='Design'></WorkCard>
                <WorkCard text="Whether we've just finished
designing your new site or you're
handing off finished designs for us to
develop in Webflow, we're here to
apply our trusted development
process to your project." button='Build'></WorkCard>
            </div>

        </div>
    );
};

export default WorkProcess;