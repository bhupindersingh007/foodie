import SubHeading from "@/components/SubHeading";
import IngredientList from "@/components/IngredientList";

async function getRecipeDetails(id: number) {

    const res = await fetch(`${process.env.API_URL}/lookup.php?i=${id}`);

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

    return <>
        <article className="lg:w-11/12 lg:mx-auto my-4 md:mt-8 text-gray-800">
            <div className="md:flex md:flex-wrap mb-4">

                <div className="w-full md:w-6/12 lg:w-5/12 px-4 sm:my-4">
                    <img src={data.meals[0].strMealThumb} 
                    alt={data.meals[0].strMeal} 
                    className="rounded w-full object-cover" />
                </div>

                <div className="w-full md:w-6/12 lg:w-7/12 px-4 lg:pl-8 sm:my-4">


                    <header className="flex items-center mb-2 mt-4 sm:mt-0">
                        <h2 className="text-2xl font-semibold tracking-wide capitalize mb-4">
                            {data.meals[0].strMeal} 
                        </h2>
                    </header>

                    <div>
                        
                        <SubHeading title="Ingredients"/>
                    
                        <IngredientList data={data} />

                    </div>
                </div>
            </div>

            <div className="px-4 mt-4 md:mt-2 mb-8 md:mb-12">
                
                <SubHeading title="Instructions"/>

                <p className="py-2">{data.meals[0].strInstructions}</p>
            </div>
        </article>

        <div className="w-11/12 sm:w-7/12 md:w-1/2 mx-auto mb-6">
            <iframe src={`https://www.youtube.com/embed/${data.meals[0].strYoutube.slice(-11)}`}
                className="w-full h-96 rounded">
            </iframe>
        </div>
    </>;

};


export default RecipeDetail;