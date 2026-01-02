
import { Link, NavLink } from 'react-router';
import './styles/header.css';

const Header = () => {
   
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" menu-sm dropdown-content   z-1 mt-3 w-52 p-2  text-[#757575] text-[18px] font-medium">
                            <NavLink to='/statistics'><a>Statistics</a></NavLink>
                            <NavLink to='/appliedjobs'><a>Applied Jobs</a></NavLink>
                            <NavLink to='/blog'><a>Blog</a></NavLink>
                        </ul>
                    </div>
                    <a className=" text-[32px] font-extrabold">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10.5 menu-horizontal px-1  text-[18px] font-medium text-[#757575] ">
                     <NavLink to='/statistics'><a>Statistics</a></NavLink>
                     <NavLink to='/appliedjobs'><a>Applied Jobs</a></NavLink>
                     <NavLink to='/blog'><a>Blog</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="rounded-lg bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-extrabold text-xl text-white px-7 py-5 ">Star Applying</a>
                </div>
                </div>
        </div>
    );
};

export default Header;