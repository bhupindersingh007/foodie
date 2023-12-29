'use client'

import { useState, useEffect } from "react";
import Alert from "./Alert";

type BookmarkButtonProps = {
    recipeId: number
}

export default function BookmarkButton(props: BookmarkButtonProps) {

    const [isBookmarked, setBookmark] = useState(false);
    const [showAlert, setAlert] = useState(false);

    const hideAlert = () => setTimeout(() => setAlert(false), 2000)

    useEffect(() => {

        const recipeId = props.recipeId.toString();


        if (localStorage.bookmarks) {

            JSON.parse(localStorage.bookmarks).indexOf(recipeId) != -1
                ? setBookmark(true)
                : setBookmark(false);

        }

    })


    const handleClick = () => {

        const recipeId = props.recipeId.toString();

        // no bookmarks

        if (!localStorage.bookmarks) {


            localStorage.setItem('bookmarks', JSON.stringify([recipeId]));
            setBookmark(true);
            setAlert(true);
            hideAlert();
            return;

        }

        let bookmarks = JSON.parse(localStorage.bookmarks);

        // remove, recipe already in bookmarks

        if (bookmarks.indexOf(recipeId) != -1) {

            bookmarks = bookmarks.filter((bookmark: string) => bookmark != recipeId);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            setBookmark(false);
            return;

        }

        // add new recipe in bookmarks  

        bookmarks.push(recipeId);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        setBookmark(true);
        setAlert(true);
        hideAlert();

    };



    return (

        <>
            {showAlert ? <Alert /> : ''}

            <button className="text-gray-800 me-2" onClick={handleClick} title="Bookmark">
                <svg className={isBookmarked ? 'fill-green-600 stroke-green-600' : ''}
                    viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </>


    );

}