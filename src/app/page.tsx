import Header from '@/components/header'
import Link from 'next/link';

export default function Home() {

  return <main>
    <section className="mt-6 md:mb-12">
     <div className="flex flex-wrap md:items-center">
       <div className="w-full md:w-1/2 px-4 my-2 md:my-0 order-2 md:order-none">
         <div className="md:px-6 lg:px-12 py-6">
           <div className="flex items-center mb-2">
             <img src="img/hat.svg" alt="hat" className="w-20 h-20 
             sm:w-24 sm:h-24 object-cover" />
             <h2 className="text-3xl md:text-5xl ml-2 font-semibold
             tracking-wider text-green-600 my-font">foodie</h2>
           </div>
           <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-2">
             Don't just be foodie, make tasty food</h2>
           <p className="text-lg">Foodie is a collection of 200
           + unique recipes.So, don't just be foodie, make tasty food</p>

              <Link href="/categories" className="px-8 py-2 rounded border-2 border-green-600 
              inline-block text-green-600 mt-4 tracking-wide font-semibold
              hover:bg-green-600 hover:text-white">
                Explore
              </Link>
         </div>
       </div>
       <div className="w-full md:w-1/2 my-2 md:my-0 order-1 md:order-none ">
         <div style={{ backgroundImage:"url('img/dishes-2.jpg')" }}
         className="py-48 md:py-64 ml-2 md:ml-0 bg-cover rounded-bl rounded-tl"></div>
       </div>
     </div>
   </section>
   
   
    <section className="mt-6 md:mb-12">
     <div className="flex flex-wrap md:items-center">
       <div className="w-full md:w-1/2 my-2 md:my-0 order-1 md:order-none ">
         <div style={{ backgroundImage: "url('img/dishes-3.jpg')" }}
         className="py-48 md:py-64 mr-2 md:mr-0 bg-cover rounded-br rounded-tr"></div>
       </div>
       
       <div className="w-full md:w-1/2 px-2 my-2 md:my-0 order-2 md:order-none">
         <header className="flex justify-center my-4">
            <img src="img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
           <h1 className="text-2xl font-semibold tracking-wide text-green-600 my-font">
             Dish of the Day
           </h1>
         </header>

          <div className="sm:w-6/12 sm:mx-auto mt-2">
          { /* dish card */ }	  
         </div>   
       </div>
     </div>
   </section>
   </main>	
  ;
  
}
