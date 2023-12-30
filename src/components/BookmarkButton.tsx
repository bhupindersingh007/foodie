'use client'

import { useState, useEffect } from "react";
import Alert from "./Alert";

type BookmarkButtonProps = {
    recipeId: number
}

export default function BookmarkButton(props: BookmarkButtonProps) {

    const recipeId = props.recipeId.toString();

    const [isBookmarked, setBookmark] = useState(false);
    const [showAlert, setAlert] = useState(false);

    const hideAlert = () => setTimeout(() => setAlert(false), 2000);

    useEffect(() => {

        if (localStorage.bookmarks) {

            JSON.parse(localStorage.bookmarks).indexOf(recipeId) != -1
                ? setBookmark(true)
                : setBookmark(false);

        }

    });

    const addBookmark = (bookmarks: any) => {
     
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }


    const handleClick = () => {

        let bookmarks = localStorage.bookmarks == null ? [] : JSON.parse(localStorage.bookmarks);

        if (!localStorage.bookmarks) {

            addBookmark([recipeId]);
            setBookmark(true);
            setAlert(true);
            hideAlert();
            return;
        }


        if (bookmarks.indexOf(recipeId) != -1) {

            bookmarks = bookmarks.filter((bookmark: string) => bookmark != recipeId);
            addBookmark(bookmarks);
            setBookmark(false);
            return;
            
        }

        bookmarks.push(recipeId);
        addBookmark(bookmarks);
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