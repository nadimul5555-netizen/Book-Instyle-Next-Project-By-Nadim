'use client'
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { BooksContext } from "../Context/Context";
import { BooksType } from "../AllTypes";
import WishListBooks from "./WishListBooks";
import ReadBooks from "./ReadBooks";

export interface PageProps {
  wishList:BooksType[];
}

export interface ButtonStateProps {
  shortedReadBooks:BooksType[];
  setShortedReadBooks:Dispatch<SetStateAction<BooksType[]>>;
  setShortedWishList:Dispatch<SetStateAction<BooksType[]>>;
  shortedWishList:BooksType[];
}


const ListedBooks = () => {
  const {wishList} =useContext(BooksContext);
  const {readBooks} =useContext(BooksContext);
 

 const [shortBy,setShotBy]= useState<'rating'|'pages'|'years'>("rating");
  

const handleShort=(Books: BooksType[])=>{
 const shortedBooks = [...Books];

 if(shortBy === 'rating'){
  shortedBooks.sort((a,b)=> b.rating - a.rating)
 }
 else if(shortBy === 'pages'){
  shortedBooks.sort((a,b)=> b.totalPages - a.totalPages)
 }
 else if(shortBy === 'years'){
  shortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
 }
 return shortedBooks
}
  const shortedReadBooks=(handleShort(readBooks))
 const shortedWishList=(handleShort(wishList))


  const [tab,setTab]=useState<boolean>(false);
  const handleTabs= (props:boolean)=>{
     setTab(props)
  }
  return (
    <div className="container mx-auto my-5">
      <div className="flex  h-50 justify-center items-center bg-amber-200 rounded-3xl border-gray-200 my-12">
        <h1 className="text-6xl font-bold">Listed Books</h1>
      </div>
      <div className="text-center py-8">
      <select value={shortBy} 
      onChange={(e)=>{
        setShotBy(e.target.value as 'rating'|'pages'|'years')
      }} className="select select-success">
  <option disabled={true}>Shorted by</option>
  <option value='rating'>Rating</option>
  <option value='pages'>Numbers of Pages</option>
  <option value='years'>Published Years</option>
</select>
      </div>
     <div>
      <button onClick={()=> handleTabs(false)} className={`btn rounded-r-none rounded-lg  ${tab===false?'bg-green-600 px-5 font-medium text-white shadow-sm':''}`}>Read Books {readBooks.length}</button>
      <button onClick={()=> handleTabs(true)} className={`btn rounded-l-none rounded-lg ${tab===true? 'bg-green-600 px-5 font-medium text-white shadow-sm':''}`}>Wishlist Books {wishList.length}</button>
     </div>
     <div>
      {
        tab === true? shortedWishList.length > 0 ? shortedWishList.map((data)=> <WishListBooks data={data} key={data.id}></WishListBooks>):"There is no Wishlists Books Available !": shortedReadBooks.length > 0 ?  shortedReadBooks.map((Data)=> <ReadBooks key={Data.id} Data={Data}></ReadBooks>):"There is no Read Books Available !"
      }
     </div>
    </div>
  )
}

export default ListedBooks;