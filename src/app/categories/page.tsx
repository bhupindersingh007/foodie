import Link from 'next/link';
import Card from '@/components/Card';
import Heading from '@/components/Heading';


async function getCategories() {
  
    const res = await fetch(`${process.env.API_URL}/categories.php`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();

};


type Category = {
    idCategory : number,
    strCategory : string,
    strCategoryThumb : string
}


export default async function Categories() {

    const data = await getCategories();

    return <div className="mt-8 md:mt-12">

            <Heading title="Categories" />
            
            <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-6 px-2">
                { data.categories.map((category : Category) => (
                    <div key={category.idCategory}  className="w-1/2 sm:w-4/12 lg:w-2/12 mb-4 px-2">
                        <Link href="/dishes/[name]" as={`/dishes/${category.strCategory}`}>
                            <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

}

