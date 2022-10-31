import React, { useState, useEffect } from 'react'
import { Header } from './header';
import Link from 'next/link';
import Image from 'next/image'
import Logo from './logo';
import Router, { useRouter } from 'next/router';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { faBarChart,  faMoneyBillTransfer, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import useDarkMode from './darkMode';
import ImagineHeader from './Imagine';
import Live from './Live';
import ctl from '@netlify/classnames-template-literals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const navElements = [
  { name: 'Home', href: '/' },
  { name: 'About The Series', href: '/about'},
  { name: 'History', href: '/history'},
  { name: 'Ministrations', href: '/ministrations', liveIndicator: false},
  { name: 'Live', href: '/live', liveIndicator: true},
  // { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
]


export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode('light');
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setMenu(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        // console.log("stopped");
      });
    };
  }, [router.events]);

const activeMenu= ctl(' cursor-pointer space-y-2 text-sm text-teal-600  hover:text-teal-600 relative    ')
const normalMenu = ctl('cursor-pointer space-y-2 text-sm text-white hover:text-teal-600 relative ')
  return (

    <>

      <nav className="bg-slate-900 px-2 lg:px-6 py-2.5 dark:bg-slate-900 shadow-lg md:w-full ">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/"><a className="flex items-center">
            {/* <Logo /> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap text-slate-200 dark:text-white">The Non-Stop Series&trade;</span>
          </a>
          </Link>
          {/* Menu items */}

          <div className="hidden justify-between items-center w-full md:flex lg:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-5 lg:mt-0 ">
              {navElements.map(({ name, href, liveIndicator }) => (
                <li key={name} className="flex items-center">
                  <Link href={href}><a className={router.asPath === href ? activeMenu: normalMenu }> {name}<span className='absolute'> { liveIndicator ? <Live /> : ''}</span> </a>
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <div className={`hidden md:flex`}>
              <Link href="/donate">

                <a className="inline-flex space-x-2 items-center px-4 py-1 mr-3 text-white bg-teal-600 border border-teal-600 rounded hover:bg-transparent hover:text-teal-600 active:text-teal-500 focus:outline-none focus:ring">
                  <span className="text-sm font-medium"> Donate </span>
                  <FontAwesomeIcon icon={faMoneyBillTransfer} className='w-5 h-5' />
{/* 
                  <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg> */}
                  {/* <div className='h-5 w-5 relative'>
                  <Image 
                  alt='Donate to The Non-Stop Series'
                  src='/images/donate.png'
                  layout='fill'
                  objectFit='fit'
                  className='object-cover object-center' 
                  />
                  </div> */}
                </a>

              </Link>
            </div>
            <span className="mr-3 ml-2 dark:text-slate-300 opacity-30 hidden md:flex">&#124;</span>

            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme(!colorTheme)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer "
                fill={'orange'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="orange"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-white"
                fill={''}
                viewBox="0 0 24 24"
                stroke={'none'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="white"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            )}

            <button onClick={() => setMenu(!menu)} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:outline-none hover:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>




        </div>
      </nav>
      {/* Mobile Menu */}

      {menu && <div
        className={`
    flex 
    md:hidden
    justify-between
    items-start
    px-6
    h-[90vh]
    w-full    
    font-[lato]
    font-bold
    italic
    uppercase
    py-5
    pb-10
    bg-slate-600
    text-lightcolor
    dark:bg-darkcolor   
    `}>
        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-5 lg:mt-0 ">
          {navElements.map(({ name, href }) => (
            <li key={name} className="flex items-center">
              <Link href={href}>
                {router.asPath === href ?
                  <a className="text-teal-600  dark:text-teal-600 hover:dark:text-teal-500 cursor-pointer py-2 text-xl ">
                    {name}
                  </a> :
                  <a className="cursor-pointer hover:text-teal-500 hover:dark:text-teal-400  dark:text-white  py-2 text-xl">
                    {name} </a>
                }
              </Link>
            </li>
          ))}
        <Link href={'/donate'}>
           <a className="cursor-pointer hover:text-teal-500 hover:dark:text-teal-400  dark:text-white  py-2 text-xl">
                    {'Donate'} 
            </a>
        </Link>
        </ul>
      </div>}




    </>

  );
}

