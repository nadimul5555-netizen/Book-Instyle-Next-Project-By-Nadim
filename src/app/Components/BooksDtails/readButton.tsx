'use client'
import { BooksType } from "@/app/AllTypes";
import { BooksContext } from "@/app/Context/Context";
import { Dispatch, SetStateAction, useContext } from "react";
import { toast } from "react-toastify";

export type ReadButtonProps = {
  Data: BooksType;
}
export type ReadHandleProps = {
  readBooks:BooksType[];
  setReadBooks:Dispatch<SetStateAction<BooksType[]>>;
  wishList:BooksType[];
}
const ReadButton=({Data}:ReadButtonProps)=>{
  const {readBooks,setReadBooks,wishList}:ReadHandleProps = useContext(BooksContext);
  
const hsndleReadButton = ()=>{
  const alreadyRead = readBooks.some(data => data.id === Data.id)
  const ExistOnWishlist = wishList.some(data => data.id === Data.id)
  if(alreadyRead){
    toast.error(`Already Exist on The List!`)
    return ;
  }else if(ExistOnWishlist){
    toast.error(`The ${Data.bookName} is Already Exist on Wishlist Books`)
    return ;
  }
  setReadBooks([...readBooks,Data])
  toast.success(`Successfully Added ${Data.bookName} in Read Boooks`)
}
  
  return (
    <div>
      <button onClick={()=> hsndleReadButton()} className="btn h-10 min-h-10 rounded-full border border-gray-200 bg-white px-5 font-medium text-gray-700 shadow-none transition-all duration-200 hover:border-green-500 hover:bg-green-50 hover:text-green-600">
                Read
              </button>
    </div>
  )
}

export default ReadButton;