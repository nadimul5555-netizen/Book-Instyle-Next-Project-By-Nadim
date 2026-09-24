import { BooksType, ParamsBooks } from "@/app/AllTypes";
import ReadButton from "@/app/Components/BooksDtails/readButton";
import WishListButton from "@/app/Components/BooksDtails/wishListButton";
import Image from "next/image";

export type PageProps = {
  params: Promise<ParamsBooks>;
};

const getBooks = async()=>{
   try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    return res.json();
  } catch (error) {
    console.error("Error fetching books Data:", error);
    return [];
  }
};


const BooksDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
   const BooksData = await getBooks();

   const Data = BooksData.find((data:BooksType)=> data.id === parseInt(id))as BooksType;

  


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[42%_58%]">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-white to-amber-50 p-8 sm:p-12 lg:min-h-[650px]">
            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />
            {/* Category */}
            <span className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md sm:left-8 sm:top-8">
              {Data.category}
            </span>
            {/* Rating */}
            <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-md sm:right-8 sm:top-8">
              <span className="text-amber-500">★</span> {Data.rating}
            </div>
            {/* Book */}
            <div className="relative z-10 mt-8 h-[380px] w-[250px] overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.03] sm:h-[440px] sm:w-[290px]">
              <Image
                src={Data.image}
                alt={Data.bookName}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 250px, 290px"
              />
            </div>
          </div>
          {/* ================= DETAILS SIDE ================= */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            {/* Category */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              {Data.category}
            </p>
            {/* Title */}
            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {Data.bookName}
            </h1>
            {/* Author */}
            <p className="mt-4 text-base text-gray-500">
              Written by
              <span className="font-semibold text-gray-800">{Data.author}</span>
            </p>
            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5">
                <span className="text-amber-500">★</span>
                <span className="font-bold text-gray-800">{Data.rating}</span>
              </div>
              <span className="text-sm text-gray-400">
                {Data.rating}/5 rating
              </span>
            </div>
            {/* Divider */} <div className="my-7 h-px bg-gray-100" />
            {/* Review */}
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900">
                About this book
              </p>
              <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                {Data.review}
              </p>
            </div>
            {/* Book Information */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-400"> Pages </p>
                <p className="mt-1 font-bold text-gray-900">
                  {Data.totalPages}
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-400"> Published </p>
                <p className="mt-1 font-bold text-gray-900">
                  {Data.yearOfPublishing}
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-400"> Rating </p>
                <p className="mt-1 font-bold text-gray-900">{Data.rating}/5</p>
              </div>
            </div>
            {/* Tags */}
            <div className="mt-7">
              <div className="flex flex-wrap gap-2">
                {Data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Publisher */}
            <div className="mt-8 border-t border-gray-100 pt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Publisher
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {Data.publisher}
              </p>
            </div>
            <div className="flex my-5 gap-3" >
              <ReadButton Data ={Data} ></ReadButton>

              <WishListButton Data ={Data} ></WishListButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
