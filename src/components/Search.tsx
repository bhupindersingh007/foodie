"use client"

import Link from 'next/link';
import { Component } from 'react';

async function searchDishes(query: string) {

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();

};


type SearchState = {
    query: string,
    recipes: any
}


class Search extends Component<{}, SearchState> {

    constructor(props: any) {

        super(props);
        this.state = {
            query: '',
            recipes: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleClick() {

        this.setState({ query: '', recipes: [] });
    }


    handleChange(event: any) {

        event.preventDefault();

        this.setState({ query: event.target.value }, this.handleSearch);
    }

    async handleSearch() {


        if (!this.state.query.length) {
            return null;
        }

        const data = await searchDishes(this.state.query);
        this.setState({ recipes: data.meals });

    }


    render() {

        let classes = 'shadow w-full rounded text-left absolute bg-white mt-2';

        return (

            <div className="relative">
                <svg className="absolute left-0 top-0 mx-3 mt-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 
					16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                </svg>
                
                <form>
                    <input onChange={this.handleChange}
                        value={this.state.query} type="search" placeholder="Search..."
                        className="block w-full border border-gray-300 px-10 py-2 rounded focus:outline-none focus:shadow" />
                </form>


                {
                    this.state.query &&
                    <SuggestionBox recipes={this.state.recipes} 
                    classes={classes} handleClick={this.handleClick} />

                }
            </div>

        );

    }

}


function SuggestionBox(props: any) {

    if (!props.recipes) {

        return <ul className={props.classes}>
            {
                <li className="px-2 py-1 text-gray-800 hover:bg-gray-100">
                    <p className="text-gray-500 ml-4">No such recipe</p>
                </li>
            }
        </ul>;

    }

    return (

        <ul className={props.classes}>
            { props.recipes.splice(0, 5).map((recipe: any) => (
                <li key={recipe.idMeal} className="px-2 py-1 text-gray-800 hover:bg-gray-100" onClick={props.handleClick}>
                    <Link href="/recipes/[id]" as={`/recipes/${recipe.idMeal}`} className="flex items-center">
                        <img src={recipe.strMealThumb} alt="image" className="w-12 h-12 rounded" />
                        <p className="text-gray-800 ml-4">{recipe.strMeal}</p>
                    </Link>
                </li>)) }
        </ul>
    );

}




export default Search;













