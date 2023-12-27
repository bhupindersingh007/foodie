export default function Footer() {

   return (

      <footer className="border-t text-center px-2 py-6 flex justify-center items-center">
         <p className="text-gray-500">&copy; Foodie Made with </p>

         <svg viewBox="0 0 24 24" width="24" height="24"
            className="h-4 w-4 ml-1 inline-block align-baseline text-red-500 mb-0.5"
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
            </path>
         </svg>
      </footer>
   );

};
