
interface SkillCardProps{
    logo:React.ReactNode,
    header:string,
    details:string
}
const SkillCard:React.FC<SkillCardProps> = ({logo,header,details}) => {
  
    return (
        <div data-aos="fade-up" className='py-[30px] px-[30px] my-8 bg-[#FFFFFF14] text-white rounded-lg
                transition-transform duration-300 ease-in-out delay-150
                hover:rotate-[12deg]  hover:text-black shadow-lg hover:shadow-xl cursor-pointer'>
            <p className='text-5xl lg:text-9xl py-6 text-yellow-200'>{logo}</p>
            <h2 className='py-5 text-xl lg:text-2xl'>{header}</h2>
            <p className='w-9/12 text-sm leading-8 text-[#ffffff82]'>{details}</p>
            
        </div>
    );
};

export default SkillCard;