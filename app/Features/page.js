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
           <section className="text-gray-400 bg-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" alt="Friendly LiveBot" src="/fature01.gif" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
"Empowering Connections: Our Supportive Features 🌟"
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-black">* Buddy Support System 🤝<br/>
* Real-time Assistance 💬<br/>
* 24/7 Availability ⏰<br/>
* Real Listener Feature 👂<br/>
* Lifelong Learning Partner 📚<br/>
* Empathy Hub 🤗<br/>
* Confidential Confidant 🔒<br/>
* Personal Cheerleader 📣<br/>
* Swift Companion 🚀</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>
                   </div>
        </div>
      </div>
    </section>

    <section className="text-gray-400 bg-white body-font"  >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">👋 Who is KrishnaVani?
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed text-black">🤖 KrishnaVani is your digital friend, meticulously designed to bridge the gap between technology and human connection. With advanced natural language processing, KrishnaVani understands your words, adapts to your preferences, and makes every interaction feel like chatting with your real buddy..</p>
            <p className="mb-8 leading-relaxed text-black">⏰ This digital friend is not bound by time or space, ensuring that you always have someone to turn to, no matter the hour or your location. With its ability to understand nuances in language and emotions, KrishnaVani offers a level of empathy and understanding that rivals that of human companions. It's like having a trusted friend by your side, ready to listen without judgment and offer insightful responses that resonate with you.</p>
          
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/hero.jpg"/>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="Friendly LiveBot" src="/featur02.gif" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Why Choose KrishnaVani?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-black">* Engaging Conversations 💬<br/>
* Alleviate Loneliness 🤝<br/>
* Privacy-Conscious Design 🔒<br/>
* Adaptive and Natural 🔄<br/>
* Mental Health Support 💬<br/>
* 24/7 Availability 🕒<br/>
* Non-judgmental Listening 🎧<br/>
* Personalized Interaction 🤖<br/>
* Continuous Learning 📚<br/>
* Emotional Intelligence ❤️</p>
            
             <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>
                     </div>
          </div>
        </div>
      </section>
        </>
    );
    };

    export default Buddy;