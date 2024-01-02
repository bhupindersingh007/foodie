'use client'

import Link from "next/link";
import Search from "./Search";
import { useState } from "react";

export default function Header() {

   const [showSearch, setSearch] = useState(false);


   return (

      <header className="sticky left-0 top-0 bg-white md:border-b print:hidden shadow-sm md:shadow-none">

         <nav className="flex flex-wrap items-center justify-between py-3.5 md:w-11/12 md:mx-auto">

            <div className="md:w-3/12 px-2 md:px-4 tracking-wider font-semibold text-gray-800">
               <Link href="/" className="px-2 flex items-center">
                  <img src="/img/hat.svg" alt="Foodie" className="w-10 h-10 object-cover inline-block" />
                  <h2 className="ml-1 text-2xl tracking-wider
                  text-green-600 tracking-wider font-shadows">Foodie</h2>
               </Link>
            </div>

            {/* search for medium and large screens */}
            <div className="w-full md:w-6/12 px-2 md:px-4 hidden md:block">
               <Search />
            </div>

            {/* search for small screens */}

            { showSearch ? <div className="w-full md:hidden order-last md:order-none mt-2.5 px-2"><Search /></div> : '' }

            <div className="md:w-3/12 text-center pe-4 md:pe-0">

               <button className="text-gray-700 me-2 md:hidden" onClick={ ()=> setSearch(!showSearch) }>
                  <svg className="text-gray-700 w-6 h-6 md:w-5 md:h-5"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                     <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 
                  16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                  </svg>
               </button>
               
               {/* bookmarks */}

               <Link href="/bookmarks" className="inline-flex items-center text-gray-700 hover:text-gray-800 transition-color mt-1">
                  
                  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" fill="none" 
                  strokeLinecap="round" strokeLinejoin="round">
                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  
                  <span className="ms-1 hidden md:inline-block">My Bookmarks</span>

               </Link>

              

            </div>
         </nav>

      </header>

   );



};
