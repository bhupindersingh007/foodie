'use client'

export default function PrintButton() {


    const handleClick = () => window.print();

    return (

        <button className="text-gray-800" onClick={ handleClick } title="Print">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
        </button>

    );

}