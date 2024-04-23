




import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        const fetchPicture = async () => {
            if (isAuthenticated && user && user.accessToken) {
                try {
                    const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.accessToken}`);
                    const data = await response.json();
                    if (data.picture) {
                        setPicture(data.picture);
                    }
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                }
            }
        };

        fetchPicture();
    }, [isAuthenticated, user]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <header className='sticky bg-slate-200 top-0 z-50'>
            <nav className='nav flex justify-between items-center px-20 py-2'>
                <NavLink to="/">
                    <img className='cursor-pointer w-28 h-16' src='/public/image/internfooterlogo 2.png' alt='logo' />
                </NavLink>
                <div className='navbar'>
                    <ul className='flex gap-10 items-center text-xl'>
                        <li>
                            <NavLink 
                                to="/" 
                                className={`hover:text-red-600 ${activeLink === '/' ? 'text-red-600' : 'text-blue-950'} focus:text-red-700 active:text-DarkRed`} 
                                onClick={() => setActiveLink('/')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={`hover:text-red-600 ${activeLink === '/about' ? 'text-red-600' : 'text-blue-950'} focus:text-red-700 active:text-blue-950`} 
                                onClick={() => setActiveLink('/about')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={`hover:text-red-600 ${activeLink === '/contact' ? 'text-red-600' : 'text-blue-950'} focus:text-red-700 active:text-blue-950`} 
                                onClick={() => setActiveLink('/contact')}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/services" 
                                className={`hover:text-red-600 ${activeLink === '/services' ? 'text-red-600' : 'text-blue-950'} focus:text-red-700 active:text-blue-950`} 
                                onClick={() => setActiveLink('/services')}
                            >
                                Services
                            </NavLink>
                        </li>
                        {/* Showing user profile */}
                        {isAuthenticated && (
                            <li>
                                <img src={user.picture || picture} alt={user.name} className='w-10 h-10 rounded-full' />
                            </li>
                        )}
                        {isAuthenticated ? (
                            <li>
                                <button 
                                    className='bg-slate-800 text-base py-2 px-4 text-white rounded-md hover:bg-red-700 hover:text-white' 
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                >
                                    Log Out
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button 
                                    className='bg-slate-800 text-base py-2 px-4 text-white rounded-md hover:bg-red-700 hover:text-white' 
                                    onClick={() => loginWithRedirect()}
                                >
                                    Log In
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;


