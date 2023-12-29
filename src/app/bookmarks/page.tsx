'use client'

import Button from "@/components/Button";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Link from "next/link";
import { Component } from "react";

type BookmarksState = {
    dishesData: any
};

class Bookmarks extends Component<{}, BookmarksState> {

    constructor(props: any) {

        super(props);

        this.state = { dishesData: [] };

        this.getRecipeDetails = this.getRecipeDetails.bind(this);
        this.getBookmarkedRecipes = this.getBookmarkedRecipes.bind(this);
    }


    async componentDidMount() {

        let data = await this.getBookmarkedRecipes();

        console.log(data);

        this.setState({ dishesData: data });


    }


    async getRecipeDetails(id: number) {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        const data = await res.json();

        return data;

    }


    async getBookmarkedRecipes() {

        const bookmarks = JSON.parse(localStorage.bookmarks);

        const dishesDataPromises = bookmarks.map((bookmark: any) => this.getRecipeDetails(bookmark));

        const dishesData = await Promise.all(dishesDataPromises);

        return dishesData;

    }


    render() {


        if (this.state.dishesData.length == 0) {
           
            return (
                <div className="mt-8 md:mt-12">
                    <Heading title="My Bookmarks" />
                    <div className="mb-10 text-center">
                        <h1 className="text-gray-600 p-4 mb-3">No Bookmarks...</h1>
                        <Button href="/" title="Back to Home" />
                    </div>
                </div>
            )

        }


        return (

            <div className="mt-8 md:mt-12">

                <Heading title="My Bookmarks" />

                <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6 px-2">
                    {this.state.dishesData.map((dish: any) =>
                        <div key={dish.meals[0].idMeal} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-4 px-2">
                            <Link href="/recipes/[id]" as={`/recipes/${dish.meals[0].idMeal}`}>
                                <Card mealName={dish.meals[0].strMeal} mealImg={dish.meals[0].strMealThumb} />
                            </Link>
                        </div>)}
                </div>
            </div>

        );

    }

}


export default Bookmarks;