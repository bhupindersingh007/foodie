'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
    bookmarks: string[],
    deleteBookmark: (bookmarkId: string) => void,
    addBookmark: (bookmarkId: string) => void
}

const BookmarkContext = createContext<BookmarkContextType | null>(null);


export const BookmarkContextProvider = (props: { children: ReactNode }) => {

    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [initailLoad, setIsInitialLoad] = useState<boolean>(true);

    useEffect(() => {

        const storedBookmarks = localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : [];
        setBookmarks(storedBookmarks);
        setIsInitialLoad(false);
    }, [])

    useEffect(() => {

        if (!initailLoad) {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            console.log('use-effect 2 - inside')
        }
        
    }, [bookmarks, initailLoad]);


    const addBookmark = (bookmarkId: string): void => {
        setBookmarks([...bookmarks, bookmarkId]);
    }

    const deleteBookmark = (bookmarkId: string): void => {

        const updatedBookmarks = bookmarks.filter(bookmark => bookmark != bookmarkId)
        setBookmarks(updatedBookmarks);
    }

    return (

        <BookmarkContext.Provider value={{ bookmarks, deleteBookmark, addBookmark }}>
            {props.children}
        </BookmarkContext.Provider>

    )


}


export const useBookmark = () => {

    const context = useContext(BookmarkContext)

    if (!context) {
        throw new Error('useBookmark must be used within a BookmarkProvider');
    }

    return context;

}

