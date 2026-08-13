import React from 'react'
import Navbar from './Navbar'
import bradImage from '../assets/brad.png'

function Header() {
    return (
        <div>
            <div className='bg-[#FFEFE3] py-5 px-5'>
                <Navbar />

                <div className='flex flex-col bebas leading-none justify-center font-bolder text-center relative h-[400px] md:h-[500px]  text-[#C62828]'>
                    <h1 className='space text-[200px] top-0 left-5 absolute'>
                        *
                    </h1>

                    <h1 className='space text-md text-left max-w-40 md:top-100 top-[360px] italic left-5 absolute'>
                        Watch the best Shows!!
                    </h1>

                    <h1 className='space text-md  text-left max-w-20 md:top-[200px]  top-0 right-5 absolute'>
                        Chaos. Rebellion. Identity. Freedom.↓
                    </h1>

                    <h1 className='pt-10 text-[200px] lg:text-[550px]'>FIGHT</h1>
                    <h1 className='text-1xl  md:-translate-y-[90px]'>--- CLUB ---</h1>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 lg:h-[500px] rounded-b-[100px]' src={bradImage} alt="" />
                </div>
                <h1 className='hidden md:block text-[#C62828]/50 space text-xs text-center'>
                    An underground world where ordinary men escape routine, challenge expectations, and search for meaning beyond material possessions.
                </h1>
                <h1 className='hidden md:block text-[#C62828]/50 space text-xs text-center'>
                    Dive into a chaotic journey of self-discovery, where rules are broken and reality is never quite what it seems.                </h1>


            </div>

        </div>
    )
}

export default Header
