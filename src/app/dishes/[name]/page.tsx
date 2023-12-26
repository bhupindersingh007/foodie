import Link from "next/link";
import Card from "@/components/Card";
import Heading from "@/components/Heading";

async function getDishes(name : string) {
  
    const res = await fetch(`${process.env.API_URL}/filter.php?c=${name}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();

};

type Food = {
    idMeal : number,
    strMeal : string,
    strMealThumb : string
}

type DishesProp = {
    params : { name : string }
}

async function Dishes(props : DishesProp) {

   const data = await getDishes(props.params.name);
	  
   return <div className="mt-8 md:mt-12">

         <Heading title={ `${props.params.name} Dishes` } />

           <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6 px-2">
           {  data.meals.map((food : Food) => 
                <div key={food.idMeal} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-4 px-2">
                    <Link href="/recipes/[id]" as={`/recipes/${food.idMeal}`}>
                        <Card mealName={food.strMeal} mealImg={food.strMealThumb}  />
                    </Link>
                </div>)
            }
           </div>
       </div>;
};

export default Dishes