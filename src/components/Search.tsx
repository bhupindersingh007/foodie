"use client"

import { Component } from 'react';
import SuggestionBox from './SuggestionBox';


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

        const res = await fetch(`/api/search?query=${this.state.query}`);
        const data = await res.json();

        this.setState({ recipes: data.meals });

    }


    render() {


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
                        className="block w-full border bg-white border-gray-300 px-10 py-2 rounded-full focus:outline-none focus:shadow" />
                </form>


                {
                    this.state.query &&
                    <SuggestionBox recipes={this.state.recipes} 
                    handleClick={this.handleClick} />

                }
            </div>

        );

    }

}



export default Search;













