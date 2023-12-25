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

async function getDishes() {

  const name = 'Dessert';

  const res = await fetch(`${process.env.API_URL}/filter.php?c=${name}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();

};

type Food = {
  idMeal: number,
  strMeal: string,
  strMealThumb: string
}



type Category = {
  idCategory: number,
  strCategory: string,
  strCategoryThumb: string
}


async function Home() {

  const randomDishData = await getRandomDish();
  const categoriesData = await getCategories();
  const dishesData = await getDishes();

  function getIngredientsListWithMeasure() {

    let ingredients = [];

    for (let i = 1; i <= 20; i++) {

      if (randomDishData.meals[0][`strIngredient${i}`] && randomDishData.meals[0][`strMeasure${i}`]) {

        ingredients.push(
          <>
            <span className="font-semibold">{randomDishData.meals[0][`strMeasure${i}`]}</span>
            {(randomDishData.meals[0][`strMeasure${i}`]).replace(' ', '').length ? ' - ' : ' '}
            {randomDishData.meals[0][`strIngredient${i}`]}
          </>
        );
      }
    }

    return ingredients;
  }


  return <main>
    <section className="mb-6 md:mb-12">
      <div className="flex flex-wrap md:items-center">

        <div className="w-full md:w-6/12">
          <div style={{ backgroundImage: "url('/img/dishes-2.jpg')" }}
            className="py-48 md:py-64 ml-4 md:ml-0 bg-cover rounded-b"></div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="md:px-6 lg:px-12 py-6">

            <div className="flex items-center mb-3">
              <img src="img/hat.svg" alt="hat" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
              <h2 className="text-3xl md:text-5xl ml-2 font-semibold tracking-wider text-green-600 my-font">foodie</h2>
            </div>

            <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
              Don't just be foodie, make tasty food</h2>

            <p className="text-xl mb-6 text-gray-600 mb-8">Foodie is a collection of 200+
              unique recipes. So, don't just be foodie, make tasty food.</p>

            <Link href="/categories" className="bg-green-600 text-white px-8 py-2.5 rounded 
            tracking-wider hover:bg-green-700">
              Explore
            </Link>
          </div>
        </div>

      </div>
    </section>


    {/* categories */}

    <section className="mb-14">
      <header className="flex justify-center mb-6">
        <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
        <h1 className="text-2xl font-semibold tracking-wider text-green-600 my-font">
          Categories
        </h1>
      </header>
      <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8">
        {categoriesData.categories.slice(0, 12).map(
          (category: Category) =>
            <div key={category.idCategory} className="w-1/2 sm:w-4/12 lg:w-2/12 my-2 px-2">
              <Link href="/dishes/[name]" as={`/dishes/${category.strCategory}`}>
                <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
              </Link>
            </div>
        )}
      </div>

      <div className="text-center">
        <a href="/categories" className="bg-green-600 text-white px-8 py-2.5 rounded
         tracking-wider hover:bg-green-700">See More</a>
      </div>

    </section>


    {/* dish of the day */}

    <section className="mt-6 md:mb-12">

      <header className="flex justify-center mb-8">
        <img src="img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
        <h1 className="text-2xl font-semibold tracking-wide text-green-600 my-font">
          Dish of the Day
        </h1>
      </header>

      <div className="md:flex md:flex-wrap md:w-11/12 md:mx-auto mb-4">

        <div className="w-full md:w-6/12 lg:w-5/12 px-4 sm:my-4">
          <img src={randomDishData.meals[0].strMealThumb} alt={randomDishData.meals[0].strMeal}
            className="rounded w-full object-cover shadow-sm" />
        </div>

        <div className="w-full md:w-6/12 lg:w-7/12 px-4 lg:pl-8 sm:my-4">

          <header className="flex items-center mb-2 mt-4 sm:mt-0">
            <h2 className="text-2xl md:text-2xl font-semibold tracking-wide capitalize text-gray-700 mb-4">
              {randomDishData.meals[0].strMeal}
            </h2>
          </header>


          <div>
            <header className="flex items-center border-b pb-1.5 mb-2">
              <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
              <h3 className="text-xl font-semibold text-green-600 tracking-wider my-font">Ingredients</h3>
            </header>
            <ul className="list-disc list-inside">
              {getIngredientsListWithMeasure().map((item, index) => <li className="pt-1" key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>



    {/* most loved dishes */}
    <section className="mb-12">
      <header className="flex justify-center mb-6">
        <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
        <h1 className="text-2xl font-semibold tracking-wider my-font text-green-600">
          Most Loved Dishes
        </h1>
      </header>

      <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6">
        {dishesData.meals.slice(16, 24).map((food: Food) =>
          <div key={food.idMeal} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 my-2 px-2">
            <Link href="/recipes/[id]" as={`/recipes/${food.idMeal}`}>
              <Card mealName={food.strMeal} mealImg={food.strMealThumb} />
            </Link>
          </div>)
        }
      </div>

    </section>

  </main>


}


export default Home;