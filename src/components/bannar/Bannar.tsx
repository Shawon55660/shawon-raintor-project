"use client";
import React ,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannarSection1 from './BannarSection1';
import BannarSection2 from './BannarSection2';

const Bannar = () => {
  //use for Animation 
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false, 
        });
      }, []);
    return (
        // bannar section start here 
        <section  className=" pt-12 dark:bg-black dark:text-white  md:pt-0 mx-auto bg-[url('/bannar.png')] bg-center bg-cover">
            {/* bannar 1st section start here  */}
            <BannarSection1></BannarSection1>
            {/* bannar 1st section end here  */}
            {/* bannar 2nd section start here  */}
            <BannarSection2></BannarSection2>
            {/* bannar 2nd section end here  */}


        </section>
        // bannar section end here 
    );
};

export default Bannar;
