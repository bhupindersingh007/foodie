import Link from 'next/link'
import Button from './Button'

export default function Hero() {

    return <section className="mb-6 md:mb-12">
        <div className="flex flex-wrap md:items-center">

            <div className="w-full md:w-6/12">
                <div style={{ backgroundImage: "url('/img/dishes-2.jpg')" }}
                    className="py-48 md:py-64 ml-4 md:ml-0 bg-cover rounded-b"></div>
            </div>

            <div className="w-full md:w-6/12 px-4">
                <div className="md:px-6 lg:px-12 py-6">

                    {/* brand logo with title and tagline */}
                    
                    <div className="flex items-center mb-3">
                        <img src="img/hat.svg" alt="foodie" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
                        <h2 className="text-3xl md:text-5xl ml-2 font-semibold tracking-wider text-green-600 my-font">
                            foodie
                        </h2>
                    </div>

                    <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
                        Don't just be foodie, make tasty food</h2>

                    <p className="text-xl mb-6 text-gray-600 mb-8">Foodie is a collection of 200+
                        unique recipes. So, don't just be foodie, make tasty food.</p>

                    <Button href="/categories" title="Explore" />
                </div>
            </div>

        </div>
    </section>


}