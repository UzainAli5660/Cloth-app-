import { Link, useLocation } from "react-router-dom";
import '../App.css';

function Header() {
    const location = useLocation(); // Get the current route path

    return (
        <header className="text-gray-400 bg-black body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img width={50} height={40} src="https://cdn.vectorstock.com/i/1000v/92/53/clothing-logo-online-shop-fashion-icon-vector-11979253.jpg" alt="" />
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Uzain's Clothing</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {location.pathname !== '/' && (
                        <Link to="/" className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                    )}
                    <Link to="/Search" className="mr-5 hover:text-gray-900">
                       More Products
                    </Link>
                    <Link to="/About" className="mr-5 hover:text-gray-900">
                        About Us
                    </Link>
                    <Link to="/Contact" className="mr-5 hover:text-gray-900">
                        Contact Us
                    </Link>
                </nav>
                <Link to="/Login" className="mr-5 hover:text-gray-900">
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Sign In
                    </button>
                </Link>
               
            </div>
        </header>
    );
}

export default Header;
