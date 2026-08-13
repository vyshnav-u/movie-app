import React from 'react'

function About() {
    return (
        <div>
            <div className='py-[100px]'>
                <h1 className='space text-end italic text-white/50 px-9 pt-2 '>//Watch Now!</h1>
                <hr />
                <div className='flex items-center justify-between relative px-9 p-9'>
                    <h1 className=' hidden md:block bebas md:text-[200px] max-w-[800px] md:leading-[150px] text-white'>WATCH THE BEST SHOWS*</h1>
                    <h1 className=' bebas text-right text-[100px] md:text-[200px] max-w-[800px] leading-[90px] md:leading-[150px] text-white/50'>Watch Enjoy Discover </h1>
                    <img className='h-[250px] md:h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' src="./src/assets/heart.png" alt="" />
                </div>
                <p className=' px-9 space italic leading-[16px] text-xs text-right pb-5 text-white'>**Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente minus totam est perferendis possimus mollitia inventore, reprehenderit culpa dicta temporibus animi qui aliquid iste illum suscipit a quo necessitatibus nisi!</p>

                <hr />
            </div>
        </div>
    )
}

export default About
