import React from 'react';
import {Link} from 'react-router-dom';
import Cards from './Cards';

const Navbar = () => {
    return (
        <nav className="bg-red-300 p-2 mt-0 fixed w-full z-10 top-0">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <Link to="/" className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <span className="text-2xl pl-2"><i className="em em-grinning"></i> Brand McBrandface</span>
                    </Link>
                </div>
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-gray-900 no-underline" to="/cards">Cards</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-gray-900 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/">link</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-gray-900 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/">link</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-gray-900 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/">link</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
