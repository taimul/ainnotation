import { useTheme } from 'next-themes';
import React, { useEffect, useState }  from 'react';
import { HiSun, HiMoon } from "react-icons/hi";


const Header = () => {
   
 const {theme,systemTheme,setTheme} = useTheme();

 const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 const currentTheme = theme === "system" ? systemTheme : theme;
    

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>

                        <li><a>Products</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Ainnotation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>

                    <li><a>Products</a></li>
                </ul>
            </div>
            <div className="navbar-end"> 
            {currentTheme === "dark" ? (
            <button className='text-3xl'
            onClick={() => setTheme('light')}
            >
                {''}
                    <HiSun/>
                </button>
                ) : (
                <button className='text-3xl' 
                onClick={() => setTheme('dark')}
                >
                <HiMoon/>
                </button>
                )}    
                <a className="btn" >Try for free</a> 
            </div>
            {/* <HiSun/> */}
            {/* <HiOutlineSun/> */}
        </div>
    );
};

export default Header;