'use client'
import { BooksType } from '@/app/AllTypes';
import { BooksContext } from '@/app/Context/Context';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { toast } from 'react-toastify';
export interface ButtonProps {
  Data:BooksType;
  
}
export interface ButtonStateProps {
  wishList: BooksType[];
  setWishList: Dispatch<SetStateAction<BooksType[]>>;
  readBooks:BooksType[];
  
}
const WishListButton = ({Data}:ButtonProps) => {




  const {setWishList,wishList,readBooks}:ButtonStateProps = useContext(BooksContext);
  const handleButton = () =>{
    const alradyExist = wishList.some(data => data.id === Data.id) 
    const ExistOnRead = readBooks.some(data => data.id === Data.id) 
    if(alradyExist){
      toast.error(`The ${Data.bookName} Already Exist on List`)
      return ;
    }else if(ExistOnRead){
      toast.error(`The ${Data.bookName} is Alrady Added on Read Books`)
      return ;
    }
   setWishList([...wishList,Data])
   toast.success(`Successfully Added ${Data.bookName} On tha List`)
     
  }
  return (
    <div>
      <button onClick={()=>handleButton()} className="btn h-10 min-h-10 rounded-full border-0 bg-green-600 px-5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md">
                Wishlist
              </button>
    </div>
  );
};

export default WishListButton;