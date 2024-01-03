import Link from "next/link";

export default function Footer() {

   return (

      <footer className="border-t text-center px-2 py-6 text-gray-600">
         <span className="me-1">&copy; Foodie, Made by</span>

         <Link href="https://github.com/bhupindersingh007" target="_blank" className="hover:text-gray-700 hover:underline hover:underline-offset-auto transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2"
               fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-1 text-red-500 hover:text-red-600 inline">
               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>bhupindersingh007</span>
         </Link>

      </footer>
   );

};
