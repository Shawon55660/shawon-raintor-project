import React from 'react';
import BannarSection1 from './BannarSection1';
import BannarSection2 from './BannarSection2';

const Bannar = () => {
    return (
        <div className="min-h-screen  pt-12 md:pt-0 mx-auto bg-[url('/bannar.png')] bg-center bg-cover">
            <BannarSection1></BannarSection1>
            <BannarSection2></BannarSection2>
            
        </div>
    );
};

export default Bannar;
