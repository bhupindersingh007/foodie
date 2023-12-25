import Card from '@/components/Card';
import Link from 'next/link'


async function getRandomDish() {

  const res = await fetch(`${process.env.API_URL}/random.php`, { next: { revalidate: (24 * 60 * 60) } });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();

};


async function getCategories() {

  const res = await fetch(`${process.env.API_URL}/categories.php`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();

};


type Category = {
  idCategory: number,
  strCategory: string,
  strCategoryThumb: string
}


async function Home() {

  const randomDishData = await getRandomDish();
  const categoriesData = await getCategories();


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
            <p className="text-lg">Foodie is a collection of 200+
              unique recipes.So, don't just be foodie, make tasty food</p>

            <Link href="/categories" className="px-8 py-2 rounded border-2 border-green-600 
              inline-block text-green-600 mt-4 tracking-wide font-semibold
              hover:bg-green-600 hover:text-white">
              Explore
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 my-2 md:my-0 order-1 md:order-none ">
          <div style={{ backgroundImage: "url('/img/dishes-2.jpg')" }}
            className="py-48 md:py-64 ml-2 md:ml-0 bg-cover rounded-bl rounded-tl"></div>
        </div>
      </div>
    </section>


    <section className="mt-6 md:mb-12">
      <div className="flex flex-wrap md:items-center">
        <div className="w-full md:w-1/2 my-2 md:my-0 order-1 md:order-none ">
          <div style={{ backgroundImage: "url('/img/dishes-3.jpg')" }}
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
            <Link href="/recipes/[id]" as={`/recipes/${randomDishData.meals[0].idMeal}`}>
              <Card mealName={randomDishData.meals[0].strMeal}
                mealImg={randomDishData.meals[0].strMealThumb} />
            </Link>
          </div>
        </div>
      </div>
    </section>


    {/* categories */}

    <section className="mb-6">
      <header className="flex justify-center mb-6">
        <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
        <h1 className="text-2xl font-semibold tracking-wider text-green-600 my-font">
          Categories
        </h1>
      </header>
      <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6">
        {categoriesData.categories.slice(0, 8).map(
          (category: Category) =>
            <div key={category.idCategory} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 my-2 px-2">
              <Link href="/dishes/[name]" as={`/dishes/${category.strCategory}`}>
                <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
              </Link>
            </div>
        )}
      </div>

      <div className="text-center">
        <a className="bg-green-600 text-white px-8 py-2.5 rounded tracking-wider">See More</a>
      </div>

    </section>

  </main>


}


export default Home;