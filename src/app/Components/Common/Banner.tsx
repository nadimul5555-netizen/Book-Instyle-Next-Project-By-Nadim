import Image from 'next/image';
import React from 'react';
import banner from '@/assets/Book_image-removebg-preview.png'

const Banner = () => {
  return (
<div className="px-4">
  <div className="container mx-auto my-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-50 via-white to-emerald-100 shadow-xl shadow-green-100/50">
    <div className="grid min-h-[500px] grid-cols-1 items-center lg:grid-cols-2">

      {/* Left Content */}
      <div className="flex items-center justify-center px-8 py-14 lg:px-16 lg:py-20">
        <div className="max-w-xl">

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Discover Your Next Read
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Books to
            <span className="block text-green-600">
              freshen up
            </span>
            your bookshelf
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Explore inspiring stories, timeless classics, and exciting new
            reads curated to make your bookshelf even better.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group btn h-12 rounded-full border-0 bg-green-600 px-7 text-white shadow-lg shadow-green-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
              View The List
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="btn h-12 rounded-full border border-gray-300 bg-white px-6 text-gray-700 shadow-sm transition-all hover:border-green-400 hover:bg-green-50"> Explore Books </button>

          </div>

          {/* Small Stats */}
          <div className="mt-10 flex items-center gap-8 border-t border-gray-200 pt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">1K+</p>
              <p className="text-sm text-gray-500">Books</p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold text-gray-900">4.9★</p>
              <p className="text-sm text-gray-500">Reader Rating</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex h-full min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 to-emerald-200 px-8 lg:min-h-[500px]">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-green-400/20 blur-2xl"></div>

        <Image
          className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
          src={banner}
          alt="Books banner"
          priority
        />

      </div>

    </div>
  </div>
</div>

  );
};

export default Banner;