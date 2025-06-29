import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
interface WorkCardProps{
  
    text:string,
    button:string
    
}

const WorkCard:React.FC<WorkCardProps> = ({text,button})=> {
    return (
        <div className=' bg-[#000000] group hover:bg-[#C5FF41] hover:rotate-[2deg] hover:text-black transition-all p-8 mt-8 rounded-xl'>
            <div className='flex  justify-between text-white items-center'>
                <button className='bg-[#C5FFEE] text-black group-hover:text-white group-hover:bg-black text-sm  px-6 lg:px-10 py-2 rounded-full'>{button}</button>
                <button className='flex items-center gap-2 group-hover:text-black '> <FaArrowRightLong />
                <span className='border-b-2 text-sm group-hover:text-black '>Read More</span></button>
            </div>
            <p className='text-sm group-hover:text-black leading-7 pt-12 text-[#ffffff8d]'>{text}</p>
            
        </div>
    );
};

export default WorkCard;