
import { TfiArrowRight } from 'react-icons/tfi';
import Link from 'next/link';
import PrimaryButton from '../button/PrimaryButton';
import ControlTheme from '../controlThem/ControlTheme';






const Navbar = () => {
  const menu: { page: string; menuBar: string }[] = [{ page: '/', menuBar: 'Home' }, { page: '/About', menuBar: 'About' }, { page: '/Portfolio', menuBar: 'Portfolio' }, { page: '/Blog', menuBar: 'Blog' }]


  return (
    <nav role='navigation' aria-label='Main Navigation' className='  z-50'>
      <div className="navbar   items-center rounded-b-[30px] mx-auto h-[114px] md:h-auto">
        <div className="navbar-start w-[20%] ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menu.map((menuItem, index) => <li key={index}><Link className='capitalize ' href={`${menuItem.page}`} >{menuItem.menuBar}</Link></li>)}
            </ul>
          </div>
          <a className="font-extrabold text-xl">DEVLOP.ME</a>
        </div>
        <div className="navbar-end w-[80%] ">
          <div className='hidden lg:flex'><ul className="menu menu-horizontal px-3 lg:px-6">
            {menu.map((menuItem, index) => <li className='px-2 lg:px-3' key={index}><Link className='capitalize' href={`${menuItem.page}`} >{menuItem.menuBar}</Link></li>)}
          </ul></div>
          <div className=''> <PrimaryButton logo={<TfiArrowRight />} text='Start Project'></PrimaryButton></div>
          <div><ControlTheme></ControlTheme></div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;