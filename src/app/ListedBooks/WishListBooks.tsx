import Image from "next/image";
import { BooksType } from "../AllTypes";
import Link from "next/link";
import WishRemove from "../Components/removesButton/WishRemove";

export type WishListBooksProps = {
  data: BooksType;
}

const WishListBooks = ({ data }: WishListBooksProps) => {

  return (
    <article
      className="my-3
        group relative overflow-hidden
        rounded-2xl border border-slate-200/80
        bg-white
        shadow-[0_4px_20px_rgba(15,23,42,0.06)]
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-slate-300
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full
          bg-emerald-400/10 blur-3xl
          transition-all duration-500
          group-hover:bg-emerald-400/20
        "
      />

      <div className="relative flex gap-4 p-3 sm:p-4">

        {/* Book Cover */}
        <div
          className="
            relative h-36 w-28 shrink-0
            overflow-hidden rounded-xl
            bg-gradient-to-br from-slate-100 via-white to-slate-200
            shadow-[0_8px_20px_rgba(15,23,42,0.12)]
            ring-1 ring-black/5
            transition-all duration-500
            group-hover:-rotate-1
            group-hover:scale-[1.03]
          "
        >
          <Image
            src={data.image}
            alt={data.bookName}
            fill
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
            sizes="112px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

          <span
            className="
              absolute left-2 top-2
              rounded-full
              bg-white/90 px-2 py-1
              text-[9px] font-bold
              text-slate-700
              shadow-sm
              backdrop-blur-md
            "
          >
            {data.category}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          {/* Title + Rating */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">
              <h2
                className="
                  truncate text-base font-bold
                  tracking-tight text-slate-900
                  transition-colors
                  group-hover:text-emerald-700
                  sm:text-lg
                "
              >
                {data.bookName}
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                by{" "}
                <span className="font-semibold text-slate-700">
                  {data.author}
                </span>
              </p>
            </div>

            {/* Rating */}
            <div
              className="
                flex shrink-0 items-center gap-1
                rounded-full
                bg-amber-50 px-2.5 py-1.5
                text-xs font-bold text-amber-700
                ring-1 ring-amber-100
              "
            >
              <span className="text-amber-500">★</span>
              {data.rating}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {data.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md
                  bg-emerald-50 px-2 py-1
                  text-[9px] font-semibold
                  text-emerald-700
                  ring-1 ring-emerald-100
                "
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div
            className="
              mt-3 flex flex-wrap items-center
              gap-x-4 gap-y-1.5
              text-[10px] text-slate-500
            "
          >
            <span>
              ◷ {data.yearOfPublishing}
            </span>

            <span className="h-3 w-px bg-slate-200" />

            <span>
              ▤ {data.totalPages} pages
            </span>

            <span className="h-3 w-px bg-slate-200" />

            <span className="max-w-28 truncate">
              {data.publisher}
            </span>
          </div>

          {/* Divider */}
          <div className="my-3 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2">

            {/* Remove */}
            <div>

           <WishRemove data={data} key={data.id}></WishRemove>
              </div>

            {/* View Details */}
            <Link
              href={`/Books/${data.id}`}
              className="
                inline-flex items-center gap-2
                rounded-lg
                bg-slate-900
                px-3.5 py-2
                text-[10px] font-bold
                text-white
                shadow-sm
                transition-all duration-300
                hover:bg-emerald-600
                hover:shadow-lg
                hover:shadow-emerald-500/20
                active:scale-95
              "
            >
              View Details
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom hover line */}
      <div
        className="
          absolute bottom-0 left-0
          h-0.5 w-0
          bg-gradient-to-r from-emerald-500 to-teal-400
          transition-all duration-500
          group-hover:w-full
        "
      />
    </article>
  );
};


export default WishListBooks;