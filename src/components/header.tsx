import Link from "next/link";

const Header = () => {
	
    return( <header className="flex flex-wrap items-center py-2 md:py-4 border-b">
             <nav className="w-3/12 px-2 md:px-4 tracking-wider
             font-semibold text-gray-800">
                 <Link href="/" className="px-2 flex items-center justify-center">
                    <img src="/vercel.svg" alt="logo"
                    className="w-12 h-12 object-cover inline-block" />
                    <h2 className="ml-1 text-xl md:text-3xl tracking-wider
                    text-green-600 tracking-wider hidden sm:inline-block my-font">foodie</h2>			  
                 </Link>
             </nav>
             
            <div className="w-9/12 md:w-6/12 px-2 md:px-4">
            { /* search bar */ }
            </div>
            
            <div className="w-2/12 hidden md:block">
                 <Link href="/categories" className="px-2 text-xl md:text-lg text-center tracking-wider block">
                    Categories
                 </Link>
            </div>
          </header> );
    
  };
  
  export default Header;