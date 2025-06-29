import React from 'react';
interface PrimaryButtonProps{
    logo:React.ReactNode,
    text:string
}

const PrimaryButton:React.FC<PrimaryButtonProps> = ({logo,text}) => {
    return (
        <div>
            <button className='border-[1px] flex items-center gap-3 py-1 lg:py-3 pr-2 lg:pr-3 rounded-full '><span className='rounded-full flex items-center py-2 px-2 border-[1px]'>{logo}</span> <span>{text}</span></button>
        </div>
    );
};

export default PrimaryButton;