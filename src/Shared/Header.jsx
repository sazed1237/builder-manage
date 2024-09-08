import React from 'react';
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import searchIcon from '../assets/icon/search-normal.png'

const Header = () => {

    const navItems = <>
        <li className='hover:text-secondaryColor'><Link>About</Link></li>
        <li className='hover:text-secondaryColor'><Link>Projects</Link></li>
        <li className='hover:text-secondaryColor'><Link>Agents</Link></li>
        <li className='hover:text-secondaryColor'><Link>Services</Link></li>
        <li className='hover:text-secondaryColor'><Link>Listings</Link></li>
    </>

    return (
        <div className='w-full bg-grayColor2 border border-grayColor h-[70px] my-5 rounded-full flex items-center justify-between px-10'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='flex items-center gap-x-16 '>
                {/* nave items */}
                <div className=''>
                    <ul className='flex space-x-7 bg-white rounded-full py-3 px-5 border border-black'>
                        {navItems}
                        <img src={searchIcon} alt="" />
                    </ul>
                </div>

                <div className='flex items-center gap-x-16'>
                    <p>Other Services</p>
                    <button className='px-5 py-3 bg-white rounded-full border '>Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Header;