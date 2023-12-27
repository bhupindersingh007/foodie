import SubHeading from "@/components/SubHeading";
import IngredientList from "@/components/IngredientList";
import Link from "next/link";
import Badge from "@/components/Badge";

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


                    <header className="sm:flex mb-4 mt-4 sm:mt-0">

                        <h2 className="text-2xl font-semibold tracking-wide capitalize sm:w-10/12 mb-2 sm:mb-0">
                            {data.meals[0].strMeal}
                        </h2>

                        <div className="sm:w-2/12 sm:text-end pt-2">
                            <button className="text-gray-800 me-2">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" 
                            strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            </button>

                            <button className="text-gray-800">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                    <rect x="6" y="14" width="12" height="8"></rect>
                                </svg>
                            </button>

                        </div>


                    </header>



                    <div className="mb-6">

                        <Link href={`/dishes/${data.meals[0].strCategory}`}>
                            <Badge title={data.meals[0].strCategory} />                        
                        </Link>
                        
                        <Badge title={ data.meals[0].strArea }  />

                    </div>

                    <div className="flex mb-6">

                        <div className="flex items-center text-gray-700 me-4">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-sm ms-1">Prep: 10 mins</span>
                        </div>

                        <div className="flex items-center text-gray-700 me-4">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-sm ms-1">Total: 1 hr 10 mins</span>
                        </div>

                    </div>


                    <SubHeading title="Ingredients" />

                    <IngredientList data={data} />

                </div>
            </div>

            <div className="px-4 mt-4 md:mt-2 mb-8 md:mb-12">

                <SubHeading title="Instructions" />

                <p className="py-2 whitespace-pre-wrap leading-relaxed">{data.meals[0].strInstructions}</p>
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