import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out", display: "flex" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        }
      });
    }
  }, [isMenuOpen]);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })

    return () => unsub();
  }, [])

  return (
    <div className='flex items-center justify-between relative p-4'>
      <Link to="/">
        <img src='logo.png' alt="Logo" className='h-12 sm:h-16' />
      </Link>

      <nav className='hidden sm:flex items-center gap-5 mx-5'>
        <Link to="/" className='font-bold'>Home</Link>
        <Link to="/" className='font-bold'>Features</Link>
        <Link to="/" className='font-bold'>Use Cases</Link>
        <Link to="/" className='font-bold'>About</Link>
        <Link to={isLoggedIn ? "/chat" : "/login"} className='font-bold px-2 py-1 rounded-md bg-violet shadow-xl'>{isLoggedIn ? "Start Chat" : "Log In"}</Link>
        <Link to={!isLoggedIn && "/signup"} className='font-bold px-2 py-1 rounded-md bg-pink-500 shadow-xl'>{isLoggedIn ? "Logout" : "Sign Up"}</Link>
      </nav>

      
      <button className='text-2xl sm:hidden z-50' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      <nav
        ref={menuRef}
        style={{ display: "none", opacity: 0 }}
        className='flex-col items-center gap-3 p-4 absolute top-full left-0 right-0 bg-stone-100 sm:hidden z-40'
      >
        <Link to="/" className='w-full px-5 py-2 border-b font-bold text-black'>Home</Link>
        <Link to="/" className='w-full px-5 py-2 border-b font-bold text-black'>Features</Link>
        <Link to="/" className='w-full px-5 py-2 border-b font-bold text-black'>Use Cases</Link>
        <Link to="/" className='w-full px-5 py-2 border-b font-bold text-black'>About</Link>
        <Link to={isLoggedIn ? "/chat" : "/login"}  className='w-full px-5 py-2 bg-violet rounded-md shadow-md text-white text-center'>{isLoggedIn ? "Start Chat" : "Log In"}</Link>
        <Link to={!isLoggedIn && "/signup"} className='w-full px-5 py-2 bg-pink-500 rounded-md shadow-md text-white text-center'>{isLoggedIn ? "Logout" : "Sign Up"}</Link>
      </nav>
    </div>
  );
}
