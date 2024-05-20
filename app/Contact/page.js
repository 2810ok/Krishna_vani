"use client";
import React, { useState } from 'react';

import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 border-gray-200 dark:bg-white -900 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-5 rtl:space-x-reverse">
        <img src="/logo.jpg" class="h-10 w-10 rounded-full hover:scale-150" alt="Flowbite Logo" />
  
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-500">KrishnaVani</span>
        </a>
        <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
       
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white-800  dark:border-black-700">
    <li>
    <a href="/" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Home</a>
    </li>
    <li>
      <Link href="/Buddy" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Buddy</Link>
    </li>
    <li>
      <a href="/Features" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Features</a>
    </li>
    <li>
      <a href="/Contact" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact us</a>
    </li>
    <li>
      <a href="/About" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">About us</a>
    </li>
  </ul>
</div>

 </div>
</nav>


);
};

const Buddy = () => {
    return (
        <>
        <Header />
        <section className="text-gray-400 bg-white-900 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
                ></iframe>
                <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-400 leading-relaxed">example@email.com</a>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">123-456-7890</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                </div>
                <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                </div>
                <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
            </div>
        </section>
        </>
    );
    };

    export default Buddy;