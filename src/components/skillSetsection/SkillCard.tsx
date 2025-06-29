import React from 'react';
interface SkillCardProps{
    logo:React.ReactNode,
    header:string,
    details:string
}
const SkillCard:React.FC<SkillCardProps> = ({logo,header,details}) => {
    return (
        <div className='py-[30px] bg-[#FFFFFF14] text-white px-[30px] rounded-lg my-8 hover:rotate-[12deg] transition-all'>
            <p className='text-5xl lg:text-9xl py-6 text-yellow-200'>{logo}</p>
            <h2 className='py-5 text-xl lg:text-2xl'>{header}</h2>
            <p className='w-9/12 text-sm leading-8 text-[#ffffff82]'>{details}</p>
            
        </div>
    );
};

export default SkillCard;