import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/book.ico'

const Navbar = () => {
const Lists = (
  <>
    <li>
      <Link
        href="/Books"
        className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/ListedBooks"
        className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
      >
        Listed Books
      </Link>
    </li>

    <li>
      <Link
        href="/PagesToRead"
        className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
      >
        Pages to Read
      </Link>
    </li>
  </>
);

return (
  <div className="sticky top-0 z-50 border-b border-gray-100 bg-base-100/90 shadow-sm backdrop-blur-md">
    <div className="navbar container mx-auto min-h-[72px] px-4">

      {/* Logo */}
      <div className="navbar-start">

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-gray-100 lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-56 gap-1 rounded-2xl border border-gray-100 bg-base-100 p-3 shadow-xl"
          >
            {Lists}
          </ul>
        </div>

        <Link
          href="/"
          className="ml-1 flex items-center gap-2"
        >
          <Image
            src={logo}
            alt="Book Vibe Logo"
            className="h-9 w-auto object-contain"
          />

          <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Book Vibe
          </span>
        </Link>

      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-2 px-1">
          {Lists}
        </ul>
      </div>

      {/* Actions */}
      <div className="navbar-end gap-2 sm:gap-3">

        <button className="btn h-10 min-h-10 rounded-full border border-gray-200 bg-white px-5 font-medium text-gray-700 shadow-none transition-all duration-200 hover:border-green-500 hover:bg-green-50 hover:text-green-600">
          Sign in
        </button>

        <button className="btn h-10 min-h-10 rounded-full border-0 bg-green-600 px-5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md">
          Sign Up
        </button>

      </div>

    </div>
  </div>


  );
};

export default Navbar;