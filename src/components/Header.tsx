import Link from "next/link";
import Search from "./Search";

const Header = () => {

   
   return( 
   
         <header className="sticky left-0 top-0 bg-white border-b">

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
         
         <div className="w-3/12 hidden md:block">
               <Link href="/categories" className="px-2 text-md text-gray-600 text-center tracking-wider block">
                  Categories
               </Link>
         </div>
     </nav> 
     </header> 
     
     );



};

export default Header;
