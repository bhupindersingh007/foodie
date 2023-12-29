import Link from "next/link";
import Search from "./Search";

export default function Header() {


   return (

      <header className="sticky left-0 top-0 bg-white border-b print:hidden">

         <nav className="flex flex-wrap items-center py-3.5 md:w-11/12 md:mx-auto">

            <div className="w-3/12 hidden md:block px-2 md:px-4 tracking-wider font-semibold text-gray-800">
               <Link href="/" className="px-2 flex items-center">
                  <img src="/img/hat.svg" alt="logo" className="w-10 h-10 object-cover inline-block" />
                  <h2 className="ml-1 text-xl md:text-2xl tracking-wider
                  text-green-600 tracking-wider hidden sm:inline-block my-font">foodie</h2>
               </Link>
            </div>

            <div className="w-full md:w-6/12 px-2 md:px-4">
               <Search />
            </div>

            <div className="w-3/12 hidden md:block text-center">
               
               {/* bookmarks */}

               <Link href="/bookmarks" className="inline-flex items-center text-gray-700 mt-1">
                  
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" 
                  strokeLinecap="round" strokeLinejoin="round">
                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  
                  <span className="ms-1">
                     My Bookmarks 
                     <sup>
                        <span className="bg-green-600 py-px px-1 text-white rounded-full ms-0.5">2</span>
                     </sup>
                  </span>

               </Link>

            </div>
         </nav>

      </header>

   );



};
