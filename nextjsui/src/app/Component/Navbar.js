"use client";

import Link from "next/link";
import { User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Top Offer Bar */}
      <div className=" text-red-600 text-center py-2 font-semibold shadow-md z-50 text-sm">
        10% OFF on Diamonds + 50% OFF on Making Charges.
     
      </div>

      {/* Main Navbar */}
        <div className="sticky top-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white text-black shadow-md z-50 gap-3">

        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        {/* <div className="flex gap-4 text-base">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent"
          >
            About
          </Link>
        </div> */}

        {/* Search and Icon */}
        <div className="flex items-center gap-3 w-full md:w-auto">
           <div className="flex gap-4 text-base">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent"
          >
            About
          </Link>
        </div>

          {/* Search Box */}
          <div className="flex items-center gap-2 border border-gray-300 bg-gray-50 px-2 py-1 rounded-md w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-black w-full md:w-40"
            />
            <Search className="text-black" />
          </div>

          {/* User Icon */}
          <Link href="/admin">
            <User className="text-black" />
            Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
