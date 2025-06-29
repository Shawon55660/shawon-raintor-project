import React from 'react';

import { IoMdArrowDown } from 'react-icons/io';
interface SecondaryButtonProps{
  
    text:string,
   textColor:string,
    borderColor:string
}
const SecondaryButton:React.FC<SecondaryButtonProps> = ({text,textColor,borderColor}) => {
    return (
         <div>
            <button className={`flex bg-transparent items-center ${textColor} ${borderColor}  text-sm lg:text-lg `}><span className='rounded-full flex items-center p-3 border-[1px]'><IoMdArrowDown /></span> <span className='rounded-full flex items-center px-3 py-3 border-[1px]'>{text}</span></button>
        </div>
    );
};

export default SecondaryButton;