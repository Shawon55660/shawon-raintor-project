import React from 'react';
interface AboutcardProps{
  
    text:string,
  
}
const Aboutcard:React.FC<AboutcardProps> = ({text}) => {
    return (
        <div data-aos="fade-up" >
            <button className={`  rounded-full px-12 border-2  py-6`}>{text}</button>
            
        </div>
    );
};

export default Aboutcard;