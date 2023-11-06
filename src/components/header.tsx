import Link from "next/link";
import Search from "./Search";

const Header = () => {

   
   return( <header className="flex flex-wrap items-center py-4 shadow-sm">
            <nav className="w-3/12 px-2 md:px-4 tracking-wider
            font-semibold text-gray-800">
               <Link href="/" className="px-2 flex items-center justify-center">
                  <img src="/img/hat.svg" alt="logo"
                  className="w-10 h-10 object-cover inline-block" />
                  <h2 className="ml-1 text-xl md:text-2xl tracking-wider
                  text-green-600 tracking-wider hidden sm:inline-block my-font">foodie</h2>			  
               </Link>
            </nav>
            
         <div className="w-9/12 md:w-6/12 px-2 md:px-4">
         <Search />
         </div>
         
         <div className="w-3/12 hidden md:block">
               <Link href="/categories" className="px-2 text-md text-gray-600 text-center tracking-wider block">
                  Categories
               </Link>
         </div>
     </header> );



};

export default Header;