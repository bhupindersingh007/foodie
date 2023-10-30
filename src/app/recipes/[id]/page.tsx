async function getRecipeDetails(id: number) {

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();

}


type RecipeDetailProps = {
    params: { id: number }
}


async function RecipeDetail(props: RecipeDetailProps) {

    const data = await getRecipeDetails(props.params.id);

    function getIngredientsList() {

        let ingredients = [];

        for (let i = 1; i <= 20; i++) {

            if (data.meals[0][`strIngredient${i}`] && data.meals[0][`strMeasure${i}`]) {
                ingredients.push(data.meals[0][`strIngredient${i}`] + ' - ' + data.meals[0][`strMeasure${i}`]);
            }
        }
        return ingredients;
    }

    return <>
        <article className="lg:w-11/12 lg:mx-auto my-4 md:mt-8 text-gray-800">
            <div className="md:flex md:flex-wrap">
                <div className="w-full md:w-7/12 lg:w-6/12 px-4 sm:my-4">
                    <img src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal}
                        className="rounded w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-5/12 lg:w-6/12 px-4 lg:pl-12 sm:my-4">

                    <header className="flex items-center mb-2 mt-4 sm:mt-0">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide capitalize mb-4">{data.meals[0].strMeal}</h2>
                    </header>


                    <div>
                        <header className="flex items-center border-b pb-1 mb-2">
                            <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
                            <h3 className="text-2xl font-semibold text-green-600 tracking-wider my-font">Ingredients</h3>
                        </header>
                        <ul className="list-circle list-inside">
                            { getIngredientsList().map((item, index) => <li className="pt-1" key={index}>{item}</li>) }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-4 md:mt-2 mb-8 md:mb-12">
                <header className="flex items-center mb-2 border-b pb-1 mb-2">
                    <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
                    <h3 className="text-2xl text-green-600 font-semibold 
          tracking-wider my-font">Instructions</h3>
                </header>
                <p className="py-2">{data.meals[0].strInstructions}</p>
            </div>
        </article>

        <div className="w-11/12 sm:w-7/12 md:w-1/2 mx-auto mb-6">
            <iframe src={`https://www.youtube.com/embed/${data.meals[0].strYoutube.slice(-11)}`}
                className="w-full h-80">
            </iframe>
        </div>
    </>;

};


export default RecipeDetail;