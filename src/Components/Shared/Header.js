import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { HiSun, HiMoon } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Header = () => {

    const { theme, systemTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;


    return (
        <div className="navbar sticky top-0 dark:bg-gray-900 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-white">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/services'><li><a>Services</a></li></Link>
                        <Link to='/prices'><li><a>Pricing</a></li></Link>
                        <Link to='/contactUs'><li><a>Contact Us</a></li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl dark:text-white">Ainnotation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 dark:text-white">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/services'><li><a>Services</a></li></Link>
                    <Link to='/prices'><li><a>Pricing</a></li></Link>
                    <Link to='/contactUs'><li><a>Contact Us</a></li></Link>

                </ul>
            </div>
            <div className="navbar-end dark:text-white">
                {currentTheme === "dark" ? (
                    <button className='text-3xl lg:mx-5 mx-2'
                        onClick={() => setTheme('light')}
                    >
                        {''}
                        <HiSun />
                    </button>
                ) : (
                    <button className='text-3xl lg:mx-5 mx-2'
                        onClick={() => setTheme('dark')}
                    >
                        <HiMoon />
                    </button>
                )}
                <a className="btn btn-secondary" >Try for free</a>
            </div>
            
        </div>
    );
};

export default Header;