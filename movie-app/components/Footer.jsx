import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white rounded-t-[40px] overflow-hidden mt-20">
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Graw</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover the best movies and series from around the world.
                            Stream premium entertainment anytime.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Explore</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">Movies</li>
                            <li className="hover:text-white cursor-pointer">Series</li>
                            <li className="hover:text-white cursor-pointer">Trending</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Follow Us</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Instagram
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                X / Twitter
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Facebook
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                YouTube
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <p className="text-gray-400 text-sm">
                            hello@graw.com
                        </p>

                        <p className="text-gray-400 text-sm mt-2">
                            +91 98765 43210
                        </p>
                    </div>

                </div>
                <div className="relative mb-4 h-20 md:h-[200px] overflow-hidden">
                    <h1
                        className=" hidden
                        md:block
          absolute
          bottom-[-20px]
          md:bottom-[-50px]
          left-0
          w-full
          text-center
          text-[120px]
          md:text-[340px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white
          select-none
          translate-y-20
          "
                    >
                        Graw
                    </h1>
                </div>

                <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xs text-gray-500">
                    <p>© 2026 Graw. All rights reserved.</p>
                    <p>Privacy Policy</p>
                </div>

            </div>


        </footer>
    );
}

export default Footer;