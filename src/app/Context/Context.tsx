'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react"
import { BooksType } from "../AllTypes"

export type ContextProps = {
  children: React.ReactNode
}
export interface ButtonStateProps {
  wishList: BooksType[];
  setWishList: Dispatch<SetStateAction<BooksType[]>>;
  readBooks: BooksType[];
  setReadBooks: Dispatch<SetStateAction<BooksType[]>>;

}
  export const BooksContext = createContext<ButtonStateProps>({} as ButtonStateProps)
const BooksProvider = ({ children }: ContextProps) => {
  const [readBooks,setReadBooks] = useState<BooksType[]>([])
  const [wishList,setWishList] = useState<BooksType[]>([])


  const AllStates ={
    readBooks,
    setReadBooks,
    wishList,
    setWishList,

  }
  
  return (
     <BooksContext.Provider value={AllStates}>{children}</BooksContext.Provider>
  )
}

export default BooksProvider;