import Link from 'next/link';
import Card from '@/components/Card';


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
            <header className="flex justify-center mb-6">
                <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
                <h1 className="text-2xl font-semibold tracking-wider text-green-600 my-font">
                    Categories
                </h1>
            </header>
            <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6">
                { data.categories.map(
                    (category : Category)  => 
                    <div key={category.idCategory} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 my-2 px-2">
                        <Link href="/dishes/[name]" as={`/dishes/${category.strCategory}`}>
                            <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
                        </Link>
                    </div>
                )}
            </div>
        </div>

}

