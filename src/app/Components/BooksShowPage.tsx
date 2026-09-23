import Image from "next/image";
import { BooksType } from "../AllTypes";
import Link from "next/link";

export type BooksPageProps = {
  Data: BooksType;
};

const BooksShowPage = ({ Data }: BooksPageProps) => {
  return (
    <article className="group w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {" "}
      {/* Image Section */}{" "}
      <div className="relative h-72 overflow-hidden bg-linear-to-br from-slate-100 via-white to-amber-50">
        {" "}
        {/* Decorative blur */}{" "}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/30 blur-2xl" />{" "}
        {/* Category */}{" "}
        <div className="absolute left-4 top-4 z-10">
          {" "}
          <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md">
            {" "}
            {Data.category}{" "}
          </span>{" "}
        </div>{" "}
        {/* Rating */}{" "}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-md">
          {" "}
          <span className="text-amber-500">★</span> {Data.rating}{" "}
        </div>{" "}
        {/* Book Image */}{" "}
        <div className="absolute inset-0 flex items-center justify-center pt-5">
          {" "}
          <div className="relative h-56 w-36 overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
            {" "}
            <Image
              src={Data.image}
              alt={Data.bookName}
              fill
              className="object-cover"
              sizes="144px"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="p-5">
        {" "}
        {/* Title & Author */}{" "}
        <div className="mb-4">
          {" "}
          <h2 className="line-clamp-1 text-xl font-bold tracking-tight text-gray-900">
            {" "}
            {Data.bookName}{" "}
          </h2>{" "}
          <p className="mt-1 text-sm font-medium text-gray-500">
            {" "}
            by <span className="text-gray-800">{Data.author}</span>{" "}
          </p>{" "}
        </div>{" "}
        {/* Book Info */}{" "}
        <div className="mb-4 grid grid-cols-3 divide-x rounded-2xl border border-gray-100 bg-gray-50 py-3">
          {" "}
          <div className="text-center">
            {" "}
            <p className="text-xs text-gray-400">Pages</p>{" "}
            <p className="mt-1 text-sm font-bold text-gray-800">
              {" "}
              {Data.totalPages}{" "}
            </p>{" "}
          </div>{" "}
          <div className="text-center">
            {" "}
            <p className="text-xs text-gray-400">Published</p>{" "}
            <p className="mt-1 text-sm font-bold text-gray-800">
              {" "}
              {Data.yearOfPublishing}{" "}
            </p>{" "}
          </div>{" "}
          <div className="text-center">
            {" "}
            <p className="text-xs text-gray-400">Rating</p>{" "}
            <p className="mt-1 text-sm font-bold text-gray-800">
              {" "}
              {Data.rating}/5{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Review */}{" "}
        <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-500">
          {" "}
          {Data.review}{" "}
        </p>{" "}
        {/* Tags */}{" "}
        <div className="mb-5 flex flex-wrap gap-2">
          {" "}
          {Data.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
            >
              {" "}
              #{tag}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        {/* Publisher */}{" "}
        <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-4">
          {" "}
          <div>
            {" "}
            <p className="text-xs text-gray-400">Publisher</p>{" "}
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {" "}
              {Data.publisher}{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            {" "}
            →{" "}
          </div>{" "}
        </div>{" "}
        {/* CTA */}{" "}
        <Link href={`/Books/${Data.id}`}><button className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/20 active:scale-[0.98]">
          {" "}
          View Book Details{" "}
        </button>{" "}</Link>
      </div>{" "}
    </article>
  );
};

export default BooksShowPage;
