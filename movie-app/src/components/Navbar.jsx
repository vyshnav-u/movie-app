import React from 'react'
import { FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <div className='py-9'>
            <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl
                flex items-center justify-between
                px-6 py-3
                bg-white/10
                backdrop-blur-xl
                border border-[#C62828]/40
                rounded-full
                shadow-lg z-50">

                <div className="text-xl font-bold text-[#C62828]">
                    GRAW
                </div>

                <button
                    onClick={() =>
                        document.getElementById('search-section').scrollIntoView({
                            behavior: 'smooth',
                        })
                    }
                    className="flex gap-6 text-xl text-[#C62828]"
                >
                    <FaSearch />
                </button>

            </nav>
        </div>
    )
}

export default Navbar
