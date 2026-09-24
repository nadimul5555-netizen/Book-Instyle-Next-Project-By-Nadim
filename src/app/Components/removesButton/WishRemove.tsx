'use client'
import { BooksType } from "@/app/AllTypes";
import { BooksContext } from "@/app/Context/Context";
import { useContext } from "react";

export type WishRemoveProps = {
  data: BooksType;
}

const WishRemove = ({ data }: WishRemoveProps) => {
    const {wishList,setWishList}=useContext(BooksContext)

  const onRemove =(data :BooksType)=>{
    const removedWishList=wishList.filter(wish=> data.id !== wish.id )
    setWishList(removedWishList)
  }

  return (
    <div>
       <button
              onClick={() => onRemove(data)}
              className="
              inline-flex items-center gap-1.5
              rounded-lg
              border border-red-100
              bg-red-50
              px-3 py-2
              text-[10px] font-bold
              text-red-500
              transition-all duration-300
              hover:border-red-200
              hover:bg-red-500
              hover:text-white
              active:scale-95
              "
              >
              <span className="text-xs">✕</span>
              Remove
            </button>
    </div>
  )
}

export default WishRemove;