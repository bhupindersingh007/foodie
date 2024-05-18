'use client'

import { useState, useEffect } from "react";
import Alert from "./Alert";
import { useBookmark } from "@/contexts/BookmarkContext";

type BookmarkButtonProps = {
    recipeId: number
}

export default function BookmarkButton(props: BookmarkButtonProps) {

    const recipeId = props.recipeId.toString();

    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showAlert, setAlert] = useState(false);
    const {bookmarks, deleteBookmark, addBookmark} = useBookmark();

    const hideAlert = () => setTimeout(() => setAlert(false), 2000);

    useEffect(() => {

        bookmarks.indexOf(recipeId) !== -1 
        ? setIsBookmarked(true)
        : setIsBookmarked(false);

    });


    const handleClick = () => {

        if(isBookmarked){
          
           deleteBookmark(recipeId);
           setIsBookmarked(false);
           return;
        }

        addBookmark(recipeId);
        setIsBookmarked(true);
        setAlert(true);
        hideAlert();
    };


    let classNames = isBookmarked ? 'fill-green-600 stroke-green-600 w-6 h-6 md:w-5 md:h-5' : 'w-6 h-6 md:w-5 md:h-5';

    return (

        <>
            {showAlert ? <Alert /> : ''}

            <button className="text-gray-800 me-2" onClick={handleClick} title="Bookmark">
                <svg className={classNames}
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </>


    );

}