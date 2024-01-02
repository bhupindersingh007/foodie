import Card from '@/components/Card';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import SubHeading from '@/components/SubHeading';
import Button from '@/components/Button';
import Link from 'next/link'
import IngredientList from '@/components/IngredientList';
import Badge from '@/components/Badge';
import Clock from '@/components/Clock';
import BookmarkButton from '@/components/BookmarkButton';


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


async function getRecipeDetails(id: number) {

  const res = await fetch(`${process.env.API_URL}/lookup.php?i=${id}`);

  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }

  return res.json();

}


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

  const dishesId = [52843, 52795, 52958, 52989, 52973, 53082, 53051, 52852];

  const dishesDataPromises = dishesId.map((dishId) => getRecipeDetails(dishId));

  const dishesData : any = await Promise.all(dishesDataPromises);

  return <>
    
    <Hero />

    {/* categories */}

    <section className="mb-14">
      
      <Heading title="Categories" />

      <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8 px-2">
        {categoriesData.categories.slice(0, 12).map(
          (category: Category) =>
            (<div key={category.idCategory} className="w-1/2 sm:w-4/12 lg:w-2/12 mb-4 px-2">
              <Link href="/dishes/[name]" as={`/dishes/${category.strCategory}`}>
                <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
              </Link>
            </div>)
        )}
      </div>

      <div className="text-center">
        <Button href="/categories" title="See More" />
      </div>

    </section>


    {/* dish of the day */}

    <section className="mt-6 mb-12">

      <Heading title="Dish of the Day" />

      <div className="md:flex md:flex-wrap md:w-11/12 md:mx-auto mb-4 px-2">

        <div className="w-full md:w-6/12 lg:w-5/12 px-4 sm:my-4">
          <Link href={ `/recipes/${randomDishData.meals[0].idMeal}` }>
          <img src={randomDishData.meals[0].strMealThumb} alt={randomDishData.meals[0].strMeal}
            className="rounded w-full object-cover max-h-96 md:max-h-none" />
            </Link>
        </div>

        <div className="w-full md:w-6/12 lg:w-7/12 px-4 lg:pl-8 sm:my-4">

          <header className="flex justify-between items-start md:items-center mb-2 mt-4 sm:mt-0 mb-4">

            <h2 className="text-2xl md:text-2xl font-semibold tracking-wide capitalize text-gray-700 mb-2 md:mb-0">
              {randomDishData.meals[0].strMeal}
            </h2>

            <div className="mt-1 -me-2 md:mt-0">
            <BookmarkButton recipeId={ randomDishData.meals[0].idMeal } />
            </div>
          </header>



          <div className="mb-6">

            <Link href={`/dishes/${randomDishData.meals[0].strCategory}`}>
                <Badge title={randomDishData.meals[0].strCategory} />                        
            </Link>

            <Badge title={ randomDishData.meals[0].strArea }  />

            </div>

            <div className="flex mb-6">

            <Clock title="Prep: 10 mins" />
            <Clock title="Total: 1 hr 02 mins" />

            </div>

            <SubHeading title="Ingredients" />
            <IngredientList data={randomDishData} />
            

            <div className="mt-8">
              <Button href={ `/recipes/${randomDishData.meals[0]['idMeal']}` } title="View Recipe" />
            </div>

          
        </div>
      </div>
    </section>



    {/* most loved dishes */}

    <section className="mb-12">

      <Heading title="Most Loved Dishes" />

      <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6 px-2">

       { dishesData.map((dish: any) =>
          <div key={dish.meals[0].idMeal} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-4 px-2">
            <Link href="/recipes/[id]" as={`/recipes/${dish.meals[0].idMeal}`}>
              <Card mealName={dish.meals[0].strMeal} mealImg={dish.meals[0].strMealThumb} />
            </Link>
        </div>)}

      </div>

    </section>

  </>


}


export default Home;