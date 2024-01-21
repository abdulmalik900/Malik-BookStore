import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between items-center p-10 ">
        {/* buttons and menu */}
        <div className="flex flex-row justify-between ml-16 ">
          {/* logo an links */}
          <div className="flex flex-row  space-x-24">
            {/* logo */}
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.nytimes.com%2Fproducts%2Fthe-special-day-book&psig=AOvVaw3nOaWlGSqRSxerILS7Hasx&ust=1705753715159000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCjhvi56YMDFQAAAAAdAAAAABAI" alt="logo" /> */}

            {/* links */}
            <div className="hidden  md:flex md:flex-row md:justify-between md:items-center md:space-x-10">
<Link to="/home" className="text-2xl text-gray-500 hover:text-gray-950">
  Home
 </Link>

  <Link to="/register" className="text-2xl text-gray-500 hover:text-gray-950">
  Books
</Link>

<Link to="/contactus" className="text-2xl text-gray-500 hover:text-gray-950">
  Contact Us
</Link>

            </div>
          </div>
        </div>
        {/* login and sign up buttons */}
        <div className="sm:hidden md:flex flex-row space-x-4  mr-24 lg:block">
        <Link to="/login">
  <button className="text-gray-400 font-bold text-2xl py-2 px-4 rounded">
    Login
  </button>
</Link>

<Link to="/register">
  <button className="bg-Cyan hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded-full">
    Register
  </button>
</Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
